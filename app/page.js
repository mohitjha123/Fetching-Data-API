"use client";
// Home
import { useContext } from "react";
import NavBar from "./components/NavBar";
import Data from "./components/Data";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import { paginate } from "../utils/paginate";
import PropagateLoader from "react-spinners/PropagateLoader";
import { GlobalContext } from "./context/GlobalContext";

export default function Home() {
  const {
    currentPage,
    pageSize,
    loading,
    handlePageChange,
    filteredData
  } = useContext(GlobalContext);


  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* DATA */}
      <div className="flex justify-center">
        {loading ? (
          <PropagateLoader
            className="mt-40"
            color={"#1161f5"}
            loading={loading}
            size={20}
          />
        ) : (
          <Data paginatePosts={paginate(filteredData, currentPage, pageSize)} />
        )}
      </div>

      {/* Pagination */}
      <Pagination
        items={filteredData.length}   // Calculate paginated data based on the filteredData
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
