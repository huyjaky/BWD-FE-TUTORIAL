import { MainLayout } from "@/components/layouts";
import { Popup } from "@/components/popup";
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

  const handleOnClickMouseDown = (event: any) => {
    const btn = document.getElementById('btn-testAPI');
    console.log('down');
    btn?.classList.add('bg-white');
  }

  const handleOnClickMouseUp = (event: any) => {
    const btn = document.getElementById('btn-testAPI');
    console.log('up');
    btn?.classList.remove('bg-white');
  }

  return (
    <div id="root">
      <div>check rerender</div>
      <div>Clock {date.toUTCString()}</div>
      <div className="w-[300px] h-[300px] bg-slate-500 text-white">
        Test event.targe
      </div>
      <button className="w-[200px] h-[200px] bg-emerald-300 rounded-xl
        transition-all
      "
      id="btn-testAPI"
      onMouseDown={handleOnClickMouseDown}
      onMouseUp={handleOnClickMouseUp}
      >Click me</button>

      <Popup />
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
