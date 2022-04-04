import React from 'react';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';

import reset from 'styled-reset';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <base href='/build/_next' />
          <meta
            httpEquiv='Cache-Control'
            content='no-cache, no-store, must-revalidate'
          />
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const styleSheet = new ServerStyleSheet();

  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => styleSheet.collectStyles(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      styleSheet.getStyleElement()
    ]
  };
};

export default MyDocument;
