import * as vars from 'styles/vars';
import Head from './Head';

const PageLayout = ({ title, children }) =>
  <div>
    <Head title={title} />
    <div>
      {children}
    </div>
    <style jsx global>{`
        @at-root {
          @-ms-viewport {
            width: device-width;
          }
        }
        html {
          font-family: Arial, sans-serif;
          font-size: ${vars.fontSize};
          line-height: ${vars.lineHeight};
          color: ${vars.textColor};
          box-sizing: border-box;
          -ms-overflow-style: scrollbar;
        }
        a {
          color: ${vars.textColor};
          text-decoration: none;
        }
        .a3 {
          font-size: ${vars.a3FontSize};
          line-height: ${vars.a3LineHeight};
          text-decoration: none;
        }
        hr,
        .hr {
          border-style: solid;
          margin: ${vars.marginLarge};
        }
        h1,
        .h1  {
          font-size: ${vars.h1FontSize};
          line-height: ${vars.h1LineHeight};
          font-weight: normal;
        }
        h2,
        .h2  {
          font-size: ${vars.h2FontSize};
          line-height: ${vars.h2LineHeight};
          font-weight: normal;
        }
        h3,
        .h3  {
          font-size: ${vars.h3FontSize};
          line-height: ${vars.h3LineHeight};
          font-weight: normal;
        }
        h4,
        .h4  {
          font-size: ${vars.h4FontSize};
          line-height: ${vars.h4LineHeight};
          font-weight: normal;
        }
        b {
          font-weight: bold;
        }
        .text--highlight {
          font-size: ${vars.h4FontSize};
          line-height: ${vars.h4LineHeight};
          margin: 0;
        }
        .text--secondary {
          color: ${vars.textSecondaryColor};
        }
        .text--quoted {
          font-style: italic;
        }
        .link {
          color: ${vars.linkColor};
        }
      `}</style>
  </div>

export default PageLayout;