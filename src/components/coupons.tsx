import FreshSliceLogo from "@/../public/freshslice-logo.webp";
import Image from "next/image";
import Link from "next/link";

export default function Coupons() {
  return (
    <>
      <h2 className="my-4 w-fit border-b-2 border-green-600 font-semibold text-green-700">
        App Deal
      </h2>
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
    </>
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
    <Link href="/menu">
      <div className="flex cursor-pointer justify-between rounded-md border-2 border-l-[15px] border-green-700 p-5">
        <div className="flex max-w-[200px] flex-col justify-center gap-2">
          <h3 className="mb-4 text-lg font-medium text-green-700">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div>
          <Image
            src={FreshSliceLogo}
            alt="Freshslice Pizza"
            className="aspect-square"
            width={100}
            height={100}
          />
        </div>
      </div>
    </Link>
  );
}
