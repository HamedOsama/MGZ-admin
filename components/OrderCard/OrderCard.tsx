import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { IOverviewCard } from "../../interfaces/IOverviewCard";
import formatDate from "../../utils/formatDate";
import StatusBox from "@components/StatusBox/StatusBox";
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import SmallLoader from "@components/loaders/SmallLoader";

// import SeeAllButton from "../buttons/SeeAllButton";


const OrderCard = ({ item, itemType }: { item: IOverviewCard, itemType: string }) => {
  console.log(item)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const navigatePath = `/${itemType === 'order' ? 'orders' : itemType}/${itemType === "order" ? item.id : item._id}`;
  const navigateToOrder = useCallback(() => {
    setIsLoading(true)
    router.push(navigatePath);
  }, [navigatePath, router]);


  return (
    <div className="p-4 md:mx-0 mx-2 border border-zinc-300 mt-2 rounded-md shadow-md grid md:grid-cols-4 grid-cols-2 text-gray-600">

      {
        itemType === "order" ? (
          <div className="grid-cols-1">
            <p className="text-sm mb-2">
              Order{" #"}
              <span
                onClick={navigateToOrder}
                className="cursor-pointer hover:underline hover:text-red-800 ease-in duration-150"
              >
                {item.id}
              </span>
            </p>
            <p className="text-[16px] font-bold">
              {item.orderItems.length} Item {item.orderItems.length > 1 ? "(s)" : ""}
            </p>
          </div>
        )
          :
          (
            <div className="flex items-center justify-start sm:justify-center">
              <p
                onClick={navigateToOrder}
                className="text-sm font-bold  hover:underline hover:text-red-800 ease-in duration-150 cursor-pointer">
                Maintenance{" #"}
                <span>{item._id}</span>
              </p>
            </div>
          )
      }
      <div className="md:flex hidden flex-row items-center justify-center">
        <p className="text-sm">
          <span>Placed on </span>
          {formatDate(item.createdAt)}
        </p>
      </div>
      <div className="grid-cols-1 flex flex-row items-center md:justify-center justify-end">
        <StatusBox status={
          itemType === "order" ? item.orderState : item.status
        } 
        type={itemType}
        />
      </div>
      <div className="grid-cols-1 md:flex hidden items-center justify-end">
        <button
          type="button"
          className="bg-transparent border border-gray-300 text-gray-500 px-4 py-2 rounded-md duration-150 hover:bg-gray-400 hover:bg-opacity-20"
          onClick={navigateToOrder}
        >
          {
            isLoading ? (
              <SmallLoader style="p-1 text-2xl" />
            )
              : (
                <>
                  <span className="text-base">
                    View
                  </span>
                  <EastRoundedIcon className="ml-2" />
                </>
              )
          }
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
