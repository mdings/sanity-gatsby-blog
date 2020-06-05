export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5edaa4dff5a8b0a6eece815f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bdmf95v4',
                  apiId: '263f5e3a-c9b0-4ad5-881f-755849ec52c6'
                },
                {
                  buildHookId: '5edaa4dfd27792bd824e4505',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dcy9o5sy',
                  apiId: '3cdec26a-a8e4-4df7-9bf0-de095766f16a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mdings/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dcy9o5sy.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
