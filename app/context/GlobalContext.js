"use client";
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(9);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]); // Initially, filteredData is an empty array

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/data");
        const data = await response.json();
        setData(data.articles);
        setFilteredData(data.articles); // Initialize filteredData with the entire data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterData = (searchQuery) => {

    // Apply filtering logic based on the searchQuery
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredData(filteredData);
    setCurrentPage(1); // Reset current page when applying new filters
  };
  function prePage() {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  function nextPage() {
    if (currentPage !== 8) {
      setCurrentPage(currentPage === 9 ? currentPage - 1 : currentPage + 1)
    }
  }



  return (
    <GlobalContext.Provider
      value={{
        setData,
        currentPage,
        setCurrentPage,
        pageSize,
        loading,
        setLoading,
        handlePageChange,
        searchQuery,
        setSearchQuery,
        filteredData,
        handleFilterData,
        prePage,
        nextPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
