import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Roboto_Mono } from 'next/font/google';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--ff-roboto_mono',
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto_mono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
