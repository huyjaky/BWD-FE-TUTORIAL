import { MainLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/models/common'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home:NextPageWithLayout = () => {
  return (
    <div>
      check
    </div>
  )
}
Home.Layout = MainLayout;

export default Home;