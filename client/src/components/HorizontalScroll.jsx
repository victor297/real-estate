import { categories } from "../utils/categories";

const HorizontalScroll = () => {
  return (
    <div
      style={{ overflowX: "auto", overflowY: "hidden" }}
      className="mt-1 text-white whitespace-nowrap sm:hidden"
    >
      <div className="flex items-center">
        {categories.map((item) => (
          <span key={item.label} className="px-3">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
