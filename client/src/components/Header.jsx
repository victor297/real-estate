import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import banner from ".././image/banner.png";

const Header = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [address, setAddress] = useState("");
  const tabsData = [
    {
      label: "Rent",

      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    },
    {
      label: "Sale",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    },
  ];
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      navigate(
        `/search?address=${address}&type=${tabsData[
          activeTabIndex
        ].label.toLowerCase()}`
      );
      // const res = await fetch(
      //   `${url}/listing/search?address=${address}`

      // );
      // const data = await res.json();
      // setApartmentsListings(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-white flex flex-col items-center pb-9">
        <header className="flex-col overflow-hidden relative flex min-h-[716px] w-full pt-4 px-20 max-md:max-w-full max-md:px-5">
          <img
            src={banner}
            // srcSet={banner}
            className="absolute h-full w-full object-cover sm:object-fill object-center inset-0"
          />
          <header className="relative text-center sm:text-start text-3xl text-white sm:text-5xl font-bold self-stretch mt-20 max-md:max-w-full  max-md:mt-10">
            {" "}
            The #1 site real estate Professionals trust*{" "}
          </header>
          <div className="relative text-white hidden sm:block text-base self-stretch mt-8 max-md:max-w-full">
            {" "}
            We are glad to have you around. Feel <br /> free to browse our
            website.{" "}
          </div>
          <div className="relative w-full sm:w-1/3 self-center sm:self-start mt-10">
            <div className="flex space-x-3 gap-4 ">
              {/* Loop through tab data and render button for each. */}
              {tabsData.map((tab, idx) => {
                return (
                  <button
                    key={idx}
                    className={`py-2 border-b-4 transition-colors duration-300 sm:font-bold text-lg sm:text-2xl ${
                      idx === activeTabIndex
                        ? "border-teal-500 text-white"
                        : "border-transparent hover:border-gray-700 text-white"
                    }`}
                    // Change the active tab on click.
                    onClick={() => setActiveTabIndex(idx)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* Show active tab content. */}
            <div className="py-4">
              {/* <p>{tabsData[activeTabIndex].content}</p> */}

              <form
                onSubmit={handleSubmit}
                className=" p-1 sm:p-3 rounded-full px-2 flex flex-col justify-between items-center  "
              >
                {" "}
                <p className="text-start text-white self-start sm:text-2xl font-extrabold">
                  {" "}
                  Enter a Location
                </p>
                <input
                  type="text"
                  placeholder={`Search ${tabsData[activeTabIndex].label} By Location`}
                  className="bg-slate-100 focus:outline-none p-2 rounded-md border-[1.5px] border-cyan-950  w-full"
                  onChange={(e) => setAddress(e.target.value)}
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="w-full bg-black mt-3 rounded-md align-middle text-center">
                  <button className="text-white flex gap-2 align-middle items-center justify-center m-auto text-2xl p-1  sm:p-2">
                    <FaSearch size={20} /> search
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <Link to={"/search"}>
            {" "}
            <div className="text-stone-300 text-xs italic my-auto">
              <div className="relative bg-white flex w-[334px] max-w-full items-center justify-between gap-5 mt-10 px-5 py-2.5 rounded-[33px] self-start max-md:mt-10 max-md:pr-5">
                {" "}
                Find a location{" "}
                <span className="flex flex-col gap-6  px-3 max-w-6xl mx-auto text-xs sm:text-sm text-blue-800 font-bold hover:underline">
                  Let&apos;s get started...
                </span>
              </div>
            </div>
          </Link> */}
          <div className="relative text-white sm:text-indigo-600 text-right text-3xl font-semibold w-[324px] max-w-full mt-20 self-end max-md:mt-10">
            {" "}
            Be a co-Agent <span> by HomeNow</span>{" "}
          </div>
          <div className="relative  opacity-100 font-bold drop-shadow  text-white sm:text-black text-right text-sm leading-6 z-[1] w-[430px] max-w-full mt-10 self-end">
            {" "}
            Through the power of the group, you no longer have to wait to gather
            a small fortune in order to invest in real estate. Our fractional
            ownership platform allows you to pool with others in order to buy a
            small bit of a big property.{" "}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
