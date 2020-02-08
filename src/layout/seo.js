import Helmet from 'react-helmet'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Head = ({
  data: {
    site: { buildTime, siteMetadata },
  },
  author = siteMetadata.author,
  description = siteMetadata.description,
  image = siteMetadata.image,
  keywords = siteMetadata.keywords,
  language = siteMetadata.language,
  name = siteMetadata.name,
  title = siteMetadata.title,
  url = siteMetadata.url,
}) => {
  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url,
    description,
    headline: description,
    inLanguage: 'en',
    mainEntityOfPage: url,
    name: title,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: new Date().getFullYear(),
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: '2019-07-01',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': url,
        name,
      },
      position: 1,
    },
  ]

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description,
    name,
    itemListElement,
  }

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={image} name="image" />
      <meta content={keywords} name="keywords" />
      <meta content={language} property="og:locale" />
      <meta content={name} property="og:site_name" />
      <meta content={title} property="og:title" />
      <meta content="website" property="og:type" />
      <meta content={description} property="og:description" />
      <meta content={image} property="og:image" />
      <meta content={description} property="og:image:alt" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={image} name="twitter:image" />
      <meta content={description} name="twitter:image:alt" />
      <link href={url} rel="author" />
      <link href="https://gabrielecanepa.mit-license.org" rel="license" />
      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}

const querySEO = graphql`
  query SEO {
    site {
      siteMetadata {
        author
        description
        image
        language
        keywords
        title
        url
      }
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`

// eslint-disable-next-line react/jsx-no-bind
const SEO = props => <StaticQuery query={querySEO} render={data => <Head {...props} data={data} />} />

export default SEO
