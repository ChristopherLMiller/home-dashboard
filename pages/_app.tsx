import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/layout/page';
import HASSContextProvider from '../components/HassContext/provider';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HASSContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HASSContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
