import React from "react";

export default function NoDataAvailable({text}:any) {
  return <div className="flex justify-center items-center flex-col h-[60vh]">
    <img className="h-[250px]" src={process.env.PUBLIC_URL + 'images/noDataFound.png'}
         alt="no data available"/>
    <div className="fs-22 text-[#619130]">No data available :( for {text}</div>
  </div>
}