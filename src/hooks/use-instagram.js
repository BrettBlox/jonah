import { graphql, useStaticQuery } from 'gatsby'

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12, sort: { fields: timestamp, order: DESC }) {
        nodes {
          id
          username
          timestamp
          localFile {
            childImageSharp {
              fluid(maxWidth: 575, maxHeight: 575) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allInstaNode.nodes.map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    username: node.username,
  }))
}

export default useInstagram
