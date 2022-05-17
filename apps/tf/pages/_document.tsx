import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='h-full w-full bg-white dark:bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
