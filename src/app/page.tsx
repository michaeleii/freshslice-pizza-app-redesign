import MainWrapper from "@/components/main-wrapper";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import FreshSliceLogo from "@/../public/freshslice-logo.webp";

export default function Home() {
  return (
    <MainWrapper>
      <h1 className="my-4 text-xl font-medium">Welcome Michael</h1>
      <h2 className="my-4 w-fit border-b-2 border-green-600 font-semibold text-green-700">
        App Deal
      </h2>
      <Coupons />
      <div></div>
      <h2 className="mb-4 mt-8 w-fit border-b-2 border-b-gray-900 font-semibold text-gray-500">
        Recent Orders
      </h2>
      <Order />
    </MainWrapper>
  );
}

function Coupons() {
  return (
    <div className="my-4 flex flex-col gap-4">
      <Coupon
        title="Any 2 Slices (Pickup Only)"
        description="This coupon will expire on 2024-02-29"
      />
      <Coupon
        title="Cheese Bread (Pickup Only)"
        description="This coupon will expire on 2024-02-29"
      />
    </div>
  );
}

function Coupon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex rounded-md border-2 border-l-[15px] border-green-700 p-5">
      <div className="flex flex-col justify-center gap-2">
        <h3 className="mb-4 text-lg font-medium text-green-700">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="my-auto">
        <Image
          src={FreshSliceLogo}
          alt="Freshslice Pizza"
          className="aspect-square"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

function Order() {
  return (
    <div className="flex w-full gap-2 rounded-lg border p-5 shadow-md">
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
