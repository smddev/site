const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const yaml = require('js-yaml');

function readDoc(file) {
    const data = fs.readFileSync(file, 'utf8')
    const dataObj = matter(data)
    dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    delete dataObj.orig
    return dataObj
}

function loadSiteData() {
    const config = yaml.safeLoad(fs.readFileSync('public/admin/config.yml', 'utf8'));

    const data = {
        collections: {},
        files: {}
    }
    config.collections.map(c => fs.readdirSync(c.folder)
        .filter(f => path.extname(f) === '.md')
        .forEach(file => {
            const name = c.name
            if (!(name in data.collections)) {
                data.collections[name] = []
            }
            data.collections[name].push(readDoc(`${c.folder}/${file}`))
        }))

    return data
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
                    posts: data.collections.blog
                }),
                children: data.collections.blog.map(post => ({
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
