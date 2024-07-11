/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// Install required packages
// npm install next-pwa

// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // your other next.js config
})

// public/manifest.json
{
  "name": "Sandra's Closet",
  "short_name": "App",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#FFFFFF",
  "background_color": "#FFFFFF",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait"
}

// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
