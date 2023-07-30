import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/data/apollo-client";
import { Provider } from "react-redux";
import { store } from "@/data/store";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div id="app" className={inter.className}>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </Provider>
  );
}
