// /.vuepress/config.js

module.exports = {
    title: 'Harish Bommakanti',
    head: [
      ['script',{src: 'https://unpkg.com/vue-typer/dist/vue-typer.min.js'}],
      ['script',{src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.js"}]
    ],

    themeConfig: {
        nextLinks: false,
        prevLinks: false,
        displayAllHeaders: true,
        smoothScroll: true,
        searchPlaceholder: 'College, Java, Resume...',

        sidebar: [
          ['/','Home'],
          '/Education',
          '/Skills',
          '/Experience',
          '/Projects',
          '/Resume'
        ]
      },
    
    markdown: {
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '' }   
    }
}