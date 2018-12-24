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
    const data = loadSiteData()

    const routes = [
        {
            path: '/projects',
            name: 'Works'
        },
        {
            path: '/verticals',
            name: 'Industries'
        },
        {
            path: '/services',
            name: 'Services'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/contact',
            name: 'Contact'
        }
    ]


    function collectionPage(name) {
        const compName = name.charAt(0).toUpperCase() + name.slice(1)
        const path = `/${name}s`
        const items = data.collections[name]
        return {
            path,
            component: `${pages}/${compName}s`,
            getData: () => ({
                items,
                routes
            }),
            children: items.map(item => ({
                path: `/${item.data.slug}`,
                component: `${pages}/${compName}`,
                getData: () => ({
                    item,
                    routes
                }),
            })),
        }
    }


    return [
        {
            path: '/',
            component: `${pages}/Home`,
            getData: () => ({
                page: data.pages.main,
                data: {
                    projects: data.collections.project,
                    services: data.collections.service,
                    industries: data.collections.industry
                },
                routes
            })
        },
        {
            path: '/about',
            component: `${pages}/About`,
            getData: () => ({
                page: data.pages.about,
                data: {
                    members: data.collections.member
                },
                routes
            })
        },
        collectionPage('project'),
        collectionPage('post'),
        {
            is404: true,
            component: `${pages}/404`,
        },
    ]
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
