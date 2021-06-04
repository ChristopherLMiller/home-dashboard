import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/layout/page';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
