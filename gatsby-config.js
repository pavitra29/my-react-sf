module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'My Awesome Site',
    keywords: 'react, designers'
  },
  plugins: ['gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'upqac22ypngw',
        accessToken: '211ba8bec5f2c8c56a15ed911e48823fb8914199a1a971808a6002030953706e',
      }
    }
  ],
}
