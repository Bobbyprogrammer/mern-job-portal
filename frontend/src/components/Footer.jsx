import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold text-orange-600">
                Jobify
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <Link to={"/"}>
                <li>
                  <a className="hover:underline me-4 md:me-6">Home</a>
                </li>
              </Link>
              <Link to={"/jobs"}>
                <li>
                  <a className="hover:underline me-4 md:me-6">jobs</a>
                </li>
              </Link>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Browsing
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025
            <a href="#" className="hover:underline">
              Code Bless Me
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
