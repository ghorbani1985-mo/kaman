import React, { useEffect } from "react";
import './main.css'
import {Header, RightMenu} from '../utils/utils'
import {SelectTime } from "./sections/selectTime"
import {ShowInfo}  from "./sections/showInfo"
import {BestSel}  from "./sections/bestSel"
import {Proceed} from "./sections/proceed"
import { useState } from 'react';
// import DatePicker, { DateObject } from "react-multi-date-picker";
// import {useLocation} from 'react-router-dom';
// import axios from 'axios';
// import InitObject from '../utils/globalvariables'






function Main(){

    const [response, setResponse] = useState({
        'date1':{
            "sale_factor_count": 0, 
            "rejected_factor_count": 0,
            "factor_product_average":0,
            "factor_rows_average": 0,
            "factor_amount_average": 0,
            "factor_amount_product_average": 0,
            "customer_income_average": 0,
            "gross_sale": 0,
            "factor_product_count": 0,
            "factor_product_weight": 0,
            "factor_commisions":0,
            "pure_factor_counts": 0,
            "pure_gross_sale": 0,
            "gross_rejected": 0,
            "pure_sale": 0,
            "rejected_product_count": 0,
            "pure_product_count": 0,
            "rejedted_product_weight": 0,
            "pure_product_weight": 0,
            "users_count": 0,
            "new_users_count": 0,
            "old_users_count": 0,
            "percent_users": 0,
            "percent_rejected_count": 0,
            "percent_rejected_amount": 0,
            "sum_discount": 0,
            "gross_new_users": 0
        },
        "percentage": {
            "sale_factor_count": 0, 
            "rejected_factor_count": 0,
            "factor_product_average":0,
            "factor_rows_average": 0,
            "factor_amount_average": 0,
            "factor_amount_product_average": 0,
            "customer_income_average": 0,
            "gross_sale": 0,
            "factor_product_count": 0,
            "factor_product_weight": 0,
            "factor_commisions":0,
            "pure_factor_counts": 0,
            "pure_gross_sale": 0,
            "gross_rejected": 0,
            "pure_sale": 0,
            "rejected_product_count": 0,
            "pure_product_count": 0,
            "rejedted_product_weight": 0,
            "pure_product_weight": 0,
            "users_count": 0,
            "new_users_count": 0,
            "old_users_count": 0,
            "percent_users": 0,
            "percent_rejected_count": 0,
            "percent_rejected_amount": 0,
            "sum_discount": 0,
            "gross_new_users": 0
        }
    });


     
    const [chartresponse, setChartResponse] = useState({})

    return(
        <>
        <div>
            <Header />
            <div className="w-full h-full grid grid-cols-12 bg-blue-50">
            <RightMenu />
            <div className="grid col-span-12 md:col-span-9">
              <SelectTime setResponse={setResponse} setchartresponse={setChartResponse}/>
              <ShowInfo results={response}/>
                <BestSel results={response} />
                <Proceed chartresponse={chartresponse} />
                


            </div>
            </div>
       
        </div>
        </>
    );
}



export default Main;
















