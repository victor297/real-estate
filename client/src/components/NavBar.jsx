import React from "react";
import { MdCall, MdLocationOn, MdMenu, MdMessage } from "react-icons/md";
import { FaSearch, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { categories } from "../utils/categories";
import HorizontalScroll from "./HorizontalScroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <>
      <div className="bg-violet-600 self-stretch flex w-full items-center justify-between gap-5 px-20 py-3 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <span className="self-stretch flex items-stretch justify-between gap-2">
          <MdLocationOn color="white" size={20} />
          <div className="text-white text-xs sm:text-sm leading-5 self-center grow whitespace-nowrap my-auto">
            oshogbo, 18 ade olu St, osun
          </div>
        </span>
        <span className="self-stretch flex items-stretch justify-between gap-2">
          <MdCall color="white" size={20} />
          <div className="text-white text-right text-xs sm:text-sm leading-5 self-center grow whitespace-nowrap my-auto">
            +2349063964547
          </div>
        </span>
        <span className=" gap-2 my-auto hidden sm:flex items-start align-middle">
          <MdMessage color="white" size={20} />
          <div className="text-white text-right text-sm sm:leading-5 self-stretch grow whitespace-nowrap">
            homenowsupport@gmail.com
          </div>
        </span>
      </div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
            <div className="flex items-center gap-4">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                to="/"
              >
                <span className="flex items-center gap-3 my-auto">
                  <FaHome size={25} />

                  <div className="text-white text-base italic font-bold  self-stretch grow whitespace-nowrap">
                    {" "}
                    HomeNow{" "}
                  </div>
                </span>
              </Link>
              {/* Search form */}
              <form
                onSubmit={handleSubmit}
                className="bg-slate-100 p-1 sm:p-3 rounded-full px-2 sm:flex items-center hidden  "
              >
                <input
                  type="text"
                  placeholder="search.."
                  className="bg-transparent focus:outline-none w-24 sm:w-96"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>
                  <FaSearch className="text-blue-600" />
                </button>
              </form>
            </div>
            {/* Menu button */}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MdMenu color="white" size={30} />
            </button>
          </div>

          {/* Navigation items */}

          <div
            className={
              "lg:flex sm:items-center items-end ml-auto" +
              (navbarOpen ? " flex " : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center sm:items-center items-end">
              {categories.map((category) => (
                <li className="nav-item" key={category.label}>
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={category.link}
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">{category.label}</span>
                  </Link>
                </li>
              ))}

              {currentUser ? (
                currentUser.role === "agent" || currentUser.role === "admin" ? (
                  <Link to="/create-listing">
                    <li className="nav-item">
                      <button className="text-white text-sm font-semibold whitespace-nowrap border self-stretch grow justify-center items-stretch px-9 py-2 rounded-[43px] mx-2 border-solid border-white max-md:px-5">
                        {" "}
                        Add listing{" "}
                      </button>
                    </li>
                  </Link>
                ) : null
              ) : null}
              <Link to="/profile">
                {" "}
                {currentUser ? (
                  <div className="flex items-center gap-2 text-white font-semibold">
                    Profile
                    <img
                      className="rounded-full h-10 w-10 object-cover border-blue-800 border-[3px]"
                      src={currentUser.avatar}
                      alt="profile"
                    />
                  </div>
                ) : (
                  <li className=" px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    {" "}
                    Sign in
                  </li>
                )}
              </Link>
            </ul>
          </div>
        </div>
        {/* <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-1 sm:p-3 rounded-full px-2 mx-3 flex items-center w-full sm:hidden "
        >
          <input
            type="text"
            placeholder="search.."
            className="bg-transparent focus:outline-none w-24 sm:w-96"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className=" ml-auto">
            <FaSearch className="text-blue-600 self-end" />
          </button>
        </form> */}
        <HorizontalScroll />
      </nav>
    </>
  );
}
