import React from "react";

const test = () => {
  //   const toPrice = (number: number) => {
  //     let string = number.toString();
  //     for (let i = string.length - 1; i > 0; i--) {
  //       if (i % 3 == 0) {
  //         let curr = string[i - 2];
  //         string = string.replace(curr, curr + " ");
  //       }
  //     }
  //     console.log(string);
  //     return string;
  //   };

  //   toPrice(12847);
  //   toPrice(1284887);
  //   toPrice(1284);
  //   toPrice(12);
  //   toPrice(128);
  return (
    <div className=" bg-slate-400 absolute top-1/2 left-1/2">
      <div className="grid grid-rows-3 grid-flow-col gap-4 p-2">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
      </div>
    </div>
  );
};

export default test;
