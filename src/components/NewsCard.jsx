import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    tags,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between  px-5 py-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold text-base-content">{author.name}</h2>

            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-lg">
          <button className="hover:text-primary transition">
            <FaBookmark />
          </button>

          <button className="hover:text-primary transition">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Image */}
      <figure className="px-5 pt-5">
        <img
          src={image_url}
          alt={title}
          className="rounded-2xl h-60 w-full object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body pt-4">
        <h2 className="card-title text-2xl leading-snug font-bold">{title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Details */}
        <p className="text-gray-600 leading-7">{details.slice(0, 180)}...</p>

        <button className="text-primary font-semibold w-fit hover:underline">
          Read More
        </button>

        {/* Trending / Pick */}
        <div className="flex gap-2 mt-2">
          {others.is_trending && (
            <div className="badge badge-error text-white">Trending</div>
          )}

          {others.is_today_pick && (
            <div className="badge badge-success text-white">Today Pick</div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4 mt-2">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400 gap-1">
              {[...Array(rating.number)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <span className="font-medium text-gray-600">{rating.number}.0</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
