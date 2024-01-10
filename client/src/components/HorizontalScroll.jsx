import { categories } from "../utils/categories";

const HorizontalScroll = () => {
  return (
    <div className="mt-1 text-white overflow-x-auto whitespace-nowrap sm:hidden">
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
