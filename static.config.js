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
    const docs = config.collections.map(c => ({
        name: c.name,
        docs: _.sortBy(fs.readdirSync(c.folder)
            .filter(f => path.extname(f) === '.md')
            .map(file => readDoc(c.folder, file)), ['order', 'name'])


    }))
    return {
        collections: _(docs).keyBy('name').mapValues('docs').value(),
        files: {}
    }
}

export default {

    getSiteData: () => ({
        title: 'React Static with Netlify CMS',
    }),
    getRoutes: () => {
        const data = loadSiteData()
        return [
            {
                path: '/',
                component: `${pages}/Home`,
            },
            {
                path: '/about',
                component: `${pages}/About`,
            },
            {
                path: '/projects',
                component: `${pages}/Projects`,
            },
            {
                path: '/blog',
                component: `${pages}/Blog`,
                getData: () => ({
                    posts: data.collections.post
                }),
                children: data.collections.post.map(post => ({
                    path: `/post/${post.data.slug}`,
                    component: `${pages}/Post`,
                    getData: () => ({
                        post
                    }),
                })),
            },
            {
                is404: true,
                component: `${pages}/404`,
            },
        ]
    },
}
