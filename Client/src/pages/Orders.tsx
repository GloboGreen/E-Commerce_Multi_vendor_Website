import DashboardBreadcrumb from "@/components/DashboardBreadcrumb";
import GenericTable from "@/components/GenericTable";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { SummaryApi } from "@/constants/SummaryApi";
import { actions, orderColumn } from "@/lib/Actions";
import Axios from "@/lib/Axios";
import { createLookup } from "@/lib/lookUpMap";

import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Orders() {
  const [search, setSearch] = React.useState("");
  const orders = useSelector((state: RootState) => state.order.allOrders);
  const user = useSelector((state: RootState) => state.user.users || []);

  const userLookup = React.useMemo(
    () => createLookup(user, "_id", "name"),
    [user],
  );

  const orderData = orders
    .map((item) => {
      const product = item.product_details;
      const userId =
        typeof item.userId === "object" ? item.userId?._id : undefined;

      return {
        id: item._id,
        image: product?.image[0] || "/placeholder.png",
        name: product?.name || "Unknown Product",
        qty: product.quantity,
        orderId: item.orderId,
        // phone: mobile,
        status: item.order_status,
        price: item.totalAmt || 0,
        userName: userLookup.get(userId || "") || "Unknown User",
      };
    })
    .filter((order) => {
      // Apply search filter here
      return (
        order.name.toLowerCase().includes(search.toLowerCase()) || // Search by product name
        order.orderId.toLowerCase().includes(search.toLowerCase()) // Search by order ID
      );
    });
  const renderActions = (id: string) => {
    return actions(id, "single-order", handleDelete);
  };

  const handleDelete = async (id: string) => {
    // Add your approval logic here
    try {
      const response = await Axios({
        ...SummaryApi.delete_order,
        data: {
          _id: id,
        },
      });

      if (response.data) {
        window.location.reload();
        console.log("Order Deleted successful");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="px-4 pb-10 pt-10 md:pb-10 md:pt-10">
      <h1 className="mb-2 text-3xl font-semibold"> Orders</h1>
      <DashboardBreadcrumb pathName="Orders" path="orders" />
      <Card className="my-10">
        <CardHeader className="w-full items-center justify-between gap-2 sm:flex-row">
          <Input
            placeholder="search"
            className="w-full sm:w-[300px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </CardHeader>

        <CardContent className="p-0">
          <ScrollArea className="min-w-full max-w-sm whitespace-nowrap sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-xl">
            <GenericTable
              columns={orderColumn}
              data={orderData}
              actions={(row) => renderActions(row.id)}
            />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
