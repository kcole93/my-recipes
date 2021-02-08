// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'My Recipes',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: 'keynC78aEV5ucg4p5', // Read-only API Key
        base: 'appJFjE5DMoQ1LPnc',
        tables: [
          {
            name: 'Recipes',
            typeName: 'Recipes',
            links: [
              {
                fieldName: 'Tags',
                typeName: 'Tags',

              },
              {
                fieldName: 'Genre',
                typeName: 'Genres',
              }
            ] // Optional
          },
          {
            name: 'Tags',
            typeName: 'Tags',
            links: [
              {
                fieldName: 'Recipes',
                typeName: 'Recipes',

              },
            ]
          },
          {
            name: 'Genre',
            typeName: 'Genres',
            links: [
              {
                fieldName: 'Recipes',
                typeName: 'Recipes',

              },
            ]
          }
        ]
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['recipeName', 'ingredientsText'],
        collections: [
          {
            typeName: 'Recipes',
            indexName: 'Recipe',
            fields: ['recipeName', 'path']
          }
        ]
      }
    }
  ],
  templates: {
    Recipes: [
      {
        path: '/recipes/:slug',
        component: './src/templates/Recipe.vue'
      },
    ],
      Tags: [
        {
        path: '/tags/:slug',
        component: './src/templates/Tags.vue'   
        }     
      ],
      Genres: [
        {
          path: '/genres/:slug',
          component: './src/templates/Genre.vue'
        }
      ]
  }
}
