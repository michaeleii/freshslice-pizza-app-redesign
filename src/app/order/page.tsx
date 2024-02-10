import MainWrapper from "@/components/main-wrapper";
import { Button } from "@/components/ui/button";

export default function Order() {
  return (
    <MainWrapper className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-semibold">Choose an option</h1>
      <div className="flex w-full max-w-xs flex-col gap-2">
        <Button className="rounded-lg bg-green-500 p-4 text-white" size="lg">
          Delivery
        </Button>
        <Button className="rounded-lg bg-green-500 p-4 text-white">
          Pickup
        </Button>
      </div>
    </MainWrapper>
  );
}
