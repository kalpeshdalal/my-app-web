export const Footer = (params) => {
  return (
    <footer className=" rounded-lg  ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex-col">

        <ul className="flex flex-wrap items-center text-[10px] sm:text-base  ">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-3">© 2023 <a href="/" className="hover:underline"><span className="text-[#48f7e8] ml-1">K </span><span className="text-gray-200">D™</span></a>
          </span>
          <div className="text-gray-500 ">All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};
