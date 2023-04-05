import React, { useState } from "react";
import './utils.css'
import { RxAvatar } from "react-icons/rx";

import headerLogo from '../../statistic/images/logo-11_v1.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { BiUser } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { BiExit } from "react-icons/bi";
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import InitObject from '../utils/globalvariables'
import  { useLocation, useNavigate  } from 'react-router-dom'
import { Link } from "react-router-dom";
import NavItems from "../NavItems/NavItems";
import MobileNav from '../../components/MobileNav/MobileNav'
import { Menu, Transition } from '@headlessui/react';
import { BiChevronDown } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
function Header(){
  const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        let formData = new FormData();
        let api_address = InitObject.baseurl + 'api/user_logout/'
        axios.post(api_address, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": " Token " + location.state.userinfo.key
            },
          }).then((response) => {
            console.log(response.data);
            navigate('/', {state:{userinfo:response.data}});
           })
           .catch((error) => {
            console.log(error);
           
            });
     };
    return (
        <>
        <div className="w-full flex justify-between items-center p-2 bg-slate-300">
            <div>
                <MobileNav />
            </div>
            <div className="flex justify-center items-center"> 
             <img src={headerLogo} alt="کمان" className="object-fill w-36 md:w-56" />
            </div> 
            <div className="hidden md:flex flex-1 justify-center items-center text-xl text-blue-800 font-extrabold">
                <h1>سامانه تحلیل مشتریان کمان</h1>
            </div>
            <div className="md:ml-12">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="w-full flex justify-between items-center rounded-md bg-blue-300 transition-all ease-in-out duration-500 px-1 md:px-4 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="flex justify-center items-center">
            <BiUserCircle className="text-lg ml-2"/>
            <span>{location.state.userinfo.results.username}</span>
            </div>
            <BiChevronDown
              className="h-5 w-5 text-blue-800 hover:text-violet-100 mr-1 md:mr-2"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
          <Menu.Items className="absolute -right-24 md:-right-5 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-100 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all ease-in-out duration-500`}
                  >
                        <BiUser className="text-red-500 text-xl"/>
                        <span className="flex-1 text-center mr-1 text-blue-800 font-bold"> {location.state.userinfo.results.email}</span>   
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-100 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all ease-in-out duration-500`}
                  >
                   <BiEditAlt className="text-red-500 text-xl"/>
                   <span className="flex-1 text-center mr-1 text-blue-800 font-normal"> ویرایش پروفایل کاربری</span>
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-100 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all ease-in-out duration-500`}
                  >
                 <BiExit className="text-red-500 text-xl"/>
                    <span className="flex-1 text-center mr-1 text-blue-800 font-normal" onClick={handleLogout}>خروج از حساب</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
    </div>
        </div>
        </>
    );

}


function RightMenu(){

    return (
        <>

        <div className="hidden md:grid col-span-3 content-between bg-slate-300 rounded-tl-[200px]">
            <div className="mt-44 p-2 flex flex-col items-center">
             <NavItems />
            </div>  
            <div className="w-full flex justify-center items-center text-slate-500 border-t border-t-stone-200 border-solid pt-2">v0.0.1</div>        
        </div>

        </>
    );

}








// export default Header;
export {Header,  RightMenu };