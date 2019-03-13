/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      // query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            {
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            }
            <p>
              Hi! I’m Rob Dyson. I’m a web developer based in Miami, FL.{' '}
              <span role="img" aria-label="smiley">
                😎
              </span>
              <br /> I’ve been co-founder and CTO at a couple of startups.
            </p>
            <p>
              I’ve also been described as vegan, a bit English, and rather sarcastic. I’m into personal productivity,{' '}
              <a
                href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/"
                target="_blank"
                rel="noopener noreferrer"
              >
                effective altruism
              </a>
              , lots of reading, and coffee. In a past life I was a music producer and engineer.
            </p>
            <p>You can reach me at rob at rdyson.dev, and rdyson elsewhere.</p>
          </div>
        )
      }}
    />
  )
}

// const bioQuery = graphql`
//   query BioQuery {
//     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//       childImageSharp {
//         fixed(width: 50, height: 50) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         author
//         social {
//           twitter
//         }
//       }
//     }
//   }
// `

export default Bio
