"use client";
import { footerSvg, Links } from "@/constants/details";
import { RootState } from "@/store/store";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const category = useSelector((state: RootState) => state.product.category);

  return (
    <footer className="border-t">
      <MaxWidthWrapper>
        <div className="mx-auto p-2 py-16">
          <div className="grid w-full md:grid-cols-1 md:place-content-center">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {/* <div className="grid grid-cols-1 sm:grid-cols-2"> */}
              <nav>
                <h1 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                  Categories
                </h1>
                <ul className="text-xs text-gray-500 dark:text-gray-400">
                  {category?.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      key={item._id}
                      className="mb-4"
                    >
                      <Link
                        to={item._id ? `/shop/${item.name}` : item.name}
                        className="hover:underline"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <nav>
                <h1 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                  Company
                </h1>
                <ul className="text-xs text-gray-500 dark:text-gray-400">
                  {Links.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      key={item.id}
                      className="mb-4"
                    >
                      <Link to={item.to} className="hover:underline">
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              {/* </div> */}
              <div>
                <p className="mb-6 mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Stay connected
                </p>
                <ul className="text-xs text-gray-500 dark:text-gray-400">
                  {footerSvg.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      key={item.id}
                    >
                      <Link
                        to="#"
                        className="mt-2 flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        <SocialIcon
                          d={item.d}
                          className="h-4 w-4 border-none"
                        />
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <p className="mb-4 mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                  App Available on
                </p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-wrap items-center gap-1"
                >
                  <a href="#" className="max-w-md">
                    <img
                      src="/play_store.png"
                      alt="Playstore Button"
                      className="h-10"
                    />
                  </a>
                  <a href="#" className="max-w-md">
                    <img
                      src="/app_store.png"
                      alt="Playstore Button"
                      className="h-10"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          <hr className="my-2 border-gray-200 dark:border-gray-700 sm:mx-auto" />
          <span className="block text-center text-xs text-gray-500 dark:text-gray-400">
            © 2024. All Rights Reserved.
          </span>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
