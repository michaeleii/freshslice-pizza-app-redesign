import MainWrapper from "@/components/main-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

import FreshSliceLogo from "@/../public/freshslice-logo.webp";

export default function Order() {
  return (
    <>
      <Search />
      <MainWrapper>
        <div className="flex flex-col gap-5">
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
        </div>
      </MainWrapper>
    </>
  );
}

function Search() {
  return (
    <div className="sticky top-0 mx-auto flex w-full max-w-xl flex-col gap-4 bg-black p-5">
      <div className="relative">
        <Input
          className="w-full pl-10"
          type="text"
          placeholder="Current Location"
        />
        <SearchIcon className="absolute left-2 top-2" />
      </div>
    </div>
  );
}

function Store() {
  return (
    <div className="flex w-full gap-5 rounded-lg border p-5 shadow">
      <Image src={FreshSliceLogo} alt="FreshSlice" width={150} />
      <div className="flex-1">
        <h3 className="mb-2 text-sm font-semibold text-gray-500">
          Freshslice Pizza (Joyce St)
        </h3>
        <p className="text-xs font-thin text-gray-500">6374 Fraser St</p>
        <Separator className="my-4" />
        <div className="flex justify-between gap-4">
          <div className="flex flex-col items-center gap-1">
            <h4 className="text-xs text-gray-500">Open All Day</h4>
          </div>
          <Button className="bg-teal-400 text-xs hover:bg-teal-500" size="sm">
            Open
          </Button>
        </div>
      </div>
    </div>
  );
}
