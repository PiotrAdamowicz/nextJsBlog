import "../styles/styles.scss";
import { FormspreeProvider } from "@formspree/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="xwkrynje">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
