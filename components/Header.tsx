import { IoMenu, IoClose } from "react-icons/io5";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { GiMountaintop } from "react-icons/gi";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-lg flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 text-[#16284B] sticky top-0 z-50">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <div className="flex gap-4 items-center">
          <GiMountaintop className="text-4xl" />
          <a
            className="sm:order-1 flex-none text-xl leading-6 font-semibold"
            href="/"
          >
            Mountain View
            <br />
            Chamber of Commerce
          </a>
        </div>

        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border-transparent border-gray-200 text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-alignment"
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
          >
            <IoMenu className="hs-collapse-open:hidden flex-shrink-0 size-7" />
            <IoClose className="hs-collapse-open:block hidden flex-shrink-0 size-7" />
          </button>
          <div className="md:flex gap-x-4 items-center hidden">
            <Link href="#">
              <FaFacebook className="text-2xl" />
            </Link>
            <Link href="#">
              <FaLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>
        <div
          id="navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-[#16284B]"
              href="#"
              aria-current="page"
            >
              Discovery
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 d"
              href="#"
            >
              Directory
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 d"
              href="#"
            >
              Join
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 d"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
