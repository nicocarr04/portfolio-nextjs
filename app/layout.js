import './globals.css'
import { Fjalla_One } from 'next/font/google'

const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: '400'
})

import Footer from '../components/Footer';
import Header from '../components/Header';
import StoreProvider from '@/components/StoreProvider';

import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Nicolas Carriere',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fjallaOne.className}>
      <StoreProvider>
        <Header/>
          {children}
        <Footer/>
      </StoreProvider>
      </body>
    </html>
  )
}
