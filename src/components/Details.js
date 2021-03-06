import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`
  
const Details = ({content})=>{
    const {frontmatter, rawMarkdownBody} = content
    return (
        <StyledSection id="details">
      <h1 className="title">
        {frontmatter.greetings}{" "}
        <span role="img" aria-label="emoji">
          {frontmatter.emoji}
        </span>
        <br />
        {frontmatter.title}
      </h1>
      {/* <h2 className="subtitle">
        {frontmatter.subtitlePrefix}{" "}
        <span className="highlighted">{frontmatter.subtitleHighlight}</span>
      </h2> */}
      <div className="description">{rawMarkdownBody}</div>
    </StyledSection>
    )
}

export default Details;