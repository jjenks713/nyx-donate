import '../styles/tailwind.css'
import * as React from 'react';
import ReactDOM from 'react-dom';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
