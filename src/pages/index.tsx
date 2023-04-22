import { MainLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/models/common";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  const [date, setDate] = useState<Date>(new Date(Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date(Date.now()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOnClickDiv = (event: any) => {
    const root = document.getElementById('root');
    if (root?.contains(event.target)) {
      console.log('check');
      console.log(event.target);
    }
  }

  return (
    <div id="root">
      <div>check rerender</div>
      <div>Clock {date.toUTCString()}</div>
      <div className="w-[300px] h-[300px] bg-slate-500 text-white" onClick={handleOnClickDiv}>
        Test event.targe
      </div>
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
