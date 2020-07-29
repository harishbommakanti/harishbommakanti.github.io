// /.vuepress/config.js

module.exports = {
    title: 'Harish Bommakanti',
    
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