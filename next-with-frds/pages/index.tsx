import React from 'react';
import { GetStaticProps } from 'next';

export default function Home({ name }): JSX.Element {
  return (
    <>
      <p>`Hello ${name}!`</p>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: any;
}> => {
  return {
    props: {
      name: 'World'
    },
  };
};
