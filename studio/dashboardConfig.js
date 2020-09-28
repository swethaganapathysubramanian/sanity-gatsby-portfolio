export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f71401c5fef40009f53e77b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h43pkdgc',
                  apiId: 'f5c110df-9e2f-413d-a6a0-dd3142451f88'
                },
                {
                  buildHookId: '5f71401c7fd4730152b64684',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vup9a2r9',
                  apiId: '0c7a405a-8066-4ac8-8cee-fadec4a01dc1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swethaganapathysubramanian/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vup9a2r9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
