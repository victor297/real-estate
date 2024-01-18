import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { url } from "../utils/api";
import { toast } from "react-hot-toast";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [roomSelfConListings, setRoomSelfConListings] = useState([]);
  const [roomAndParlourListings, setRoomAndParlourListings] = useState([]);
  const [twoThreeBedroomListings, setTwoThreeBedroomListings] = useState([]);
  const [apartmentsListings, setApartmentsListings] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`${url}/listing/get?offer=true&limit=4`);
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        toast.error(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`${url}/listing/get?type=rent&limit=4`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        toast.error(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`${url}/listing/get?type=sale&limit=4`);
        const data = await res.json();
        setSaleListings(data);
        fetchRoomSelfConListings();
      } catch (error) {
        toast.error(error);
      }
    };

    const fetchRoomSelfConListings = async () => {
      try {
        const res = await fetch(
          `${url}/listing/get?category=room-self-con&limit=4`
        );
        const data = await res.json();
        setRoomSelfConListings(data);
        fetchRoomAndParlourListings();
      } catch (error) {
        toast.error(error);
      }
    };

    const fetchRoomAndParlourListings = async () => {
      try {
        const res = await fetch(
          `${url}/listing/get?category=room-and-parlour&limit=4`
        );
        const data = await res.json();
        setRoomAndParlourListings(data);
        fetchTwoThreeBedroomListings();
      } catch (error) {
        toast.error(error);
      }
    };

    const fetchTwoThreeBedroomListings = async () => {
      try {
        const res = await fetch(
          `${url}/listing/get?category=2/3-bedroom&limit=4`
        );
        const data = await res.json();
        setTwoThreeBedroomListings(data);
        fetchApartmentsListings();
      } catch (error) {
        toast.error(error);
      }
    };

    const fetchApartmentsListings = async () => {
      try {
        const res = await fetch(
          `${url}/listing/get?category=apartey/apartment&limit=4`
        );
        const data = await res.json();
        setApartmentsListings(data);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchOfferListings();
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-white ">
        <div className="self-stretch flex w-full flex-col items-stretch rounded-none max-md:max-w-full">
          <span className="self-center z-[1] flex w-full max-w-[1140px] flex-col mt-2  px-5 items-start max-md:max-w-full max-md:mt-2 max-md:mb-2.5">
            <div className="text-blue-600 text-xl self-center  font-medium tracking-[2.91px]">
              REAL ESTATE
            </div>
            <div className="self-stretch mt-5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch mt-1 max-md:max-w-full max-md:mt-2">
                    <span className="flex flex-col items-stretch px-6 max-md:max-w-full max-md:px-5">
                      <div className="text-neutral-950 text-6xl font-semibold leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                        Find a perfect home you love..!
                      </div>
                      <div className="text-zinc-500 text-base leading-7 mt-6 max-md:max-w-full">
                        Etiam eget elementum elit. Aenean dignissim dapibus
                        vestibulum. Integer a dolor eu sapien sodales vulputate
                        ac in purus.
                      </div>
                    </span>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68251e2b39eec07b1fbe4ff44a21e5e2f1326ac50449228e7573cd528311213a?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68251e2b39eec07b1fbe4ff44a21e5e2f1326ac50449228e7573cd528311213a?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68251e2b39eec07b1fbe4ff44a21e5e2f1326ac50449228e7573cd528311213a?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68251e2b39eec07b1fbe4ff44a21e5e2f1326ac50449228e7573cd528311213a?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68251e2b39eec07b1fbe4ff44a21e5e2f1326ac50449228e7573cd528311213a?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68251e2b39eec07b1fbe4ff44a21e5e2f1326ac50449228e7573cd528311213a?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68251e2b39eec07b1fbe4ff44a21e5e2f1326ac50449228e7573cd528311213a?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68251e2b39eec07b1fbe4ff44a21e5e2f1326ac50449228e7573cd528311213a?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                      className="aspect-[1.65] object-contain object-center w-full overflow-hidden mt-9 max-md:max-w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                  <div className="shadow-2xl bg-white flex grow flex-col items-stretch w-full pb-12 rounded-[30px] max-md:mt-10">
                    <div className="border-b-[color:var(--Text-Colour-4,#AAA)] bg-white flex flex-col items-center pl-10 pr-20 pt-10 rounded-3xl border-b border-solid max-md:px-5">
                      <span className="flex w-[252px] max-w-full items-stretch justify-between gap-5">
                        <div className="text-violet-900 text-center text-base font-medium">
                          For Sale
                        </div>
                        <div className="text-zinc-500 text-center text-base font-medium self-start">
                          For Rent
                        </div>
                      </span>
                      <div
                        loading="lazy"
                        className="aspect-[51] object-contain object-center w-[153px] stroke-[3px] stroke-violet-900 overflow-hidden max-w-full mt-7 self-start"
                      />
                    </div>
                    <div className="flex flex-col mt-12 mb-2.5 px-10 max-md:mt-10 max-md:px-5">
                      <span className="text-neutral-400 text-base leading-7 whitespace-nowrap border-[color:var(--Text-Colour-5,#D4D4D4)] bg-neutral-300 bg-opacity-20 self-stretch justify-center pl-5 pr-16 py-6 rounded-3xl border-0 border-solid items-start max-md:pr-5">
                        New York, San Francisco, etc
                      </span>
                      <span className="bg-neutral-300 bg-opacity-20 self-stretch flex items-stretch justify-between gap-5 mt-8 p-6 rounded-3xl max-md:pr-5">
                        <div className="text-zinc-500 text-opacity-50 text-base leading-7">
                          Select Property Type
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06baaeb140c7abbf649d12d1096dc155ef89b500e24cd188c150b63fe4897b69?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                          className="aspect-[2.33] object-contain object-center w-3.5 fill-neutral-400 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </span>
                      <span className="bg-neutral-300 bg-opacity-20 self-stretch flex items-stretch justify-between gap-5 mt-8 px-6 py-6 rounded-3xl max-md:pr-5">
                        <div className="text-zinc-500 text-opacity-50 text-base leading-7">
                          Select Rooms
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06baaeb140c7abbf649d12d1096dc155ef89b500e24cd188c150b63fe4897b69?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                          className="aspect-[2.33] object-contain object-center w-3.5 fill-neutral-400 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                      </span>
                      <span className="flex items-stretch gap-3 mt-5 self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f26a4cb8417cb2e451173bec79fa34913848b15de543a0b641f0884633e58ce?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                          className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-violet-900 text-right text-sm leading-5 grow whitespace-nowrap self-start">
                          Advance Search
                        </div>
                      </span>
                      <div className="border bg-violet-900 self-stretch flex w-full flex-col justify-center items-center mt-16 px-16 py-5 rounded-[50px] border-solid border-stone-300 max-md:mt-10 max-md:px-5">
                        <span className="flex items-stretch gap-3">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b08d3c1c79ce9002470e2603f1d016dd8a0312ac6a923dbf6f260a19b1b152c?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                          />
                          <div className="text-white text-center text-base font-medium self-center my-auto">
                            Search
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center w-[710px] max-w-full mt-16 max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                  <span className="shadow-2xl bg-white flex grow items-center justify-between gap-2.5 w-full px-9 py-7 rounded-[50px] max-md:mt-8 max-md:px-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c6b27869e41df323d68a0d772fcc4ab4a02287e096d3e37a471b1d626093b3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9c6b27869e41df323d68a0d772fcc4ab4a02287e096d3e37a471b1d626093b3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9c6b27869e41df323d68a0d772fcc4ab4a02287e096d3e37a471b1d626093b3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9c6b27869e41df323d68a0d772fcc4ab4a02287e096d3e37a471b1d626093b3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9c6b27869e41df323d68a0d772fcc4ab4a02287e096d3e37a471b1d626093b3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9c6b27869e41df323d68a0d772fcc4ab4a02287e096d3e37a471b1d626093b3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9c6b27869e41df323d68a0d772fcc4ab4a02287e096d3e37a471b1d626093b3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9c6b27869e41df323d68a0d772fcc4ab4a02287e096d3e37a471b1d626093b3?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                      className="aspect-[4.31] object-contain object-center w-[155px] overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-zinc-800 text-sm sm:text-xl font-medium overflow-auto ">
                      72k+ Happy Customers
                    </div>
                  </span>
                </div>
                <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                  <span className="shadow-2xl bg-white flex grow items-stretch gap-2.5 w-full px-10 py-5 rounded-[50px] max-md:mt-8 max-md:px-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a96c0ca4c7f10fa9cc66f18f49335bf794904ad33aab69edee1b38fa5744de?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a96c0ca4c7f10fa9cc66f18f49335bf794904ad33aab69edee1b38fa5744de?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a96c0ca4c7f10fa9cc66f18f49335bf794904ad33aab69edee1b38fa5744de?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a96c0ca4c7f10fa9cc66f18f49335bf794904ad33aab69edee1b38fa5744de?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a96c0ca4c7f10fa9cc66f18f49335bf794904ad33aab69edee1b38fa5744de?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a96c0ca4c7f10fa9cc66f18f49335bf794904ad33aab69edee1b38fa5744de?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a96c0ca4c7f10fa9cc66f18f49335bf794904ad33aab69edee1b38fa5744de?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a96c0ca4c7f10fa9cc66f18f49335bf794904ad33aab69edee1b38fa5744de?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                      className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="text-zinc-800 text-sm sm:text-xl font-medium my-auto overflow-auto">
                      200+ New Listings Everyday!
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
        {/* listing results for offer, sale and rent */}
        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          {offerListings && offerListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent offers
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?offer=true"}
                >
                  Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {/* Room-Self-Con Listings */}
          {roomSelfConListings && roomSelfConListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Room Self Contain Listings
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?category=room-self-con"}
                >
                  Show more Room Self Contain Listings
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {roomSelfConListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}

          {/* Room and Parlour Listings */}
          {roomAndParlourListings && roomAndParlourListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Room and Parlour Listings
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?category=room-and-parlour"}
                >
                  Show more Room and Parlour Listings
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {roomAndParlourListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}

          {/* 2/3 Bedroom Listings */}
          {twoThreeBedroomListings && twoThreeBedroomListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  2/3 Bedroom Listings
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?category=2/3-bedroom"}
                >
                  Show more 2/3 Bedroom Listings
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {twoThreeBedroomListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}

          {/* Apartments Listings */}
          {apartmentsListings && apartmentsListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Apartments Listings
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?category=apartments"}
                >
                  Show more Apartments Listings
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {apartmentsListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {rentListings && rentListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for rent
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=rent"}
                >
                  Show more places for rent
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings && saleListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for sale
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=sale"}
                >
                  Show more places for sale
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="bg-violet-900 self-stretch mt-10 pl-5 pr-11 rounded-[40px] max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a84937af987268a9c0ab685070c5e486344d144723095af69a2b8cff2888dfcf?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a84937af987268a9c0ab685070c5e486344d144723095af69a2b8cff2888dfcf?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a84937af987268a9c0ab685070c5e486344d144723095af69a2b8cff2888dfcf?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a84937af987268a9c0ab685070c5e486344d144723095af69a2b8cff2888dfcf?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a84937af987268a9c0ab685070c5e486344d144723095af69a2b8cff2888dfcf?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a84937af987268a9c0ab685070c5e486344d144723095af69a2b8cff2888dfcf?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a84937af987268a9c0ab685070c5e486344d144723095af69a2b8cff2888dfcf?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a84937af987268a9c0ab685070c5e486344d144723095af69a2b8cff2888dfcf?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                className="aspect-[1.18] object-contain object-center w-full overflow-hidden z-[1] mt-0 grow"
              />
            </div>
            <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
              <div className="mt-20 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                    <span className="flex flex-col items-stretch max-md:mt-9">
                      <div className="text-white text-4xl font-semibold leading-10 whitespace-nowrap">
                        Become a Agent.
                      </div>
                      <div className="text-white text-base leading-7 mt-5">
                        Are you passionate about real estate and looking for a
                        rewarding career? Become a real estate agent with
                        HomeNow. We are always on the lookout for motivated
                        individuals to join our dynamic team.
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex mt-0 flex-col items-end">
                {currentUser ? (
                  <p className="text-violet-900 text-center text-base font-medium items-stretch border border-[color:var(--Primary-Colour,#3A0CA3)] bg-white self-stretch justify-center mt-10 mb-3 px-8 py-5 rounded-[30px] border-solid max-md:mt-10 max-md:px-5">
                    {" "}
                    welcome back {currentUser.username}
                  </p>
                ) : (
                  <Link
                    to={"/signup"}
                    className="text-violet-900 text-center text-base font-medium items-stretch border border-[color:var(--Primary-Colour,#3A0CA3)] bg-white self-stretch justify-center mt-10 mb-3 px-8 py-5 rounded-[30px] border-solid max-md:mt-10 max-md:px-5"
                  >
                    Register Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <span className="flex w-full flex-col mt-2 px-5 self-end max-md:max-w-full max-md:mt-2">
          <div className="text-blue-600 text-xl  text-center font-medium tracking-[2.91px] mt-5 max-md:mt-5">
            WHO ARE WE
          </div>
          <div className="self-center w-full max-w-[1120px] mt-2 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                <span className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-5">
                  <div className="text-zinc-800 text-2xl sm:text-4xl sm:text-start text-center font-semibold leading-10 max-md:max-w-full">
                    HomeNow Assisting individuals in locating the appropriate
                    real estate.
                  </div>
                  <div className="text-zinc-500 text-center sm:text-start text-base leading-7 mt-7 max-md:max-w-full">
                    Welcome to HomeNow - Your Trusted Partner in Real Estate
                    Find your dream home with us. Explore our listings, connect
                    with our experienced agents, and make your homeownership
                    dreams a reality.
                  </div>
                  <div className="shadow-lg bg-white flex items-center justify-between gap-5 mt-9 pl-10 pr-20 py-7 rounded-[30px] max-md:max-w-full max-md:flex-wrap max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcddcb91b9c9d67acc1393df0e8f38268f2e81d3176b69e68552f5a556718606?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                      className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <span className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-blue-600 text-xl font-medium">
                        Donec porttitor euismod
                      </div>
                      <div className="text-zinc-500 text-base leading-7 mt-3.5">
                        Nullam a lacinia ipsum, nec dignissim purus. Nulla
                      </div>
                    </span>
                  </div>
                  <div className="shadow-lg bg-white flex items-center justify-between gap-5 mt-8 pl-10 pr-20 py-7 rounded-[30px] max-md:max-w-full max-md:flex-wrap max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5daa0559c96b6ee5832254b10271a7246b33e040ad7d1c51e6e285eb3c78e46a?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                      className="aspect-[0.91] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <span className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-blue-600 text-xl font-medium">
                        Donec porttitor euismod
                      </div>
                      <div className="text-zinc-500 text-base leading-7 mt-3.5">
                        Nullam a lacinia ipsum, nec dignissim purus. Nulla
                      </div>
                    </span>
                  </div>
                </span>
              </div>
              <div className=" flex-col hidden sm:flex items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/88814556c40720dd61f2a3cea53ca2a499a815fee578861926cf73cd5c7012f8?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/88814556c40720dd61f2a3cea53ca2a499a815fee578861926cf73cd5c7012f8?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88814556c40720dd61f2a3cea53ca2a499a815fee578861926cf73cd5c7012f8?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/88814556c40720dd61f2a3cea53ca2a499a815fee578861926cf73cd5c7012f8?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/88814556c40720dd61f2a3cea53ca2a499a815fee578861926cf73cd5c7012f8?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88814556c40720dd61f2a3cea53ca2a499a815fee578861926cf73cd5c7012f8?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/88814556c40720dd61f2a3cea53ca2a499a815fee578861926cf73cd5c7012f8?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/88814556c40720dd61f2a3cea53ca2a499a815fee578861926cf73cd5c7012f8?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                  className="aspect-[0.56] object-contain object-center w-full shadow-lg overflow-hidden grow mt-12 max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch max-md:mt-6">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/baaaf24cc850d1d8350293c4b10244fd26ff22c01de0d07877352a8d97c045d9?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/baaaf24cc850d1d8350293c4b10244fd26ff22c01de0d07877352a8d97c045d9?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/baaaf24cc850d1d8350293c4b10244fd26ff22c01de0d07877352a8d97c045d9?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/baaaf24cc850d1d8350293c4b10244fd26ff22c01de0d07877352a8d97c045d9?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/baaaf24cc850d1d8350293c4b10244fd26ff22c01de0d07877352a8d97c045d9?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/baaaf24cc850d1d8350293c4b10244fd26ff22c01de0d07877352a8d97c045d9?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/baaaf24cc850d1d8350293c4b10244fd26ff22c01de0d07877352a8d97c045d9?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/baaaf24cc850d1d8350293c4b10244fd26ff22c01de0d07877352a8d97c045d9?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="aspect-[0.99] object-contain object-center w-full shadow-lg overflow-hidden"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/00dfd2ce-3b0d-4017-a973-e3e507c36589?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/00dfd2ce-3b0d-4017-a973-e3e507c36589?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00dfd2ce-3b0d-4017-a973-e3e507c36589?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/00dfd2ce-3b0d-4017-a973-e3e507c36589?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/00dfd2ce-3b0d-4017-a973-e3e507c36589?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00dfd2ce-3b0d-4017-a973-e3e507c36589?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/00dfd2ce-3b0d-4017-a973-e3e507c36589?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/00dfd2ce-3b0d-4017-a973-e3e507c36589?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="aspect-[1.27] object-contain object-center w-full shadow-lg overflow-hidden mt-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </span>
        <span className="self-center flex  mx-auto w-full max-w-[1120px] flex-col mt-2 px-5 max-md:max-w-full max-md:mt-2">
          <div className="self-center flex w-[50px] shrink-0 h-[50px] flex-col rounded-[50%]" />
          <div className="text-blue-600 text-xl font-medium tracking-[2.91px] self-stretch mt-24 max-md:max-w-full max-md:mt-10">
            AREAS ACROSS THE TOWN
          </div>
          <div className="text-zinc-800 text-4xl font-semibold leading-10 self-stretch mt-7 max-md:max-w-full">
            Neighborhood Properties
          </div>
          <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                <div className="flex-col shadow-lg overflow-hidden relative flex aspect-[0.9375] grow pl-10 pr-20 pt-12 pb-6 items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e38045ab67d1f697cd92b247a8aa913a1bed76ade1c5a406a8747fdfffdcf0a6?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38045ab67d1f697cd92b247a8aa913a1bed76ade1c5a406a8747fdfffdcf0a6?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38045ab67d1f697cd92b247a8aa913a1bed76ade1c5a406a8747fdfffdcf0a6?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38045ab67d1f697cd92b247a8aa913a1bed76ade1c5a406a8747fdfffdcf0a6?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38045ab67d1f697cd92b247a8aa913a1bed76ade1c5a406a8747fdfffdcf0a6?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38045ab67d1f697cd92b247a8aa913a1bed76ade1c5a406a8747fdfffdcf0a6?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38045ab67d1f697cd92b247a8aa913a1bed76ade1c5a406a8747fdfffdcf0a6?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e38045ab67d1f697cd92b247a8aa913a1bed76ade1c5a406a8747fdfffdcf0a6?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative text-white text-6xl font-semibold leading-[64.41px] mix-blend-hard-light mt-40 max-md:text-4xl max-md:mt-10">
                    216
                  </div>
                  <div className="relative text-white text-xl font-medium whitespace-nowrap mt-5">
                    New York City, NY
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col shadow-lg overflow-hidden relative flex aspect-[0.9375] grow pl-10 pr-20 pt-12 pb-7 items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/379faacae28c848d66a53259931501a457d7105101399181bc1c33002e5441f3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/379faacae28c848d66a53259931501a457d7105101399181bc1c33002e5441f3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/379faacae28c848d66a53259931501a457d7105101399181bc1c33002e5441f3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/379faacae28c848d66a53259931501a457d7105101399181bc1c33002e5441f3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/379faacae28c848d66a53259931501a457d7105101399181bc1c33002e5441f3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/379faacae28c848d66a53259931501a457d7105101399181bc1c33002e5441f3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/379faacae28c848d66a53259931501a457d7105101399181bc1c33002e5441f3?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/379faacae28c848d66a53259931501a457d7105101399181bc1c33002e5441f3?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative text-white text-6xl font-semibold leading-[64.41px] mix-blend-hard-light mt-40 max-md:text-4xl max-md:mt-10">
                    141
                  </div>
                  <div className="relative text-white text-xl font-medium whitespace-nowrap mt-5">
                    Houston, TX
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col shadow-lg overflow-hidden relative flex min-h-[320px] grow pl-12 pr-20 pt-12 pb-6 items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6bc98aadf890a1ec7cfc7a520e00e5c70e5a3fc22c6d0b448bc4b9bce2061554?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bc98aadf890a1ec7cfc7a520e00e5c70e5a3fc22c6d0b448bc4b9bce2061554?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bc98aadf890a1ec7cfc7a520e00e5c70e5a3fc22c6d0b448bc4b9bce2061554?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bc98aadf890a1ec7cfc7a520e00e5c70e5a3fc22c6d0b448bc4b9bce2061554?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bc98aadf890a1ec7cfc7a520e00e5c70e5a3fc22c6d0b448bc4b9bce2061554?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bc98aadf890a1ec7cfc7a520e00e5c70e5a3fc22c6d0b448bc4b9bce2061554?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bc98aadf890a1ec7cfc7a520e00e5c70e5a3fc22c6d0b448bc4b9bce2061554?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bc98aadf890a1ec7cfc7a520e00e5c70e5a3fc22c6d0b448bc4b9bce2061554?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative text-white text-6xl font-semibold leading-[64.41px] mix-blend-hard-light mt-40 max-md:text-4xl max-md:mt-10">
                    212
                  </div>
                  <div className="relative text-white text-xl font-medium whitespace-nowrap mt-5">
                    San Diego, CA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                <div className="flex-col shadow-lg overflow-hidden relative flex aspect-[1.2875] grow pl-10 pr-20 pt-12 pb-6 items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e2433282ece3a2ac93e0550380d164be191d607e91a6282dd6ede420a27a2bc?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2433282ece3a2ac93e0550380d164be191d607e91a6282dd6ede420a27a2bc?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2433282ece3a2ac93e0550380d164be191d607e91a6282dd6ede420a27a2bc?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2433282ece3a2ac93e0550380d164be191d607e91a6282dd6ede420a27a2bc?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2433282ece3a2ac93e0550380d164be191d607e91a6282dd6ede420a27a2bc?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2433282ece3a2ac93e0550380d164be191d607e91a6282dd6ede420a27a2bc?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2433282ece3a2ac93e0550380d164be191d607e91a6282dd6ede420a27a2bc?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e2433282ece3a2ac93e0550380d164be191d607e91a6282dd6ede420a27a2bc?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative text-white text-6xl font-semibold leading-[64.41px] mix-blend-hard-light mt-40 max-md:text-4xl max-md:mt-10">
                    183
                  </div>
                  <div className="relative text-white text-xl font-medium whitespace-nowrap mt-5">
                    Philadelphia, PA
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col shadow-lg overflow-hidden relative flex min-h-[320px] grow pl-10 pr-20 pt-12 pb-7 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/08acc5a91d2e9af38f1af6a6a4b117bbfb74c23f9774303f08c00e9d7e915f1d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/08acc5a91d2e9af38f1af6a6a4b117bbfb74c23f9774303f08c00e9d7e915f1d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08acc5a91d2e9af38f1af6a6a4b117bbfb74c23f9774303f08c00e9d7e915f1d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/08acc5a91d2e9af38f1af6a6a4b117bbfb74c23f9774303f08c00e9d7e915f1d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/08acc5a91d2e9af38f1af6a6a4b117bbfb74c23f9774303f08c00e9d7e915f1d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08acc5a91d2e9af38f1af6a6a4b117bbfb74c23f9774303f08c00e9d7e915f1d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/08acc5a91d2e9af38f1af6a6a4b117bbfb74c23f9774303f08c00e9d7e915f1d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/08acc5a91d2e9af38f1af6a6a4b117bbfb74c23f9774303f08c00e9d7e915f1d?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative text-white text-6xl font-semibold leading-[64.41px] mix-blend-hard-light mt-40 max-md:text-4xl max-md:mt-10">
                    112
                  </div>
                  <div className="relative text-white text-xl font-medium whitespace-nowrap mt-5">
                    San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-blue-600 text-center text-xl font-medium tracking-[2.91px] uppercase self-center mt-20 max-md:mt-10">
            Introduce yourself to{" "}
          </div>
          <div className="text-zinc-800 text-center text-4xl font-semibold leading-10 self-center mt-7">
            Our Team of Experts
          </div>
          <div className="self-center w-full max-w-[1011px] mt-24 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <span className="flex flex-col items-center max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5f822f1a18c9aadf204359ad5ed5be0534e41312a17cfc310f3aa9240883d20d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f822f1a18c9aadf204359ad5ed5be0534e41312a17cfc310f3aa9240883d20d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f822f1a18c9aadf204359ad5ed5be0534e41312a17cfc310f3aa9240883d20d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f822f1a18c9aadf204359ad5ed5be0534e41312a17cfc310f3aa9240883d20d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f822f1a18c9aadf204359ad5ed5be0534e41312a17cfc310f3aa9240883d20d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f822f1a18c9aadf204359ad5ed5be0534e41312a17cfc310f3aa9240883d20d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f822f1a18c9aadf204359ad5ed5be0534e41312a17cfc310f3aa9240883d20d?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f822f1a18c9aadf204359ad5ed5be0534e41312a17cfc310f3aa9240883d20d?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="aspect-[0.71] object-contain object-center w-[200px] overflow-hidden"
                  />
                  <div className="text-neutral-950 text-center text-3xl font-semibold whitespace-nowrap mt-7">
                    Michel j.
                  </div>
                  <div className="text-blue-600 text-center text-base font-medium whitespace-nowrap mt-7">
                    CEO & Founder
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <span className="flex grow flex-col items-stretch max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e1f69f4a68e6190c3373be345beb2c8a063b76de2996a70c9b46f5f4a5306595?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f69f4a68e6190c3373be345beb2c8a063b76de2996a70c9b46f5f4a5306595?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f69f4a68e6190c3373be345beb2c8a063b76de2996a70c9b46f5f4a5306595?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f69f4a68e6190c3373be345beb2c8a063b76de2996a70c9b46f5f4a5306595?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f69f4a68e6190c3373be345beb2c8a063b76de2996a70c9b46f5f4a5306595?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f69f4a68e6190c3373be345beb2c8a063b76de2996a70c9b46f5f4a5306595?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f69f4a68e6190c3373be345beb2c8a063b76de2996a70c9b46f5f4a5306595?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f69f4a68e6190c3373be345beb2c8a063b76de2996a70c9b46f5f4a5306595?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="aspect-[0.76] object-contain object-center w-[212px] overflow-hidden self-center"
                  />
                  <div className="text-neutral-950 text-center text-3xl font-semibold whitespace-nowrap mt-7">
                    David Victor{" "}
                  </div>
                  <div className="text-blue-600 text-center text-base font-medium self-center whitespace-nowrap mt-6">
                    Software Engineer
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <span className="flex grow flex-col items-stretch max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ff466bc0b30bfe7159dc1d2bd124a7e8a673157fd60705f2d27c6d36a4c699?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ff466bc0b30bfe7159dc1d2bd124a7e8a673157fd60705f2d27c6d36a4c699?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ff466bc0b30bfe7159dc1d2bd124a7e8a673157fd60705f2d27c6d36a4c699?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ff466bc0b30bfe7159dc1d2bd124a7e8a673157fd60705f2d27c6d36a4c699?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ff466bc0b30bfe7159dc1d2bd124a7e8a673157fd60705f2d27c6d36a4c699?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ff466bc0b30bfe7159dc1d2bd124a7e8a673157fd60705f2d27c6d36a4c699?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ff466bc0b30bfe7159dc1d2bd124a7e8a673157fd60705f2d27c6d36a4c699?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0ff466bc0b30bfe7159dc1d2bd124a7e8a673157fd60705f2d27c6d36a4c699?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="aspect-[0.71] object-contain object-center w-[200px] overflow-hidden self-center"
                  />
                  <div className="text-neutral-950 text-center text-3xl font-semibold whitespace-nowrap mt-7">
                    Justin S. Meza
                  </div>
                  <div className="text-blue-600 text-center text-base font-medium self-center whitespace-nowrap mt-7">
                    Listing Agent
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <span className="flex grow flex-col items-stretch max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7fbeca5fadd49a1fb55cef378fcbf7317238ef16ac697ca2e230de812c6c22ee?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fbeca5fadd49a1fb55cef378fcbf7317238ef16ac697ca2e230de812c6c22ee?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fbeca5fadd49a1fb55cef378fcbf7317238ef16ac697ca2e230de812c6c22ee?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fbeca5fadd49a1fb55cef378fcbf7317238ef16ac697ca2e230de812c6c22ee?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fbeca5fadd49a1fb55cef378fcbf7317238ef16ac697ca2e230de812c6c22ee?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fbeca5fadd49a1fb55cef378fcbf7317238ef16ac697ca2e230de812c6c22ee?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fbeca5fadd49a1fb55cef378fcbf7317238ef16ac697ca2e230de812c6c22ee?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fbeca5fadd49a1fb55cef378fcbf7317238ef16ac697ca2e230de812c6c22ee?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="aspect-[0.72] object-contain object-center w-[202px] overflow-hidden self-center"
                  />
                  <div className="text-neutral-950 text-center text-3xl font-semibold whitespace-nowrap mt-7">
                    Susan T. Smith
                  </div>
                  <div className="text-blue-600 text-center text-base font-medium self-center whitespace-nowrap mt-7">
                    Buyer&apos;s Agent
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>{" "}
        <div className="self-center  mx-auto flex w-full max-w-[1200px] flex-col items-center mt-56 max-md:max-w-full max-md:mt-10">
          <div className="w-full max-w-[1090px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                <span className="flex flex-col px-5 max-md:mt-10">
                  <div className="text-blue-600 text-xl font-medium tracking-[2.91px] self-stretch">
                    TESTIMONIALS
                  </div>{" "}
                  <div className="text-zinc-800 text-4xl font-semibold leading-10 self-stretch mt-7">
                    Look What Our Customers Say!
                  </div>{" "}
                  <div className="text-zinc-800 text-base leading-7 self-stretch mt-5">
                    Experience the HomeNow difference! Whether you&apos;re
                    buying, selling, or investing, join our satisfied customers.
                    <Link to={"/contact"} className="text-blue-600 font-bold ">
                      {" "}
                      Contact us
                    </Link>{" "}
                    today to get started on your real estate journey.
                  </div>{" "}
                  <div className="flex w-[150px] max-w-full items-stretch justify-between gap-5 mt-14 self-start max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c4a78661a417788e09706ca8e4d411ca81068f1997f4ccbf5f9f0b8b81de518?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6033dce0249dca724a3a71610e423668fb19b030d4e702ccb7e1cae0360ffdc?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                </span>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                <span className="shadow-lg bg-white flex grow flex-col w-full px-12 py-8 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f468f9db308c9b0ffd156c9cb486486d2f8242b9a6d6183b59aa64787d47af?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                    className="aspect-[1.62] object-contain object-center w-[60px] fill-yellow-400 fill-opacity-40 overflow-hidden max-w-full ml-2.5 self-start"
                  />{" "}
                  <div className="text-zinc-800 text-xl font-medium self-stretch w-full mt-5 mx-2.5">
                    As a commercial real estate investor, I&#39;ve worked with
                    various agencies. HomeNow stands out for their in-depth
                    market knowledge, strategic insights, and commitment to
                    delivering value. Exceptional service!
                  </div>
                  <div className="bg-neutral-300 self-stretch shrink-0 h-px mt-9" />
                  <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-5">
                    <span className="flex items-stretch justify-between gap-4">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e2924d365dd074fcc21d7ed3b158677e5ae0cbdf82b52d016fccce71bc3a3cb?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e2924d365dd074fcc21d7ed3b158677e5ae0cbdf82b52d016fccce71bc3a3cb?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e2924d365dd074fcc21d7ed3b158677e5ae0cbdf82b52d016fccce71bc3a3cb?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e2924d365dd074fcc21d7ed3b158677e5ae0cbdf82b52d016fccce71bc3a3cb?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e2924d365dd074fcc21d7ed3b158677e5ae0cbdf82b52d016fccce71bc3a3cb?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e2924d365dd074fcc21d7ed3b158677e5ae0cbdf82b52d016fccce71bc3a3cb?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e2924d365dd074fcc21d7ed3b158677e5ae0cbdf82b52d016fccce71bc3a3cb?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e2924d365dd074fcc21d7ed3b158677e5ae0cbdf82b52d016fccce71bc3a3cb?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                        className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                      />
                      <div className="text-zinc-800 text-xl font-medium self-center grow whitespace-nowrap my-auto">
                        Olaoye samson
                      </div>
                    </span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/65809bb186ce38ac78b00e0a5dc7956facb029419c68aacd58e1619316e4a30e?apiKey=fe29e682ab624929963eadc91ca4ec19&"
                      className="aspect-[6.62] object-contain object-center w-[86px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* top */}

      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}
    </div>
  );
}
