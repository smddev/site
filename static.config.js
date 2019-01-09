import {theme} from "./src/theme";
import React from 'react'

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml')
const _ = require('lodash')

const pages = 'src/pages'

function readDoc(folder, file) {
    const data = fs.readFileSync(`${folder}/${file}`, 'utf8')
    const dataObj = matter(data)
    dataObj.data.slug = file.replace(/\.md$/, "")
    delete dataObj.orig
    return dataObj
}

function loadSiteData() {
    const config = yaml.safeLoad(fs.readFileSync('public/admin/config.yml', 'utf8'));
    const docs = config.collections
        .filter(c => !!c.folder)
        .map(c => ({
            name: c.name,
            docs: _.sortBy(fs.readdirSync(c.folder)
                .filter(f => path.extname(f) === '.md')
                .map(file => readDoc(c.folder, file)), ['order', 'name'])
        }))
    const pages = config.collections
        .filter(c => !!c.files)[0].files
        .map(f => readDoc(path.dirname(f.file), path.basename(f.file)))

    return {
        collections: _(docs).keyBy('name').mapValues('docs').value(),
        pages: _.keyBy(pages, p => p.data.slug)
    }
}


const getRoutes = () => {
    const siteData = loadSiteData()
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

    function collectionRoutes(name, path) {
        const component = name.charAt(0).toUpperCase() + name.slice(1)
        return siteData.collections[name].map(item => ({
            path: `${path}/${item.data.slug}`,
            component: `${pages}/${component}`,
            getData: () => ({
                item,
                routes
            }),
        }))
    }

    function pageRoute(name, data, path = null, children = []) {
        const component = name.charAt(0).toUpperCase() + name.slice(1)
        const p = path ? path : `/${name}`
        return {
            path: p,
            component: `${pages}/${component}`,
            getData: () => ({
                page: siteData.pages[name],
                data,
                routes
            }),
            children
        }
    }

    const siteRoutes = [
        pageRoute('home', {
            projects: siteData.collections.project,
            services: siteData.collections.service,
            industries: siteData.collections.industry
        }, '/'),
        pageRoute('contacts'),
        pageRoute('about', {
            members: siteData.collections.member,
        }),
        pageRoute('team', {
            members: siteData.collections.member,
        }, null, collectionRoutes('member', 'members')),
        pageRoute('portfolio', {
            projects: siteData.collections.project,
        }, null, [...collectionRoutes('project', 'projects'),
            ...collectionRoutes('industry', 'industries'),
            ...collectionRoutes('service', 'services')]),
        {
            is404: true,
            component: `${pages}/404`,
        },
    ]
    console.log('Routes:', siteRoutes)
    return siteRoutes
}

const googleFontLink = (name) => `https://fonts.googleapis.com/css?family=${name}`
const GoogleFont = ({name}) => <link href={googleFontLink(name)} rel="stylesheet"/>

const Document = ({Html, Head, Body, children, siteData, renderMeta}) =>
    <Html lang="en-US">
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {theme.fonts.map((f, i) => <GoogleFont key={i} name={f}/>)}
    </Head>
    <Body>{children}</Body>
    </Html>

export default {

    getSiteData: () => ({
        title: 'SMDDev site',
    }),
    getRoutes,
    Document
}
