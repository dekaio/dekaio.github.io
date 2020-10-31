import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Details from "../components/details"
const IndexPage = ({data}) => {
  return (
  <Layout>
  <Details content ={data.details.edges[0].node}/>
  </Layout>
  )
  
}
export default IndexPage

export const pageQuery = graphql`
{
  details: allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          greetings
          emoji
        }
        rawMarkdownBody
      }
    }
  }
}
`

    
    


