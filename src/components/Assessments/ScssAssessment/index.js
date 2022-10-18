import React  from 'react';

export default function ScssAssessment() {
  return (
    <div className="grid grid-cols-1 divide-y divide-none text-left">
      <div>
        <h3 className="font-medium leading-tight text-3xl m-2 text-blue-600 w-fit">
          1. Styling
        </h3>
        <p className="subpixel-antialiased w-fit m-2">
          In this first test we will try out your skills in styling elements.
        </p>
        <p className="subpixel-antialiased w-fit m-2">
          Your goal is to reproduce the checkerboard presented in the picture below with HTML elements, and
          SCSS or Tailwind styling. <span className="font-bold">Before starting your work, please refer
          to the README for more detailed directions!</span>
        </p>
        <img src="/images/styling-test.png" alt="styling-test" />
      </div>
      <div>
        <h4 className="font-medium leading-tight text-xl m-2 text-blue-600 w-fit">
          Solution:
        </h4>
        <div className="grid bg-purple-like grid-cols-12 max-w-sm divide-purple-like divide-x divide-y">
          <div className="h-40 bg-purple-like text-teal-like flex items-center justify-center col-span-2">John</div>
          <div className="h-40 bg-teal-like text-purple-like flex items-end justify-end p-1 text-end col-span-8">doe</div>
          <div className="h-40 bg-purple-like text-teal-like flex items-center justify-center col-span-2">john</div>
          <div className="h-80 bg-teal-like text-purple-like flex items-end justify-end p-1 row-span-2 col-span-7">doe</div>
          <div className="h-40 bg-teal-like text-purple-like flex items-end justify-end p-1 col-span-5">doe</div>
          <div className="h-40 bg-purple-like text-teal-like flex items-center justify-center col-span-5">john</div>
        </div>
      </div>
      
    </div>
  );
}
