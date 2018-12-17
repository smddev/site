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
                getData: () => ({
                    page: data.pages.main,
                    data: {
                        projects: data.collections.project,
                        services: data.collections.service,
                        industries: data.collections.industry
                    }
                })
            },
            {
                path: '/about',
                component: `${pages}/About`,
                getData: () => ({
                    page: data.pages.about,
                    data: {
                        members: data.collections.member
                    }
                })
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
