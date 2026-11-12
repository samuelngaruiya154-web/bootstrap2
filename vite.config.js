import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    base: '/bootstrap2/',

    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080
    }
}