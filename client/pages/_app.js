import "bootstrap/dist/css/bootstrap.css";

// defines a custom component wrapper to use a global css
export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
