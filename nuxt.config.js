module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href:
          "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap",
        rel: "stylesheet"
      }
    ]
  },
  router: {
    history: true
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  // fontawesome: {
  //   imports: [
  //     {
  //       set: "@fortawesome/free-solid-svg-icons", // Solid icons
  //       icons: [
  //         "faCookieBite",
  //         "faCommentDots",
  //         "faEnvelope",
  //         "faGrinWink",
  //         "faHeart"
  //       ]
  //     },
  //     {
  //       set: "@fortawesome/free-brands-svg-icons", // Brand icons
  //       icons: [
  //         "faDev",
  //         "faFacebook",
  //         "faTwitter",
  //         "faInstagram",
  //         "faYoutube",
  //         "faGithub"
  //       ]
  //     }
  //   ]
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
