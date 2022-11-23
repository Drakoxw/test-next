/* eslint-disable react/display-name */
import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputExt = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} className="text-md block px-3 py-2 rounded-full w-full 
  bg-white border border-gray-300 placeholder-gray-600 shadow-md
  focus:placeholder-gray-500
  focus:bg-white 
  focus:border-2 
  focus:outline-none" />
));
  