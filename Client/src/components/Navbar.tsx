import useMobile from "@/hooks/useMoblie";
import { cn } from "@/lib/utils";
import { toggleSheetOpen } from "@/store/orderSlice";
import { RootState } from "@/store/store";
import { AlignRight, Heart, LayoutGrid, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartSheet from "./CartSheet";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";
import { Navmenu } from "./Navmenu";
import SearchInput from "./SearchInput";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";

export default function Navbar() {
  const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user.currentUser);
  const cartList = useSelector(
    (state: RootState) => state.product?.cartList || [],
  );
  const wishlist = useSelector(
    (state: RootState) => state.product?.wishlist || [],
  );
  const [openItem, setOpenItem] = React.useState<string | undefined>("");

  const category = useSelector((state: RootState) => state.product.category);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine scroll direction and visibility
      if (scrollY > lastScrollY && scrollY > 100) {
        // Scrolling down
        setIsHidden(true);
      } else if (scrollY < lastScrollY) {
        // Scrolling up
        setIsHidden(false);
      }
      // Add background and shadow when scrolled
      setIsScrolled(scrollY > 50);

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const [isMobile] = useMobile();
  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full bg-background shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition-all duration-300 ease-in-out",
      )}
    >
      {/* top header */}
      {!isScrolled && (
        <div className="relative z-[50] w-full justify-center bg-green-50 p-2 text-gray-700 transition-all duration-300 md:justify-between">
          <MaxWidthWrapper className="flex items-center justify-center text-xs sm:justify-between">
            <p>Super Value Deals - Save more with coupons</p>
            <p className="hidden sm:block">
              Need help? Call Us: (+91) - 9687453284
            </p>
          </MaxWidthWrapper>
        </div>
      )}

      {/* middle header */}
      <MaxWidthWrapper
        className={cn(
          "relative z-[1000] flex items-center gap-16 pt-2 opacity-100 transition-all duration-300 lg:h-24",
          isScrolled
            ? "h-0 -translate-y-full pt-0 opacity-0 lg:h-0"
            : "h-20 translate-y-0",
        )}
      >
        <div className="flex h-full w-full flex-row items-center justify-evenly gap-x-10 gap-y-2">
          <div className="grid w-full grid-flow-col">
            <Link to="/" className="col-span-1">
              <img
                src="/logo.png"
                className="mt-1 w-48 lg:w-48"
                alt="Globo-green logo"
              />
            </Link>
            <div className="col-span-6 hidden items-center gap-3 lg:flex">
              <SearchInput />
            </div>

            <div className="col-span-8 flex items-center justify-end gap-2 lg:mr-2 lg:gap-2">
              <Link
                to="/profile-page/wishlist"
                className="relative flex items-center gap-2.5 rounded-2xl font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-sm lg:p-2"
              >
                <span className="relative">
                  <Heart className="h-9 w-9 rounded-full bg-primary/20 p-2" />
                  {wishlist.length > 0 && (
                    <Badge
                      className="absolute -right-2 -top-1 p-0.5 px-1.5"
                      variant="secondary"
                    >
                      {wishlist.length}
                    </Badge>
                  )}
                </span>
                <span className="text-md hidden lg:flex"> Wishlist</span>
              </Link>

              <CartSheet
                button={
                  <button
                    onClick={() => dispatch(toggleSheetOpen(true))}
                    className="relative flex items-center gap-2.5 rounded-2xl font-semibold text-primary transition-colors duration-300 hover:bg-primary/10 hover:shadow-sm lg:p-2"
                  >
                    <span className="relative">
                      <ShoppingCartIcon className="borer h-9 w-9 rounded-full bg-primary/20 p-2" />
                      {cartList.length > 0 && (
                        <Badge
                          className="absolute -right-2 -top-1 p-0.5 px-1.5"
                          variant="secondary"
                        >
                          {cartList.length}
                        </Badge>
                      )}
                    </span>
                    <span className="text-md hidden lg:flex"> Cart</span>
                  </button>
                }
              />

              <MobileNav button={<AlignRight className="ml-2" />} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* search */}
      {isMobile && (
        <MaxWidthWrapper className="flex h-16 items-center bg-secondary/10 lg:hidden">
          <SearchInput />
        </MaxWidthWrapper>
      )}
      {/* bottom header */}
      <div
        className={cn(
          "relative z-50 hidden h-16 gap-2 transition-all duration-200 lg:flex",
          isScrolled ? "bg-primary" : "bg-primary",
          isHidden ? "h-0 -translate-y-full opacity-0" : "translate-y-0",
        )}
      >
        <MaxWidthWrapper className="flex items-center justify-between">
          <div className="flex w-full">
            <Accordion
              value={openItem || ""}
              onValueChange={(value) => setOpenItem(value)}
              type="single"
              className="relative w-[250px]"
              collapsible
            >
              <AccordionItem className="!border-none" value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  <Button
                    className="flex w-full justify-between rounded-2xl bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-secondary/50 hover:shadow-md"
                    variant="default"
                  >
                    All Categories
                    <LayoutGrid />
                  </Button>
                </AccordionTrigger>
                <AccordionContent className="absolute top-full -mt-2 flex w-full flex-col rounded-2xl border bg-white p-2 text-foreground">
                  {category
                    .slice() // Avoid mutating original state
                    .sort((a, b) => b._id.localeCompare(a.name))
                    ?.map((_item, _index) => (
                      <Link
                        key={_index}
                        to={`/shop/${encodeURIComponent(_item.name)}`}
                        onClick={() => setOpenItem("")}
                        className={cn(
                          "!justify-start !rounded-2xl",
                          buttonVariants({ variant: "ghost" }),
                        )}
                      >
                        {_item.name}
                      </Link>
                    ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Navmenu />
          </div>
        </MaxWidthWrapper>
      </div>
    </header>
  );
}
