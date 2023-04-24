import axiosClient from "@/api-client/axiosClient";
import { EmptyLayout } from "@/components/layouts";
import ThemeContextProvider from "@/contexts/themeContext";
import { AppPropsWithLayout } from "@/models/common";
import "@/styles/globals.css";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <>
      <SWRConfig value={{fetcher: url => axiosClient.get(url), shouldRetryOnError: false}}>
        <ThemeContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeContextProvider>
      </SWRConfig>
    </>
  );
}
