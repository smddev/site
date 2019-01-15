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

    function collectionRoutes(name, pathName) {
        const component = name.charAt(0).toUpperCase() + name.slice(1)
        return siteData.collections[name].map(item => {
            const path = `${pathName}/${item.data.slug}`
            return {
                path,
                component: `src/containers/${component}`,
                getData: () => {
                    return {
                        item
                    }
                },
            }
        })
    }

    function pageRoute(name, data, path = null, children = []) {
        const p = path ? path : `${name}`
        return {
            path: p,
            getData: () => {
                return {
                    page: siteData.pages[name],
                    ...data
                }
            },
            children
        }
    }

    return [
        pageRoute('index', {
            projects: siteData.collections.project,
            services: siteData.collections.service,
            industries: siteData.collections.industry
        }, '/'),
        pageRoute('contacts', {
            projects: siteData.collections.project,
        }),
        pageRoute('about', {
            members: siteData.collections.member,
        }),
        pageRoute('team', {
            members: siteData.collections.member,
        }, null, collectionRoutes('member', 'members')),
        pageRoute('portfolio', {
            projects: siteData.collections.project,
        }, null, [
            ...collectionRoutes('project', 'projects'),
            ...collectionRoutes('industry', 'industries'),
            ...collectionRoutes('service', 'services')]),
        pageRoute('blog', {
            posts: siteData.collections.post,
        }, null, [
            ...collectionRoutes('post', 'posts')
        ]),
        {
            path: '404',
            component: `${pages}/404`,
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

const googleFontLink = (name) => `https://fonts.googleapis.com/css?family=${name}`
const GoogleFont = ({name}) => <link href={googleFontLink(name)} rel="stylesheet"/>

const Document = ({Html, Head, Body, children, siteData, renderMeta}) =>
    <Html lang="en-US">
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {_.keys(theme.fonts).map(k => <GoogleFont key={k} name={theme.fonts[k]}/>)}
    </Head>
    <Body>{children}</Body>
    </Html>

export default {
    getSiteData,
    getRoutes,
    Document,
    plugins: ["react-static-plugin-styled-components"]
}
