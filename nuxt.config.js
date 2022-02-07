import colors from "vuetify/es5/util/colors";

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s ",
        title: "ImperialHub",
        htmlAttrs: {
            lang: "pt-BR",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "title",
                name: "title",
                content: "ImperialHub",
            },
            {
                hid: "description",
                name: "description",
                content: "ImperialHub - Com a ImperialHub voce aumenta seus lucros, disparando mensagens com uma taxa de abertura acima de 95%.",
            },
            {
                hid: "image",
                name: "image",
                content: "https://www.imperialhub.com.br/wallpaperImperialHub.png",
            },
            {
                hid: "robots",
                name: "robots",
                content: "index,nofollow",
            },
            {
                hid: "robots",
                name: "robots",
                content: "index,nofollow",
            },
            /* Twitter */
            {
                hid: "twitter:card",
                name: "twitter:card",
                content: "summary_large_image",
            },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: "ImperialHub",
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: "Com a ImperialHub voce aumenta seus lucros, disparando mensagens com uma taxa de abertura acima de 95%.",
            },
            {
                hid: "twitter:url",
                name: "twitter:url",
                content: "https://www.imperialhub.com.br/",
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: "https://www.imperialhub.com.br/wallpaperImperialHub.png",
            },
            /* Facebook */
            {
                hid: "og:url",
                name: "og:url",
                content: "https://www.imperialhub.com.br/",
            },
            {
                hid: "og:type",
                name: "og:type",
                content: "website",
            },
            {
                hid: "og:title",
                name: "og:title",
                content: "ImperialHub",
            },
            {
                hid: "og:description",
                name: "og:description",
                content: "ImperialHub - Com a ImperialHub voce aumenta seus lucros, disparando mensagens com uma taxa de abertura acima de 95%.",
            },
            {
                hid: "og:image",
                name: "og:image",
                content: "https://www.imperialhub.com.br/wallpaperImperialHub.png",
            },
            {
                hid: "og:image:secure_url",
                name: "og:image:secure_url",
                content: "https://www.imperialhub.com.br/wallpaperImperialHub.png",
            },
            {
                hid: "og:image:type",
                name: "og:image:type",
                content: "image/png",
            },
            {
                hid: "og:image:width",
                name: "og:image:width",
                content: "1920",
            },
            {
                hid: "og:image:height",
                name: "og:image:height",
                content: "1080",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/ImperialIcon.png" },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            { rel: "canonical", href: "https://www.imperialhub.com.br/" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/styleGlobal.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: "~/plugins/vue-scroll-reveal", ssr: false, mode: "client" }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        /*  customVariables: ["~/assets/variables.scss"], */
        theme: {
            dark: false,
            /*  themes: {
                                                                                                                                                  dark: {
                                                                                                                                                    primary: "#0070F3",
                                                                                                                                                    accent: colors.grey.darken3,
                                                                                                                                                    secondary: colors.amber.darken3,
                                                                                                                                                    info: colors.teal.lighten1,
                                                                                                                                                    warning: colors.amber.base,
                                                                                                                                                    error: colors.deepOrange.accent4,
                                                                                                                                                    success: colors.green.accent3,
                                                                                                                                                  },
                                                                                                                                                }, */
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: [
        /*  {
                                                                                                  src: "nuxt.config.js",
                                                                                                  use: "@nuxtjs/vercel-builder",
                                                                                                  config: {},
                                                                                                }, */
    ],
};