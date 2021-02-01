import '../styles/globals.css'
// entry point to  next framework
// Component, the react component to be loaded
// HOC
// pageProps, the all components inside the 'pages'
// create an object mutation for all components inside the
// 'pages' folder 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
