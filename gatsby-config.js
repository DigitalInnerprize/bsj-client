const { name } = require('./package.json')
let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const siteUrl = process.env.URL || process.env.DEPLOY_URL || 'https://digitalinnerprize.tech'

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    title: `Behind Scene Jobs`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    siteUrl,
    author: 'Martez Howard',
    siteVerification: {
      google: ``,
      bing: ``,
    },
    social: {
      //usernames for SEO
      twitter: 'https://twitter.com/legend_4real',
      linkedin: '',
    },
    socialLinks: {
      // profile URLS for social links, include https://
      twitter: 'https://twitter.com/legend_4real',
      github: 'https://github.com/digitalinnerprize',
      linkedin: '',
      facebook: '',
      stackOverflow: '',
      instagram: '',
      youtube: '',
      email: '', //include mailto:
      phone: '', //include tel:
    },
    keywords: [],
    organization: {
      //update with relevant personal data
      name: 'Digital InnerPrize l.l.c',
      url: 'https://digitalinnerprize.tech',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`, `/tags/links`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FB_PIXEL_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID, // set up your own analytics account for this site and insert id here
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl,
                author
              }
            }
          }
        `,
        feeds: [
          {
            // adjust to fit your specific query
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  language: `en-us`,
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  author: edge.node.frontmatter.author.email + `(` + edge.node.frontmatter.author.name + `)`,
                  image: {
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.featured.publicURL,
                    title: edge.node.frontmatter.featuredAlt,
                    link: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  },
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            // adjust below to fit markdown structure
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      path
                      date
                      title
                      featured {
                        publicURL
                      }
                      featuredAlt
                      author {
                        name
                        email
                      }
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'RSS Feed', // update to add your site name + RSS Feed
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: 'emoji-icon',
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: 'inline',
                margin: '0',
                position: 'relative',
                top: '2px',
                width: '19px',
              },
            },
          },
        ],
      },
    },
    // To learn more, visit: https://gatsby.dev/offline
    // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
