import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Client Management</title>
        <meta name="theme-color" content="#F82E52" />
        <meta
          name="description"
          content="Gerenciamento de Clientes - Seu espaço de gestão de clientes!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}