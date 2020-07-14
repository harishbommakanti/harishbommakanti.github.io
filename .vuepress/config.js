// /.vuepress/config.js

module.exports = {
    title: 'Harish Bommakanti',
    
    themeConfig: {
        search: false,
        nextLinks: false,
        prevLinks: false,

        sidebar: [
          '/',
          '/Education.md',
          '/Skills.md',
          '/Experience.md',
          '/Projects.md',
          '/Resume.md'
        ]
      },
    
    markdown: {
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '' }   
    }
}