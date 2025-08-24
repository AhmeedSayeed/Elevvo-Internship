import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Posts from './components/Posts.jsx';
import Loading from './components/Loading.jsx';
import { POSTS } from './data/posts.js';
import './App.css';
import { useState, useRef, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posts, setPosts] = useState(POSTS);
  const [filteredPosts, setFilteredPosts] = useState(POSTS);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const maxPages = Math.ceil(filteredPosts.length / 9) - 1;
  const searchRef = useRef();

    function handleNextPage() {
        setCurrentPage((prevPage) => prevPage < maxPages ? prevPage + 1 : prevPage);
    }

    function handlePrevPage() {
        setCurrentPage((prevPage) => prevPage == 0 ? prevPage : prevPage - 1);
    }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      handleFilter();
      setLoading(false);
    }, 300);
  },
  [selectedCategory, search]);

  function handleFilter() {
    const filteredPosts = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(search.toLowerCase()) &&
        (post.type === selectedCategory || selectedCategory === ""));
    });
    setFilteredPosts(filteredPosts);
    setCurrentPage(0);
  }

  function handleSearch() {
    setSearch(searchRef.current.value);
  }

  function handleSelectCategory(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <Header />
      <Search searchRef={searchRef} onSearch={handleSearch} onSelectCategory={handleSelectCategory} />
      {!loading && <Posts posts={filteredPosts} currentPage={currentPage} maxPages={maxPages} goNextPage={handleNextPage} goPrevPage={handlePrevPage} />}
      {loading && <Loading />}
    </>
  )
}

export default App
