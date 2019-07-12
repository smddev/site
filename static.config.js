import {theme} from "./src/theme";
import React from 'react'

const fs = require('fs-extra')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml')
const _ = require('lodash')

const pages = 'src/pages'

async function readDoc(folder, file) {
    const data = await fs.readFile(`${folder}/${file}`, 'utf8')
    const dataObj = matter(data)
    dataObj.data.slug = file.replace(/\.md$/, "")
    delete dataObj.orig
    return dataObj
}

async function loadSiteData() {
    const config = yaml.safeLoad(await fs.readFileSync('public/admin/config.yml', 'utf8'));
    const docs = await Promise.all(config.collections
        .filter(c => !!c.folder)
        .map(async c => {
            const fileNames = (await fs.readdir(c.folder)).filter(f => path.extname(f) === '.md')
            const files = await Promise.all(fileNames.map(file => readDoc(c.folder, file)))
            return {
                name: c.name,
                docs: _.sortBy(files, ['order', 'name'])
            }
        }))
    const pages = await Promise.all(config.collections
        .filter(c => !!c.files)[0].files
        .map(f => readDoc(path.dirname(f.file), path.basename(f.file))))

    return {
        collections: _(docs).keyBy('name').mapValues('docs').value(),
        pages: _.keyBy(pages, p => p.data.slug)
    }
}


const getRoutes = async () => {
    const siteData = await loadSiteData()

    function collectionRoutes(name, pathName, data = {}) {
        const component = name.charAt(0).toUpperCase() + name.slice(1)
        return siteData.collections[name].map(item => {
            const path = `${pathName}/${item.data.slug}`;
            return {
                path,
                template: `src/containers/${component}`,
                getData: () => ({
                    item,
                    data
                }),
            }
        })
    }

    function pageRoute(name, data, path = null, children = []) {
        const p = path ? path : `${name}`
        return {
            path: p,
            getData: () => ({
                page: siteData.pages[name],
                ...data
            }),
            template: `${pages}/${name}`,
            children
        }
    }

    return [
        pageRoute('index', {
            projects: siteData.collections.project,
            services: siteData.collections.service,
            facts: siteData.collections.facts,
            stages: siteData.collections.stages,
            industries: siteData.collections.industry,
            techs: siteData.collections.tech,
            reviews: siteData.collections.review
        }, '/'),
        pageRoute('contacts', {
            projects: siteData.collections.project,
        }),
        pageRoute('why', {
          members: siteData.collections.why
        }),
        pageRoute('about', {
            members: siteData.collections.member,
            facts: siteData.collections.facts,
            reviews: siteData.collections.review
        }),
        pageRoute('portfolio', {
            projects: siteData.collections.project,
            industries: siteData.collections.industry,
            services: siteData.collections.service,
            techs: siteData.collections.tech,
        }, null, [
            ...collectionRoutes('project', 'projects',
                {
                    projects: siteData.collections.project,
                    services: siteData.collections.service,
                    industries: siteData.collections.industry,
                    techs: siteData.collections.tech
                })
        ]),
        {
            path: 'form-submit',
            template: `${pages}/submit`,
        },
        {
            path: '404',
            template: `${pages}/404`,
        },
    ]
}

const getSiteData = () => {
    const routes = [
        {
            path: '/portfolio',
            name: 'Portfolio'
        },
        {
            path: '/why',
            name: 'Why us?'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/contacts',
            name: 'Contacts'
        }
    ]

    return {
        routes,
    }
}

const googleFontLink = (name, sizes) => `https://fonts.googleapis.com/css?family=${name}:${sizes}`
const GoogleFont = ({name, sizes}) => <link href={googleFontLink(name, sizes)} rel="stylesheet"/>

const Document = ({Html, Head, Body, children, siteData, renderMeta}) =>
    <Html lang="en-US">
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
        {_.keys(theme.fonts).map(k => <GoogleFont key={k} name={theme.fonts[k]} sizes={theme.fontWeights.join(',')}/>)}
    </Head>
    <Body>{children}</Body>
    </Html>

export default {
    getSiteData,
    getRoutes,
    Document,
    plugins: ["react-static-plugin-styled-components",
        'react-static-plugin-reach-router']
}
