import Head from 'next/head';

import importedCSS from 'styles/imports.css';

const PageHeader = ({ title }) => (
  <Head>
    <title>Mariano Cocirio | {title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="utf-8" />
    <style dangerouslySetInnerHTML={{ __html: importedCSS }} />
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.className +=
      (("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');`
      }}
    />
  </Head>
);

export default PageHeader;