import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange, nextPage, prePage }) => {
    const pageCount = items / pageSize;
    if (Math.ceil(pageCount) === 1) return null;
    const pages = _.range(currentPage + 3);
    return (
        <>
            <div className="grid m-9 place-items-center">
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                        <li>
                            <a onClick={prePage} className="page-link relative block rounded-full bg-slate-500 px-3 py-1.5 transition duration-300 ease-in-out hover:scale-110 text-sm text-neutral-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
                                Previous
                            </a>
                        </li>
                        {pages.map((page) => (
                            <li
                                key={page}
                                className={
                                    page === currentPage ? "page-item active" : "page-item"
                                }
                            >
                                <a
                                    style={{ cursor: "pointer" }}
                                    onClick={() => onPageChange(page)}
                                    className={
                                        page == currentPage
                                            ? "page-link flex items-center transition duration-300 ease-in-out hover:scale-110 justify-center px-4 rounded-full ml-2 h-10 leading-tight text-white bg-blue-500 hover:bg-blue-700 hover:text-white dark:bg-blue-800 dark:border-blue-700 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white"
                                            : "page-link flex items-center transition duration-300 ease-in-out hover:scale-110 justify-center px-4 rounded-full ml-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    }
                                >
                                    {page + 1 === 13 ? page - 1 : page + 1}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a onClick={nextPage}
                                className="page-link relative block rounded-full ml-3 bg-slate-500 px-3 py-1.5 text-sm text-neutral-600 transition duration-300 ease-in-out hover:scale-110 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Pagination;

{
    /* <nav aria-label="Page navigation example">
    <ul class="list-style-none flex">
      <li>
        <a
          class="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
          >Previous</a
        >
      </li>
      <li>
        <a
          class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!"
          >1</a
        >
      </li>
      <li>
        <a
          class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          href="#!"
          >Next</a
        >
      </li>
    </ul>
  </nav>  */
}
