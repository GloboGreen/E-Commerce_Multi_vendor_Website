import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";

export default function ProductCard({
  className,
  _id,
  name,
  image,
  price,
  discount,
  key,
  salePrice,
}: ProductCartProps) {
  return (
    <Link
      key={key}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      to={`/product/${encodeURIComponent(name)}`}
      className={cn(
        "group relative rounded-lg border hover:border-primary sm:hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: key * 0.1 }}
        className="w-full rounded-lg border-none p-0 pb-4 shadow-none"
      >
        <div className="relative flex h-[26vh] items-center justify-center rounded-lg bg-gray-50 p-2">
          <img
            src={image}
            className="mx-auto w-36 object-contain duration-300 group-hover:scale-105"
          />
          {discount && (
            <p className="absolute bottom-3 left-3 rounded-md bg-primary/10 p-1 text-xs font-semibold text-primary">
              {discount}OFF
            </p>
          )}
        </div>
        <div className="mt-2 flex w-full items-start justify-between px-2">
          <div className="flex w-full flex-col gap-1">
            <p className="text-md max-w-44 truncate font-semibold">{name}</p>
            <div className="flex w-full flex-col gap-2">
              <p className="flex w-full flex-col font-bold">
                ₹{price}
                <del className="text-xs text-secondary/50 dark:text-secondary-foreground/70">
                  ₹{salePrice}
                </del>
              </p>

              <AddToCartButton id={_id} />
            </div>
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-2 rounded-lg bg-white p-2 shadow-md group-hover:opacity-100 sm:opacity-0">
            <AddToWishlistButton id={_id} />
            <Eye className="h-4 w-4 text-primary" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
