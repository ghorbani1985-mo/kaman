import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import "./login.css"
import axios from 'axios';
import { notify } from "../Toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import InitObject from '../utils/globalvariables'
import  { useNavigate  } from 'react-router-dom'
import logo from '../../statistic/images/logo-04.png';
import bgImage from '../../statistic/images/login1.jpg';
function Login(){

    const navigate = useNavigate();
    // const [response, setResponse] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginmessage, setLoginMessage] = useState('');
    const userName = useRef();
    useEffect(() => {
      userName.current.focus(); 
    },[username])

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        let api_address = InitObject.baseurl + 'api/user_login/'
        axios.post(api_address, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
          }).then((response) => {
            console.log(response.data);
            if (response.data.isSuccess !== true ){
             notify("رمز عبور یا نام کاربری اشتباه است" , "error");
            }
            else{
              navigate('/main', {state:{userinfo:response.data}});
            }
            // setResponse(response.data.data);
            
           })
           .catch((error) => {
            console.log(error);
           
            });
     };
     const contextClass = {
      success: "bg-green-500",
      error: "bg-red-500",
      info: "bg-blue-500",
      warning: "bg-orange-400",
      default: "bg-indigo-600",
      dark: "bg-white-600 font-gray-300",
    };
     
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };


    return (
        <>
         <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="absolute w-screen h-screen bg-cover bg-center blur-sm"
      ></div>
      <div className="flex justify-center items-center h-screen">
      <main className="w-full max-w-md block mr-auto ml-auto box-border z-10 p-2">
                <div className="bg-white p-10 rounded-md flex flex-col items-center">
                      <img src={logo} alt="کمان" className="w-56 object-fill" />
                        <h4 className="font-medium text-lg my-4 text-blue-800">
                              ورود به حساب کاربری  
                        </h4>
                        <div className="relative z-0 mb-6 w-full group">
                             <input type="text" ref={userName} id="name" name="user_name" placeholder=" "
                             className="block w-full text-sm text-blue-800 bg-transparent rounded-lg border border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-blue-500 focus:outline-none focus:ring-1 focus:border-blue-500 peer" value={username} onChange={handleUsername} />
                                 <label
                  htmlFor="user_name"
                  className="bg-white px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 right-2 origin-[0] peer-focus:right-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  نام کاربری*
                </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                   <input type="password" id="password" name="user_password" placeholder=" " 
                            className="lock w-full text-sm text-blue-800 bg-transparent rounded-lg border border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-blue-500 focus:outline-none focus:ring-1 focus:border-blue-500 peer" value={password} onChange={handlePassword} /> 
                             <label
                  htmlFor="user_password"
                  className="bg-white px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 right-2 z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  کلمه عبور*
                </label>
                        </div>
                        <button type="submit"
                             onClick={handleSubmit} >ورود</button>

                    <p className="mt-5 text-slate-500 font-[IRANSans]">
                    © کپی رایت کمان 2023
                    </p>

                </div>
        <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-left"
        autoClose={3000}
      />
            </main>
      </div>
        </>
    );

}

export default Login;