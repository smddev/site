const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml')
const _ = require('lodash')

function readDoc(file) {
    const data = fs.readFileSync(file, 'utf8')
    const dataObj = matter(data)
    dataObj.data.slug = dataObj.data.title.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
    delete dataObj.orig
    return dataObj
}

function loadSiteData() {
    const config = yaml.safeLoad(fs.readFileSync('public/admin/config.yml', 'utf8'));
    const docs = config.collections.map(c => ({
        name: c.name,
        docs: _.sortBy(fs.readdirSync(c.folder)
            .filter(f => path.extname(f) === '.md')
            .map(file => readDoc(`${c.folder}/${file}`)), ['order', 'name'])


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
                component: 'src/containers/Home',
            },
            {
                path: '/about',
                component: 'src/containers/About',
            },
            {
                path: '/blog',
                component: 'src/containers/Blog',
                getData: () => ({
                    posts: data.collections.post
                }),
                children: data.collections.post.map(post => ({
                    path: `/post/${post.data.slug}`,
                    component: 'src/containers/Post',
                    getData: () => ({
                        post
                    }),
                })),
            },
            {
                is404: true,
                component: 'src/containers/404',
            },
        ]
    },
}
