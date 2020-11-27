import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import { node } from 'prop-types';
import styled from 'styled-components';

const GoBackBtn = styled.button`
  cursor: pointer;
  background-color: #4c96d7;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.25s ease-in;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to="/">
        <GoBackBtn>Go back</GoBackBtn>
      </Link>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
