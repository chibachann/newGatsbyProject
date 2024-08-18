import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Demo01 from '../components/demo01/demo01';

const IndexPage = () => {
    return (
      <Layout>
        <Demo01 />
      </Layout>
    );
  };

export default IndexPage;

export const Head = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `)
    return (
      <>
       <title>{data.site.siteMetadata.title}</title>
       <meta name="description" content={data.site.siteMetadata.description} />
      </>
    );
  }
  