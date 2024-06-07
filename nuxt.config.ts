// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/image", ["@storyblok/nuxt", {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        componentsDir: "~/components",
    }], "@nuxt/eslint"],
    components: {
        dirs: [
            {
                path: "~/components/storyblok",
                global: true,
            },
        ],
    },
    image: {
        storyblok: {
            baseURL: "https://a.storyblok.com",
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@use \"~/assets/global.scss\" as *;",
                },
            },
        },
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                quotes: "double",
                semi: true,
                // ...
            },
        },
    },
});
