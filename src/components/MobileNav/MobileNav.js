import React, { useState } from "react";
import styled from "styled-components";
import NavItems from "../NavItems/NavItems";
const DIV = styled.div`
  div {
    transform-origin: -2.3px;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.open ? "translateX(-100%)" : "translateX(0)")};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const NAV = styled.nav`
  @media (max-width: 640px) {
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  }
`;
function Nav() {
      const [open, setOpen] = useState(false);
  return (
    <>
    
    <div className="flex md:hidden overflow-hidden flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
      <div className="w-full flex justify-between md:w-max md:px-0">
        <DIV
          open={open}
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center transition-all ease-linear duration-500 ml-2 z-50 md:hidden max-h-10"
        >
          <div
            id="line"
            className="m-auto h-0.5 w-6 rounded bg-blue-800 dark:bg-gray-300 transition ease-linear duration-300"></div>
          <div
            id="line2"
            className="m-auto my-2 h-0.5 w-6 rounded bg-blue-800 dark:bg-gray-300 transition ease-linear duration-300"
          ></div>
          <div
            id="line3"
            className="m-auto h-0.5 w-6 rounded bg-blue-800 dark:bg-gray-300 transition ease-linear duration-300"
          ></div>
        </DIV>
      </div>
      <NAV
        open={open}
        className="flex z-40 flex-col justify-between
                    items-center p-6 dark:bg-slate-700 dark:md:bg-transparent bg-slate-300 dark:text-gray-300
                    md:gap-y-4 md:p-0 
                    md:bg-transparent md:w-full fixed md:static top-0 right-0 transition-all ease-linear duration-500 peer-checked:right-0 max-w-sm h-full 
                  w-4/5"
      >
          <div className="w-full my-4"></div>
         <NavItems />
         <div className="w-full flex justify-center items-center text-slate-500 border-t border-t-stone-200 border-solid pt-2">v0.0.1</div>  
      </NAV>
    </div>
    </>
  );
}

export default Nav;