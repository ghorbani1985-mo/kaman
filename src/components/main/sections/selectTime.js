import React from "react";
import './selectTime.css'
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useState } from 'react';
// import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_en"
// import gregorian from "react-date-object/calendars/gregorian"
// import gregorian_en from "react-date-object/locales/gregorian_en"
import TimePicker from "react-multi-date-picker/plugins/analog_time_picker";
// import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"
import Toolbar from "react-multi-date-picker/plugins/toolbar"
import {HiOutlineLightBulb} from "react-icons/hi"
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import InitObject from '../../utils/globalvariables'
import { BiCalendar } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
function Date_Picker(v, setter) {
    return (
        <>
          
          <DatePicker className="select-time"  format="YYYY-MM-DDTHH:mm:ss"
                onChange={setter}
                calendar={persian} locale={persian_en} value={v} 
                formattingIgnoreList={["Date", "Time"]} 
                calendarPosition="bottom-center"
                plugins={[
                    <TimePicker hideSeconds  />,
                    <DatePickerHeader 
                    position="left" 
                    size="small" 
                    style={{ backgroundColor: "#3b82f6" }} 
                    />,
                    <Toolbar position="bottom" />
                ]}/>            
        </>
    )

}

function SelectTime({setResponse, setchartresponse}){

    const [start_time1, setStart_time1] = useState(new DateObject());
    const [end_time1,  setEnd_time1] = useState(new DateObject());
    const [start_time2, setStart_time2] = useState(new DateObject());
    const [end_time2, setEnd_time2] = useState(new DateObject());
    const [compare_time, setCompare_time] = useState(0);
    // const [response, setResponse] = useState([]);
    const location = useLocation();
    

   
    const handleFactorInfo = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("start_date1", start_time1.format());
        formData.append("end_date1", end_time1.format());
        if (compare_time === 1){
            formData.append("start_date2", start_time2.format());
            formData.append("end_date2", end_time2.format());
        }
        
        let api_address = InitObject.baseurl + 'api/factors_info/'
        axios.post(api_address, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": " Token " + location.state.userinfo.key
            },
          }).then((response) => {
            setResponse(response.data.results);
           })
           .catch((error) => {
            console.log(error);
           
            });
     };

     const handleProductInfo = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("start_date1", start_time1.format());
        formData.append("end_date1", end_time1.format());
        formData.append("export", 0);
        let api_address = InitObject.baseurl + 'api/products_info/'
        axios.post(api_address, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": " Token " + location.state.userinfo.key
            },
          }).then((response) => {
            setchartresponse(response.data.results);
           })
           .catch((error) => {
            console.log(error);
           
            });
     };

     const handleGetInfo = (e) => {
        e.preventDefault();
        handleFactorInfo(e);
        handleProductInfo(e);

    }

    const handleCompare_time = (event) => {
        if (compare_time === 1){
            setCompare_time(0);
            const time2_div = document.getElementById("time2");
            time2_div.style.backgroundColor = "gray";
            time2_div.style.pointerEvents= "none";
        }
        else{
            setCompare_time(1);
            const time2_div = document.getElementById("time2");
            time2_div.style.backgroundColor = "white";
            time2_div.style.pointerEvents= "auto";
        }
    };

    return(
        <>
              <div className="w-full flex justify-center items-center p-3">
              <div className='w-full bg-white flex flex-col md:flex-row justify-center md:justify-between items-center rounded-md p-2'>
                   <div className="flex flex-col items-center">
                     <div className="flex flex-col md:flex-row justify-center items-center">
                     <BiCalendar className="text-blue-800"/>
                     <span className="mx-1">زمان شروع</span>
                     <span>{Date_Picker(start_time1, setStart_time1)}</span>
                     <span className="mx-1">زمان پایان</span>
                     <span>{Date_Picker(end_time1, setEnd_time1)}</span>
                     </div>
                     <div>
                     <input type="checkbox" className="ml-2" onClick={handleCompare_time}  value={compare_time} />
                        مقایسه با 
                     </div>
                     <div className="mr-4">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                        <span className="mx-1">زمان شروع</span>
                     <span>{Date_Picker(start_time2, setStart_time2)}</span>
                     <span className="mx-1">زمان پایان</span>
                     <span>{Date_Picker(end_time2, setEnd_time2)}</span>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <div className="bg-blue-800 cursor-pointer text-white transition-all ease-in-out duration-700 hover:bg-blue-500 px-3 py-1 rounded-lg my-2" onClick={handleGetInfo}>اعمال</div>
                        </div>
                     </div>
                   </div>
                    <div className="flex flex-col items-center" >
                       <p className="text-blue-800">راهنمایی</p> 
                        <BiHelpCircle className="text-blue-500 text-lg"/>
                    </div>

              </div></div>
            
        </>
    );
}

export {SelectTime};