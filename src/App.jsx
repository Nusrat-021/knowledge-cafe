import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (time) => {
    console.log(time);
    const newReadingTime = time + readingTime;
    console.log(newReadingTime);
    setReadingTime(newReadingTime);
  }

  return (
    <div className="max-w-7xl w-11/12 mx-auto mt-14">
      <Header></Header>
      <div className="md:flex gap-4">
        <Blogs
         handleAddToBookmark={handleAddToBookmark}
         handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
