import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import { rhythm } from '../utils/typography'

const intro = `
Hi! I’m Rob Dyson. I’m a full stack web developer based in Miami, FL. 😎
I’ve been co-founder and CTO at a couple of startups.

I’ve also been described as vegan, a bit English, and rather sarcastic. I’m into personal productivity, [effective altruism](https://www.effectivealtruism.org/articles/introduction-to-effective-altruism), [lots of reading](https://www.goodreads.com/user/show/4351029-rob), and [coffee](http://www.coffeegeek.com/guides/aeropresscoldbrew). In a past life I was a music producer and engineer.

Lately I’ve been using [React](https://reactjs.org), [Gatsby](https://www.gatsbyjs.org), and [GraphQL](https://graphql.org). I’m also familiar with ES6, Node, Ruby on Rails, and shell scripting.

I have a [notes repository](https://notes.rdyson.dev) that I use primarily as a personal wiki, but you may find something useful there.

You can reach me at rob at rdyson.dev, and rdyson elsewhere.
`

const experience = `
## Recent Experience

* Co-founder and CTO at Skillied — marketplace for in-person classes
* Co-founder and CTO at [Willing](https://willing.com) — online tool for creating estate planning documents
* Y Combinator, Summer 2015 with Willing

[Here’s my résumé](/RobertDysonResume.pdf).
`

const projects = `
## Projects

* [hair.dog](https://github.com/rdyson/hair.dog) — React app built with [Next.js](https://nextjs.org)
* [Bulk macOS Messages](https://github.com/rdyson/bulk-macos-messages) — AppleScript and bash scripts to bulk send Messages/SMS on macOS
* [Restaurants Nearby](https://github.com/rdyson/restaurants-nearby) — React app that finds specific (in my case, vegan) nearby restaurants and reviews using geolocation and a Firebase database
* [Quick Text Image](https://github.com/rdyson/quick-text-image) — Node script that adds text to an image background for sharing (e.g. Instagram) using [Unsplash](https://unsplash.com) and [Cloudinary](https://cloudinary.com)
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            {/* {
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
            } */}
            <ReactMarkdown escapeHtml="false" source={intro} linkTarget="_blank" />
            <ReactMarkdown escapeHtml="false" source={experience} linkTarget="_blank" />
            <ReactMarkdown escapeHtml="false" source={projects} linkTarget="_blank" />
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
