import { IoMenu, IoClose } from "react-icons/io5";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
export default function Header() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 text-[#16284B]">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <a
          className="sm:order-1 flex-none text-xl leading-6 font-semibold"
          href="#"
        >
          Mountain View
          <br />
          Chamber of Commerce
        </a>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-alignment"
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
          >
            <IoMenu className="hs-collapse-open:hidden flex-shrink-0 size-4" />
            <IoClose className="hs-collapse-open:block hidden flex-shrink-0 size-4" />
          </button>
          <div className="flex gap-x-4 items-center">
            <FaFacebook className="text-2xl" />
            <FaLinkedin className="text-2xl" />
          </div>
        </div>
        <div
          id="navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-blue-500"
              href="#"
              aria-current="page"
            >
              Landing
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 d"
              href="#"
            >
              Account
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 d"
              href="#"
            >
              Work
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 d"
              href="#"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
