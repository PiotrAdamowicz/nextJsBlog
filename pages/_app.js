import "../styles/styles.scss";
import { FormspreeProvider } from "@formspree/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="{your-project-id}">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
