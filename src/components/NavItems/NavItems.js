import { Link } from "react-router-dom";
import {MdOutlineMoveDown } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import  {TbMessage2} from "react-icons/tb";
import {MdOutlineSocialDistance, MdProductionQuantityLimits} from "react-icons/md";
import {GiReturnArrow} from "react-icons/gi"
import  {RiRecycleLine} from "react-icons/ri"
import {BsFillBasketFill} from "react-icons/bs"
import { BiLayer } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { HiViewBoards } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { BiPackage } from "react-icons/bi";
import { HiWallet } from "react-icons/hi2";
import { HiCog } from "react-icons/hi";
import { HiChartPie } from "react-icons/hi2";
import { BiDownload } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
const NavItems = () => {
    return ( 
        <>
        
        <Link to="#" className="w-full flex justify-between items-center mb-8">
        <BiLayer className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg font-normal"> نمای کلی  </span>
   </Link>
   <Link to="#" className="w-full flex justify-between items-center mb-8">
        <BiTrendingUp className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg font-normal"> روند ها </span>
   </Link>
   <div className="w-full">
      <Link to="#" className="w-full flex justify-between items-center mb-8">
        <HiUserGroup className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg font-normal">  مشتریان </span>
        <BiCaretDown className="text-blue-500 text-lg"/>
       </Link>
       <div className="focused-within-parent:h-96 hovered-parent:h-96 focused-within-parent:mt-2 overflow-hidden hovered-parent:mt-2 transition-height transition-all ease-in-out duration-700 h-0 flex flex-col bg-gray-200 px-2 rounded-lg">
              <Link to="#" className="w-full mr-3 flex justify-between items-center mb-4">
        <HiViewBoards className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-2 mt-2 text-blue-800 text-base font-normal">   بخش بندی مشتریان </span></Link>
       <Link to="#" className="w-full mr-3 flex justify-between items-center mb-4">
        <MdOutlineMoveDown className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-2 text-blue-800 text-base font-normal">   جابجایی مشتریان </span></Link>
       <Link to="#" className="w-full mr-3 flex justify-between items-center mb-4">
        <GiReturnArrow className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-2 text-blue-800 text-base font-normal">   نرخ بازگشت مشتریان </span></Link>
       <Link to="#" className="w-full mr-3 flex justify-between items-center mb-4">
        <RiRecycleLine className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-2 text-blue-800 text-base font-normal whitespace-pre-line"> طول عمر مشتریان </span></Link>
       <Link to="#" className="w-full mr-3 flex justify-between items-center mb-4">
        <BsFillBasketFill className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-2 text-blue-800 text-base font-normal">   سهم سبد مشتریان </span></Link>
       <Link to="#" className="w-full mr-3 flex justify-between items-center mb-4">
        <MdOutlineSocialDistance className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-2 text-blue-800 text-base font-normal"> فاصله خرید مشتریان </span></Link>
       <Link to="#" className="w-full mr-3 flex justify-between items-center mb-4">
        <HiUsers className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-2 text-blue-800 text-base font-normal">  گروه مشتریان </span></Link>
           </div>   
   </div>
   <div className="w-full">
       <Link to="#" className="w-full flex justify-between items-center mb-8">
        <BiPackage className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg font-normal">  محصولات  </span>
       <BiCaretDown className="text-blue-500 text-lg"/>
   </Link> 
   <div className="focused-within-parent:h-32 hovered-parent:h-32 focused-within-parent:mt-2 overflow-hidden hovered-parent:mt-2 transition-height transition-all ease-in-out duration-700 h-0 flex flex-col bg-gray-200 px-2 rounded-lg">
     <Link to="#" className="w-full flex justify-between items-center mb-4">
        <HiWallet className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 mt-2 text-blue-800 text-lg">  عملکرد محصولات  </span>
   </Link> 
    <Link to="#" className="w-full flex justify-between items-center mb-4">
        <MdProductionQuantityLimits className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg"> تحلیل سبد مشتریان   </span>
   </Link> 
       </div>
   </div>
   <Link to="#" className="w-full flex justify-between items-center mb-8">
        <FaUserEdit className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg font-normal"> مدیریت کاربران   </span>
   </Link>
   <div className="w-full">
         <Link to="#" className="w-full flex justify-between items-center mb-8">
        <HiCog className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg font-normal"> تنظیمات </span>
       <BiCaretDown className="text-blue-500 text-lg"/>
   </Link>
   <div className="focused-within-parent:h-44 hovered-parent:h-44 focused-within-parent:mt-2 overflow-hidden hovered-parent:mt-2 transition-height transition-all ease-in-out duration-700 h-0 flex flex-col bg-gray-200 px-2 rounded-lg">
   <Link to="#" className="w-full flex justify-between items-center mb-4">
        <HiChartPie className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 mt-2 text-blue-800 text-lg font-normal"> تحلیل داده    </span>
   </Link> 
   <Link to="#" className="w-full flex justify-between items-center mb-4">
        <BiDownload className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg font-normal"> ورود داده    </span>
   </Link> 
   <Link to="#" className="w-full flex justify-between items-center mb-4">
        <TbMessage2 className="text-blue-500 text-lg"/>
       <span className="flex-1 text-right mr-3 text-blue-800 text-lg font-normal"> سامانه پیامک    </span>
   </Link> 
   </div>
   </div> 
   </>
     );
}
 
export default NavItems;