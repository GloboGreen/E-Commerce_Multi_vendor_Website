import {
  Heart,
  List,
  ListTree,
  MapPin,
  ShoppingBag,
  ShoppingCartIcon,
  User,
  UserCheck,
  Users,
} from "lucide-react";

export const profilePageLinks: LinksProps[] = [
  {
    name: "My Profile",
    to: "/profile-page",
    logo: <User className="h-5 w-5" />,
  },
  {
    name: "Address",
    to: "/profile-page/address-details",
    logo: <MapPin className="h-5 w-5" />,
  },
  {
    name: "Orders",
    to: "/profile-page/order-details",
    logo: <ShoppingBag className="h-5 w-5" />,
  },
  {
    name: "Wishlist",
    to: "/profile-page/wishlist",
    logo: <Heart className="h-5 w-5" />,
  },
];

export const dashboardLinks = {
  "Store Management": [
    {
      name: "Products",
      to: "/dashboard-page/products",
      logo: <ShoppingCartIcon className="h-4 w-4" />,
    },
    {
      name: "Add Variant",
      to: "/dashboard-page/variant",
      logo: <ShoppingCartIcon className="h-4 w-4" />,
    },
    {
      name: "Category",
      to: "/dashboard-page/category",
      logo: <List className="h-4 w-4" />,
    },
    {
      name: "Sub_Category",
      to: "/dashboard-page/sub-category",
      logo: <ListTree className="h-4 w-4" />,
    },
    {
      name: "Orders",
      to: "/dashboard-page/orders",
      logo: <ShoppingBag className="h-4 w-4" />,
    },
  ],
  "User Management": [
    {
      name: "Customers",
      to: "/dashboard-page/customers",
      logo: <Users className="h-4 w-4" />,
    },
    {
      name: "Whosale_Users  ",
      to: "/dashboard-page/wholesale-users",
      logo: <UserCheck className="h-4 w-4" />,
    },
  ],
};
