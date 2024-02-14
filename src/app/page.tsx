import MainWrapper from "@/components/main-wrapper";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import FreshSliceLogo from "@/../public/freshslice-logo.webp";
import PromoBanner from "@/../public/12-Medium-Pizza-Deal-DT.webp";
import Coupons from "@/components/coupons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/menu">
        <Image
          src={PromoBanner}
          alt="Freshslice Pizza"
          className="mx-auto w-full max-w-md object-cover shadow-md"
        />
      </Link>
      <MainWrapper>
        <h1 className="my-4 text-xl font-medium">Welcome Michael</h1>
        <Coupons />
        <div></div>
        <h2 className="mb-4 mt-8 w-fit border-b-2 border-b-gray-900 font-semibold text-gray-500">
          Recent Orders
        </h2>
        <RecentOrder />
      </MainWrapper>
    </>
  );
}

function RecentOrder() {
  return (
    <div className="flex w-full cursor-pointer gap-2 rounded-lg border p-5 shadow-md">
      <div className="my-auto">
        <Image
          src={FreshSliceLogo}
          alt="Freshslice Pizza"
          className="aspect-square"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-500">
          Freshslice Pizza (Joyce St)
        </h3>
        <Separator className="my-4" />
        <div className="flex items-center justify-around gap-4">
          <div className="flex flex-col items-center gap-1">
            <h4 className="text-sm font-medium text-green-700">$8.92</h4>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h4 className="text-sm font-medium text-green-700">Aug 29</h4>
            <p className="text-xs text-gray-500">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
