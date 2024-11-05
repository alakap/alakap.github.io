import { Html, Head, Main, NextScript } from 'next/document';

export const metadata = {
  title: "Alakananda Patra",
  description: "Homepage of Alakananda Patra",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="libertinus">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
