/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, imageAlt }) {
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            author
            image
            imageAlt
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const seo = {
    title: title,
    description: description,
    image: `https://i.imgur.com/XkF5ugg.png`,
    url: `https://www.alannacelentano.com`,
    imageAlt,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      defer={false}
      >
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(
        <meta property="og:type" content="website" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        {seo.imageAlt && <meta property="og:image:alt" content={seo.imageAlt} />}
      </Helmet>
  //     meta={[
  //       {
  //         name: `description`,
  //         content: metaDescription,
  //       },
  //       {
  //         property: `og:title`,
  //         content: title,
  //       },
  //       {
  //         property: `og:description`,
  //         content: metaDescription,
  //       },
  //       {
  //         property: `og:type`,
  //         content: `website`,
  //       },
  //       {
  //         name: `twitter:card`,
  //         content: `summary`,
  //       },
  //       {
  //         name: `twitter:creator`,
  //         content: site.siteMetadata.author,
  //       },
  //       {
  //         name: `twitter:title`,
  //         content: title,
  //       },
  //       {
  //         name: `twitter:description`,
  //         content: metaDescription,
  //       },
  //       {
  //         property: `og:image`,
  //         content: "https://i.imgur.com/tU6UT9u.png"
  //       }
  //     ].concat(meta)}
  //   />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default SEO
