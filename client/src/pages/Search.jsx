import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import { url } from "../utils/api";
import { toast } from "react-hot-toast";

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
    address: "",
    category: "",
  });
  const [showfilter, setshowFilter] = useState(true);

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const furnishedFromUrl = urlParams.get("furnished");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");
    const categoryFromUrl = urlParams.get("category");
    const addressFromUrl = urlParams.get("address");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl ||
      categoryFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true" ? true : false,
        furnished: furnishedFromUrl === "true" ? true : false,
        offer: offerFromUrl === "true" ? true : false,
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
        category: categoryFromUrl || "",
        address: addressFromUrl || "",
      });
    }

    const fetchListings = async () => {
      try {
        setLoading(true);
        setShowMore(false);
        const searchQuery = urlParams.toString();
        const res = await fetch(`${url}/listing/get?${searchQuery}`);

        if (!res.ok) {
          // Handle non-successful HTTP response
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        if (data.length > 8) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }

        setListings(data);
      } catch (error) {
        // Handle any other errors
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setSidebardata({ ...sidebardata, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }
    if (e.target.id === "category") {
      setSidebardata({ ...sidebardata, category: e.target.value });
    }
    if (e.target.id === "address") {
      setSidebardata({ ...sidebardata, address: e.target.value });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setSidebardata({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split("_")[1] || "desc";

      setSidebardata({ ...sidebardata, sort, order });
    }
  };
  // const handleCategoryChange = (e) => {
  //   setSidebardata({
  //     ...sidebardata,
  //     category: e.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sidebardata.category === undefined) {
      setError("kindly select the type of apartment");
      return;
    } else {
      setError(false);
    }
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("type", sidebardata.type);
    urlParams.set("parking", sidebardata.parking);
    urlParams.set("furnished", sidebardata.furnished);
    urlParams.set("offer", sidebardata.offer);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);
    urlParams.set("category", sidebardata.category); // Added category
    urlParams.set("address", sidebardata.address); // Added category
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
    // setSidebardata({
    //   searchTerm: "",
    //   type: "all",
    //  parking: false,
    //   furnished: false,
    //   offer: false,
    //   sort: "created_at",
    //   order: "desc",
    //   category: "",
    // });
  };

  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const startIndex = numberOfListings;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`${url}/listing/get?${searchQuery}`);
    const data = await res.json();
    if (data.length < 9) {
      setShowMore(false);
    }
    setListings([...listings, ...data]);
  };
  const toggleFilter = () => {
    if (!showfilter) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setshowFilter(!showfilter);
  };
  return (
    <div className="flex flex-col md:flex-row">
      <button
        className="fixed right-4 bottom-4 bg-blue-500 text-white px-4 py-2 rounded-full sm:hidden"
        onClick={toggleFilter}
      >
        {showfilter ? "Hide Filters" : "Show Filters"}
      </button>
      <div
        className={`${
          showfilter ? "block" : "hidden"
        } p-7 md:block border-b-2 md:border-r-2 md:min-h-screen`}
      >
        {" "}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              general Search:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Location:
            </label>
            <input
              type="text"
              id="address"
              placeholder="Search by location"
              className="border rounded-lg p-3 w-full"
              value={sidebardata.address}
              onChange={handleChange}
            />
          </div>

          <div className="">
            <label htmlFor="category" className="font-semibold pe-2">
              Category:
            </label>
            <select
              id="category"
              onChange={handleChange}
              value={sidebardata.category}
              className="border p-3 rounded-lg"
            >
              <option value="">Select category</option>
              <option value="room-self-con">Room Self-Con</option>
              <option value="room-and-parlour">Room and Parlour</option>
              <option value="2/3-bedroom-apartments">
                2/3 Bedroom Apartments
              </option>
              <option value="apartey/apartment">Apartey/Apartment</option>
            </select>
            {error && <p className="text-red-700 text-sm">{error}</p>}
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="all"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "all"}
              />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "rent"}
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="sale"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "sale"}
              />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.offer}
              />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.parking}
              />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.furnished}
              />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select
              onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="border rounded-lg p-3"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to hight</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h1 className="sm:text-3xl text-center  sm:text-start font-semibold border-b p-3 text-slate-700 mt-5">
          Available Listings
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && listings.length === 0 && (
            <p className="text-xl text-slate-700">No listing found!</p>
          )}
          {loading && (
            <p className="text-xl text-slate-700 text-center w-full">
              Loading...
            </p>
          )}

          {!loading &&
            listings &&
            listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
            ))}

          {showMore && (
            <button
              onClick={onShowMoreClick}
              className="text-green-700 hover:underline p-7 text-center w-full"
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
