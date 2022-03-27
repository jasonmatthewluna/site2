import * as React from 'react'
import { Link, graphql } from 'gatsby'

// components
import {
    Nav
  } from '../../nav.js'

// styles
import {
    background,
    pageheader,
    headline,
    content,
    title,
    right,
    left,
    up,
    down,
    name,
} from '../tempblog.module.css'

const Words = ({ data }) => {
    return (
        // background
        <div className={background}>
            <p className={[left, up, name].join(' ')}>Jason Luna</p>
            <p className={[left, down, name].join(' ')}>Jason Luna</p>
            <p className={[right, up, name].join(' ')}>Jason Luna</p>
            <p className={[right, down, name].join(' ')}>Jason Luna</p>
            {/* content */}
            <div className={content}>
                {/* header */}
                <div className={pageheader}>
                    <h1 className={title}>&nbsp;words&nbsp;</h1>
                </div>
                {/* titles */}
                <div className={headline}>
                {
                data.allMdx.nodes.map(node => (
                <article key={node.id}>
                    <p>
                        <Link to ={`/words/${node.slug}`}>
                        {node.frontmatter.title}
                        </Link>
                    </p>
                </article>
                ))
                }
                </div>
            </div>

            {/* nav bar (TEMPORARY UNTIL TITLE BECOMES CLICKABLE, EVEN THO THAT'S BAD UX */}
            <Nav></Nav>
        </div>


    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`

export default Words