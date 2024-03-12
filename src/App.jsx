import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  // Handle Book Marks
  const handleBookMarks = (blog) => {
    console.log("Bookmarks Soon");
  };
  return (
    <>
      <Header />
      <main className="container px-2 md:px-0 mx-auto my-8 md:flex justify-between">
        <Blogs handleBookMarks={handleBookMarks} />
        <Bookmarks />
      </main>
    </>
  );
}

export default App;
