import React form "react"
import styled from "styled-components"

const StyledSection = styled.section `
.titile{
    margin-bottom : 0;
}
.subtitle{
    margin-top:0;
}
.highlighted{
    box-shadow: inset 0 -2.5rem 0 #cdf3e1
}
`
const Hero = () => {
    return (
      <StyledSection id="hero">
        <h1 className="title">
          Hello <span role="img" aria-label="emoji">👋</span><br />
          I'm Konstantin Münster
        </h1>
        <h2 className="subtitle">
          I design and build <span className="highlighted">things for the web</span>.
        </h2>
        <div className="description">
          Product Manager and Freelance Web Developer. Based in Hamburg.
        </div>
      </StyledSection>
    )
  }
  
const Details = ({content})=>{
    const {frontmatter, rawMarkdownBody} = content
    return (
        <StyledSection id="hero">
      <h1 className="title">
        {frontmatter.greetings}{" "}
        <span role="img" aria-label="emoji">
          {frontmatter.emoji}
        </span>
        <br />
        {frontmatter.title}
      </h1>
      <h2 className="subtitle">
        {frontmatter.subtitlePrefix}{" "}
        <span className="highlighted">{frontmatter.subtitleHighlight}</span>
      </h2>
      <div className="description">{rawMarkdownBody}</div>
    </StyledSection>
    )
}

export default Details