import React from "react";
import Search from "../svg/search.svg";
import Notifi from "../svg/notification.svg";
import Message from "../svg/messagequ.svg";
import Calender from "../svg/calendar.svg";
import Arrowsquareup from "../svg/arrowsquareup.svg";
import Attach from "../svg/attach.svg";
import Addsquare1 from "../svg/addsquare1.svg";
import Calenderdark from "../svg/calda.svg";
import Profileuser from "../svg/profileuser.svg";
import Fourwheel from "../svg/fourwheel.svg";
import Barbtn from "../svg/barbutton.svg";
import Profile from "../svg/profile.svg";

import { IoIosArrowDown } from "react-icons/io";
import { BiFilterAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-[#DBDBDB] border-b md:px-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xs:p-2 px-4 py-2">
          <form className="lg:w-[400px] xs:w-[100px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                  src={Search}
                  alt="search"
                  className="w-5 h-5 text-gray-500 "
                />
              </div>
              <input
                type="search"
                className="block font-normal h-[44px] text-[14px] w-full pl-10 text-sm text-gray-900 border border-[#F5F5F5] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search for anything..."
                required
              />
            </div>
          </form>

          <div className="flex items-center md:order-2">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto  mr-12"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col md:p-0  rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white ">
                <li>
                  <img
                    src={Calender}
                    alt="calender"
                    className="w-5 h-5 text-gray-500 "
                  />
                </li>
                <li>
                  <img
                    src={Message}
                    alt="messgae"
                    className="w-5 h-5 text-gray-500 "
                  />
                </li>
                <li>
                  <img
                    src={Notifi}
                    alt="notifications"
                    className="w-5 h-5 text-gray-500 "
                  />
                </li>
              </ul>
            </div>
            <div className="m-2">
              <p className="font-normal	text-base leading-5 text-right text-[#0D062D]">
                Anima Agrawal
              </p>
              <p className="font-normal text-[14px] leading-4 text-right text-[#787486]">
                U.P, India
              </p>
            </div>
            <button
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={Profile}
                alt="user photo"
              />
            </button>
            <div className="m-2">
              <IoIosArrowDown />
            </div>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <ul className="my-2 grid w-full gap-3 md:grid-cols-2 px-8">
        <li className=" flex items-center m-2 justify-start gap-4 h-full">
          <p className="font-semibold text-2xl lg:text-[46px] leading-14 text-capitalize text-[#0D062D]">
            Mobile App
          </p>
          <img src={Arrowsquareup} alt="arrowsquareup" />
          <img src={Attach} alt="attach" />
        </li>
        <li className="flex items-center m-2  gap-4 h-full lg:justify-end sm:justify-start ">
          <img src={Addsquare1} alt="attach" />
          <p className="font-medium text-base leading-5 capitalize text-purple-600">
            invite
          </p>

          <div className="flex -space-x-3">
            <img
              className="w-10 h-10 object-cover border-2 border-white rounded-full dark:border-gray-800"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              alt=""
            />
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-[#D25B68] bg-[#F4D7DA] border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +2
            </a>
          </div>
        </li>
      </ul>

      <ul className="my-2 mt-5 grid w-full gap-3 md:grid-cols-2 px-8">
        <li className=" flex items-center m-2 justify-start gap-4 h-full">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <BiFilterAlt className="text-[#787486]" />
            </div>
            <select className="block w-full py-2 pl-10 pr-10 text-base font-medium text-[#787486] leading-6 bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500">
              <option>Filter</option>
              <option>Filter 2</option>
              <option>Filter 3</option>
            </select>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <img src={Calenderdark} alt="Calenderdark" />
            </div>
            <select className="block w-full py-2 pl-10 pr-10 text-base font-medium text-[#787486] leading-6 bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500">
              <option>Today</option>
              <option>Today 2</option>
              <option>Today 3</option>
            </select>
          </div>
        </li>
        <li className="flex items-center m-2  gap-4 h-full lg:justify-end sm:justify-start ">
          <button
            type="button"
            className="text-[#787486] gap-3 bg-white border border-[#787486] focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
          >
            <img src={Profileuser} alt="Profileuser" />
            Share
          </button>
          <div className="border-l  border-[#787486] h-8"></div>
          <img src={Barbtn} alt="Barbtn" />
          <img src={Fourwheel} alt="Fourwheel" />
        </li>
      </ul>
    </>
  );
};

export default Navbar;
