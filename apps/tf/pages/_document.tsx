import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html className='h-full w-full'>
    <Head />
    <body className="h-full w-full bg-white dark:bg-gray-900">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
