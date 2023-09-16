import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  console.log(bookmarks.length);
  return (
    <div className="md:w-1/3 bg-gray-100 p-7 rounded-lg">
      <div>
        <h3>Spend time on reading: {readingTime} min </h3>
      </div>
      <div >
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
