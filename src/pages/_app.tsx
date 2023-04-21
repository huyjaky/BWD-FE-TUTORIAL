import { EmptyLayout } from "@/components/layouts";
import { AppPropsWithLayout } from "@/models/common";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
