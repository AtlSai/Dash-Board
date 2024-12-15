import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import { getColor } from "@/utils/colors";
import ReportLineChart from "@/components/ReportLineChart";
import ReportDonutChart3 from "@/components/ReportDonutChart3";
import Pagination from "@/components/Base/Pagination";
import { FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import eCommerce from "@/fakers/e-commerce";
import transactions from "@/fakers/transactions";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import Table from "@/components/Base/Table";
import { useState, useRef } from "react";
import clsx from "clsx";
import _ from "lodash";
import logo from "@/assets/logo_law.webp"

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const sliderRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    sliderRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    sliderRef.current?.tns.goTo("next");
  };
  
  return (
    // <div className="grid grid-cols-12 gap-y-10 gap-x-6">
    <div className="h- rounded-xl flex flex-col items-center  px-4 bg00">
<img src={logo} alt="" className="w-20 h-20 mb-3"/>
<h1 className="text-[34px] text-white font-publicSans font-semibold">Understand Law Better</h1>
{/* Search Bar */}
<div className="w-full max-w-3xl rounded-lg border-none mt-5">
  <input
    type="text"
    placeholder="Search..."
    className="w-full p-4 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
  />
</div>

{/* Alphabets */}
<div className="w-full max-w-3xl flex justify-between text-white">
  {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map((letter) => (
    <button
      key={letter}
      className="text-gray-600 text-md mt-1 text-white hover:text-blue-500 focus:text-blue-500"
    >
      {letter}
    </button>
  ))}
</div>
<div className="w-full p-8 bg-gray-50 mt-16 rounded">
  {/* Popular Legal Terms */}
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-4">Popular Legal Terms</h2>
    <div className="flex flex-wrap gap-4">
      {Array(16).fill(0).map((_, index) => (
        <button
          key={index}
          className="w-[100px] h-[40px] bg-sky-100 text-sky-600 rounded-md flex items-center justify-center"
        >
          Always
        </button>
      ))}
    </div>
  </div>

  {/* Recent Searches */}
  <div>
    <h2 className="text-lg font-bold mb-4">Recent Searches</h2>
    <div className="flex flex-wrap gap-4">
      {Array(16).fill(0).map((_, index) => (
        <button
          key={index}
          className="w-[100px] h-[40px] bg-sky-100 text-sky-600 rounded-md flex items-center justify-center"
        >
          Always
        </button>
      ))}
    </div>
  </div>
</div>


</div>
    // </div>
  );
}

export default Main;
