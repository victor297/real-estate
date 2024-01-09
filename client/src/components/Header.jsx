import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-white flex flex-col items-stretch pb-9">
        <header className="flex-col overflow-hidden relative flex min-h-[716px] w-full pt-4 px-20 max-md:max-w-full max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f8964d80db4edc3be2a8edad6fb754ccc5677ae02b806dd8887e6d833b71e79?apiKey=fe29e682ab624929963eadc91ca4ec19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f8964d80db4edc3be2a8edad6fb754ccc5677ae02b806dd8887e6d833b71e79?apiKey=fe29e682ab624929963eadc91ca4ec19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f8964d80db4edc3be2a8edad6fb754ccc5677ae02b806dd8887e6d833b71e79?apiKey=fe29e682ab624929963eadc91ca4ec19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f8964d80db4edc3be2a8edad6fb754ccc5677ae02b806dd8887e6d833b71e79?apiKey=fe29e682ab624929963eadc91ca4ec19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f8964d80db4edc3be2a8edad6fb754ccc5677ae02b806dd8887e6d833b71e79?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f8964d80db4edc3be2a8edad6fb754ccc5677ae02b806dd8887e6d833b71e79?apiKey=fe29e682ab624929963eadc91ca4ec19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f8964d80db4edc3be2a8edad6fb754ccc5677ae02b806dd8887e6d833b71e79?apiKey=fe29e682ab624929963eadc91ca4ec19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f8964d80db4edc3be2a8edad6fb754ccc5677ae02b806dd8887e6d833b71e79?apiKey=fe29e682ab624929963eadc91ca4ec19&"
            className="absolute h-full w-full object-cover sm:object-fill object-center inset-0"
          />

          <header className="relative text-white text-5xl font-bold self-stretch mt-40 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            {" "}
            Find your place <br /> of dream{" "}
          </header>
          <div className="relative text-white text-base self-stretch mt-8 max-md:max-w-full">
            {" "}
            We are glad to have you around. Feel <br /> free to browse our
            website.{" "}
          </div>
          <Link to={"/search"}>
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
          </Link>

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
