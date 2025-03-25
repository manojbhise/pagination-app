import theme from "@/theme/theme";
import type { AppProps } from "next/app";
import cache from "@/theme/emotionCache";
import { CacheProvider, ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
