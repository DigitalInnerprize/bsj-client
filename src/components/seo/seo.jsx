/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SchemaOrg from './schemaOrg'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({
  description,
  lang,
  meta,
  keywords,
  image,
  title,
  // highlight start
  pathname,
  isBlogPost,
  author,
  datePublished = false,
  dateModified = false,
  // highlight-end
}) {
  const { site, logo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            siteVerification {
              google
              bing
            }
            description
            author
            social {
              twitter
              linkedin
            }
            organization {
              name
              url
            }
          }
        }
        logo: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed
              height
              width
              src
            }
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null
  const metaUrl = `${site.siteMetadata.siteUrl}${pathname}`
  const organization = site.siteMetadata.organization
  organization.logo = {
    url: `${site.siteMetadata.siteUrl}${logo.childImageSharp.fixed.src}`,
    width: logo.childImageSharp.fixed.width,
    height: logo.childImageSharp.height,
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: isBlogPost ? `article` : `website`,
          },
          {
            property: `og:url`,
            content: metaUrl,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.social.twitter,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `google-site-verification`,
            content: site.siteMetadata.siteVerification.google,
          },
          {
            name: `msvalidate.01`,
            content: site.siteMetadata.siteVerification.bing,
          },
        ]
          .concat(
            metaImage
              ? [
                  {
                    property: 'image',
                    content: metaImage,
                  },
                  {
                    property: 'og:image',
                    content: metaImage,
                  },
                  {
                    property: 'og:image:width',
                    content: image.width,
                  },
                  {
                    property: 'og:image:height',
                    content: image.height,
                  },
                  {
                    property: 'og:image:alt',
                    content: image.alt,
                  },
                  {
                    property: 'twitter:image',
                    content: metaImage,
                  },
                  {
                    property: 'twitter:image:alt',
                    content: image.alt,
                  },
                  {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                  },
                ]
              : [
                  {
                    name: 'twitter:card',
                    content: 'summary',
                  },
                ],
          )
          .concat(
            metaImage && metaImage.indexOf('https') > -1
              ? [
                  {
                    propery: 'twitter:image:secure_url',
                    content: metaImage,
                  },
                  {
                    propery: 'og:image:secure_url',
                    content: metaImage,
                  },
                ]
              : [],
          )
          .concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
              : [],
          )
          .concat(meta)}
      />
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={metaUrl}
        title={title}
        image={metaImage}
        description={metaDescription}
        datePublished={datePublished}
        dateModified={dateModified}
        canonicalUrl={site.siteMetadata.siteUrl}
        author={isBlogPost ? author : site.siteMetadata.author}
        organization={organization}
        defaultTitle={title}
      />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  pathname: ``,
  isBlogPost: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.object,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  author: PropTypes.object,
  isBlogPost: PropTypes.bool,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
}

export default SEO
