import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import {
    headline,
    subhead,
    body,
    bgtop,
    bgleft,
    bgdown,
    page,
    content,
} from '../temppost.module.css'

const WordsPost = ({ data }) => {
  return (
    // contains everything
    <div className={page} pageTitle={data.mdx.frontmatter.title}>
    {/* left */}
    <div className={bgleft}>
        {/* go back to blog page */}
        <div>
            <p><a href='./'>X</a></p>
        </div>
    </div>
    {/* right */}
    <div className={content}>
        {/* top */}
        <div className={bgtop}>
            <h1 className={headline}>{data.mdx.frontmatter.title}</h1>
            <p className={subhead}>{data.mdx.frontmatter.subhead}</p>
        </div>

        {/* bottom */}
        <div className={bgdown}>
            <p className={body}>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            </p>
        </div>
    </div>
</div>

  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        subhead
      }
      body
    }
  }
`

export default WordsPost