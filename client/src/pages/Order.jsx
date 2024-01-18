import {
  MdBook,
  MdCarRental,
  MdLocationOn,
  MdLocationPin,
} from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { url } from "../utils/api";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Modal from "../components/Modal";
import Reciept from "../components/Receipt";

function Order(props) {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);
  const [open, setOpen] = useState(false);

  const [error, setError] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  console.log("currentUser", currentUser);
  console.log("order", order);
  useEffect(() => {
    console.log("listing", order);
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${url}/paystack/orders/${currentUser._id}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setOrder(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [currentUser._id]);
  return (
    <div className="items-start m-auto bg-white flex gap-4 max-w-[850px] flex-col p-8 rounded-2xl max-md:px-5">
      {order &&
        order.map((listing) => (
          <div
            key={listing._id}
            className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[850px]"
          >
            <span className="justify-between self-stretch flex w-full  sm:mt-7 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="text-slate-700 sm:text-3xl font-semibold leading-10 grow shrink basis-auto">
                Order ID:{" "}
                <span className=" text-indigo-500"> {listing._id}</span>
              </div>

              <div className="items-stretch self-stretch flex justify-between gap-2.5">
                <>
                  <button
                    className="btn btn-danger"
                    onClick={() => setOpen(true)}
                  >
                    <span className="items-center border border-[color:var(--Natural-300,#D0D5DD)] flex justify-between gap-2 px-4 py-2.5 rounded-lg border-solid">
                      <MdBook />
                      <div className="text-gray-500 text-sm font-semibold leading-5 self-stretch">
                        Reciept
                      </div>
                    </span>
                  </button>

                  <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="mx-auto my-4 ">
                      {listing && <Reciept listing={listing} />}
                    </div>
                  </Modal>
                </>

                <span className=" bg-indigo-500 flex text-white justify-between content-center align-middle items-center gap-2 px-4 py-2.5 rounded-lg">
                  Track order
                  <MdLocationPin color="white" />
                </span>
              </div>
            </span>
            <p className="text-slate-700 sm:text-3xl font-semibold leading-10 grow shrink basis-auto">
              Payment ID:{" "}
              <span className=" text-indigo-500"> {listing.referenceId}</span>
              <span className=" font-thin bg-green-900 rounded-md p-1 text-green-400 text-xs">
                {listing.payment_status}
              </span>
            </p>
            <div className="items-stretch flex justify-between self-start max-md:max-w-full max-md:flex-wrap">
              <span className="items-center flex justify-between gap-2.5">
                <MdCarRental />
                <div className="text-emerald-500 text-base font-semibold leading-6 self-stretch grow whitespace-nowrap">
                  Order date: {new Date(listing.createdAt).toLocaleString()}
                </div>
              </span>
            </div>
            <div className="bg-gray-300 self-stretch shrink-0 h-px mt-7 max-md:max-w-full" />

            {/* <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-[30%] sm:w-[330px]"> */}
            <Link to={`/listing/${listing.product._id}`}>
              <img
                src={
                  listing.product.imageUrls[0] ||
                  "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
                }
                alt="listing cover"
                className=" h-32 sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
                // className=" h-32 h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
              />
              <div className="p-3 flex flex-col gap-1 sm:gap-2 w-full">
                <p className="truncate sm:text-lg text-sm font-semibold text-slate-700">
                  {listing.product.name}
                </p>
                <div className="flex items-center gap-1 ">
                  <MdLocationOn className="h-4 w-4 text-green-700" />
                  <p className="sm:text-sm text-xs text-gray-600 truncate w-full">
                    {listing.product.address}
                  </p>
                </div>
                <p className="sm:text-sm text-xs text-gray-600 line-clamp-2">
                  {listing.product.description}
                </p>
                <p className="text-slate-500 sm:mt-2 text-orange-600 font-semibold sm:text-sm text-xs ">
                  $
                  {listing.product.offer
                    ? listing.product.discountPrice.toLocaleString("NGN")
                    : listing.product.regularPrice.toLocaleString("NGN")}
                  {listing.product.type === "rent" && " / year"}
                </p>
                <div className="text-slate-700 flex gap-4">
                  <div className="font-semibold text-xs">
                    {listing.product.bedrooms > 1
                      ? `${listing.product.bedrooms} beds `
                      : `${listing.product.bedrooms} bed `}
                  </div>
                  <div className="font-semibold text-xs">
                    {listing.product.bathrooms > 1
                      ? `${listing.product.bathrooms} baths `
                      : `${listing.product.bathrooms} bath `}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

      <div>
        <p className="text-orange-500">Need Help?</p> Order Issues Delivery Info
      </div>
    </div>
  );
}

export default Order;
