// /.vuepress/config.js

module.exports = {
    title: 'Harish Bommakanti',
    head: [
      ['script',{src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.js"}],
      ['script',{src: 'https://unpkg.com/vue-typer/dist/vue-typer.min.js'}]
    ],

    themeConfig: {
        nextLinks: false,
        prevLinks: false,
        displayAllHeaders: true,
        smoothScroll: true,
        searchPlaceholder: 'College, Java, Resume...',

        sidebar: [
          ['/','Home'],
          ['/Education','Education'],
          ['/Skills','Skills'],
          ['/Experience','Experience'],
          ['/Projects','Projects'],
          ['/Resume','Resume']
        ]
      },
    
    markdown: {
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '' }   
    }
}