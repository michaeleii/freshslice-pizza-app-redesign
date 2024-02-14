import MainWrapper from "@/components/main-wrapper";
import Image from "next/image";
import FreshSliceLogo from "@/../public/freshslice-logo.webp";
import QRCode from "@/../public/qr-code.webp";
import { GiftIcon, PiggyBankIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Coupons from "@/components/coupons";

export default function Rewards() {
  return (
    <>
      <h1 className="mx-auto w-full max-w-sm bg-black py-2 text-center text-white">
        Rewards
      </h1>
      <MainWrapper>
        <div className="rounded-b-lg shadow-md">
          <div className="rounded-t-lg border-t bg-green-600 py-2">
            <Image
              src={FreshSliceLogo}
              alt="FreshSlice Logo"
              height={150}
              width={150}
              className="mx-auto"
            />
            <div className="mt-2 text-center text-2xl uppercase tracking-widest text-white">
              Rewards
            </div>
          </div>
          <div className="p-5">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-semibold text-green-600">
                $1.05
              </span>
              <span className="text-xs uppercase text-gray-500">Balance</span>
            </div>
          </div>
        </div>
        <div className="my-5 rounded-lg border p-5">
          <Image
            src={QRCode}
            alt="QR Code"
            height={200}
            width={200}
            className="mx-auto"
          />
          <div className="mt-4 text-center text-sm uppercase tracking-widest text-gray-500">
            Scan to earn rewards
          </div>
        </div>
        <div className="my-5 p-5">
          <div className="mx-auto mt-4 w-fit rounded-full bg-green-600 p-4 text-center text-7xl uppercase text-white">
            5%
          </div>
          <div className="mt-4 text-center text-xl uppercase ">Cash Back</div>
          <div className="mt-4 text-center text-sm text-gray-500">
            on every purchases
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <Button
            className="flex w-full items-center gap-2 bg-green-600"
            size="lg"
          >
            <GiftIcon />
            <span>Purchase Gift Card</span>
          </Button>
          <Button
            className="flex w-full items-center gap-2 bg-green-600"
            size="lg"
          >
            <PiggyBankIcon />
            <span>Deposit Funds</span>
          </Button>
        </div>
        <div className="my-10">
          <Coupons />
        </div>
      </MainWrapper>
    </>
  );
}
