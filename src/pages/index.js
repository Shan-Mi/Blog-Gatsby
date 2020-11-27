import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const BlogLink = styled(Link)`
  text-decoration: none;
`;
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`;

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Shan's Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount} </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

// graphql request
// then this graphql or pattern like thing will be used by default
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

// (sort: { fields: frontmatter___date, order: DESC})
// this data, is that data passed down as a prop
/* 
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "id": "24c14c8f-224b-5438-a618-1fce15987801",
            "fileAbsolutePath": "/Users/shan-mi/Gatsby/gatsby-blog/src/markdown-pages/my-first-ama.md",
            "frontmatter": {
              "date": "2017-08-21",
              "description": "My first AMA :)",
              "title": "My First AMA"
            },
            "excerpt": "Thank you everyone who enjoyed the AMA! It was my first one and I'd love to do it again."
          }
        },
        {
          "node": {
            "id": "d8c02b84-a74a-545e-a12f-c5d537989aeb",
            "fileAbsolutePath": "/Users/shan-mi/Gatsby/gatsby-blog/src/markdown-pages/ice-cream.md",
            "frontmatter": {
              "date": "2020-11-25",
              "description": null,
              "title": "Why I Love Ice Cream"
            },
            "excerpt": "Ice cream is the best. I scream, you scream, we all scream, because there's no more ice cream. No one's rhyming about spinach. Here is a…"
          }
        }
      ]
    }
  },
  "extensions": {}
}
*/
