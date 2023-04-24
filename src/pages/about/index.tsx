import { AdminLayout, MainLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/models/common";
import Link from "next/link"



const About: NextPageWithLayout = () => {

  return (
    <div>
      <h1>About Page</h1>
      <Link href={'/'}>
        <button>About</button>
      </Link>
    </div>
  )
}

About.Layout = AdminLayout;

export default About;