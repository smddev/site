import {theme} from "./src/theme";
import React from 'react'
import {GOOGLE_ANALYTICS_KEY} from "./src/utils";

const fs = require('fs-extra')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml')
const _ = require('lodash')

const pages = 'src/pages'

async function readDoc(folder, file, lang) {
    const data = await fs.readFile(`${folder}/${file}`, 'utf8')
    const dataObj = matter(data)
    if (lang) {
        dataObj.data = dataObj.data[lang]
    }
    dataObj.data.slug = file.replace(/\.md$/, "")
    delete dataObj.orig
    return dataObj
}

async function loadSiteData() {
    const config = yaml.safeLoad(await fs.readFileSync('public/admin/config.yml', 'utf8'));
    const lang = process.env.LANG
    const docs = await Promise.all(config.collections
        .filter(c => !!c.folder)
        .map(c => {
            const path = c.folder.split('/')
            path.splice(3, 0, lang)
            return { ...c, folder: `${c.folder}/${lang}`}
        })
        .map(async c => {
            const fileNames = (await fs.readdir(c.folder)).filter(f => path.extname(f) === '.md')
            const files = await Promise.all(fileNames.map(file => readDoc(c.folder, file)))
            return {
                name: c.name,
                docs: _.sortBy(files, f=>f.data.order, f=>f.data.title)
            }
        }))
    const pages = await Promise.all(config.collections
        .filter(c => !!c.files)[0].files
        .map(f => readDoc(path.dirname(f.file), path.basename(f.file), lang)))

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
            reviews: siteData.collections.review,
            expertises: siteData.collections.expertise
        }, '/'),
        pageRoute('contacts', {
            projects: siteData.collections.project,
        }),
        pageRoute('why'),
        pageRoute('about', {
            members: siteData.collections.member,
            facts: siteData.collections.facts,
            reviews: siteData.collections.review
        }),
        pageRoute('privacy-policy'),
        pageRoute('portfolio', {
            projects: siteData.collections.project,
            industries: siteData.collections.industry,
            services: siteData.collections.service,
            techs: siteData.collections.tech,
            expertises: siteData.collections.expertise
        }, null, [
            ...collectionRoutes('project', 'projects',
                {
                    projects: siteData.collections.project,
                    services: siteData.collections.service,
                    industries: siteData.collections.industry,
                    techs: siteData.collections.tech,
                    expertises: siteData.collections.expertise
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
    const localRoutes = {
        '/portfolio': {
            ['ru']: 'Портфолио',
            ['en']: 'Portfolio'
        },
        '/why': {
            ['ru']: 'Почему мы',
            ['en']: 'Why us?'
        },
        '/about': {
            ['ru']: 'О нас',
            ['en']: 'About'
        },
        '/contacts': {
            ['ru']: 'Контакты',
            ['en']: 'Contacts'
        }
    }
    const lang = process.env.LANG

    const paths = ['/portfolio', '/why', '/about', '/contacts']
    const routes = paths.map(path => ({ path, name: localRoutes[path][lang]}))

    return {
        routes,
    }
}

const googleFontLink = (name, sizes) => `https://fonts.googleapis.com/css?family=${name}:${sizes}`
const GoogleFont = ({name, sizes}) => <link href={googleFontLink(name, sizes)} rel="stylesheet"/>

const Document = ({Html, Head, Body, children, state: {routeInfo, siteData, renderMeta}}) => {
    const {data: rData} = routeInfo || {};
    const {item, page, why} = rData || {};
    const {data} = item || page || {};
    const {title = 'Smart Design'} = data || {};

    return <Html lang={ process.env.LANG }>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_KEY}`}/>
            <script async src="analytics/google.js"/>
            <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"/>
            {_.keys(theme.fonts).map(k => <GoogleFont key={k} name={theme.fonts[k]} sizes={theme.fontWeights.join(',')}/>)}
            <title>{title.replace('&nbsp;', ' ')}</title>
        </Head>
        <Body>{children}</Body>
    </Html>
}


export default {
    getSiteData,
    getRoutes,
    Document,
    plugins: ["react-static-plugin-styled-components",
        'react-static-plugin-reach-router']
}
