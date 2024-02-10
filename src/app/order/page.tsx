import MainWrapper from "@/components/main-wrapper";
import { Button } from "@/components/ui/button";

const Buttons = [
  {
    text: "Delivery",
  },
  {
    text: "Pickup",
  },
  {
    text: "Gift Card",
  },
];

export default function Order() {
  return (
    <MainWrapper className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-semibold">Choose an option</h1>
      <div className="flex w-full max-w-xs flex-col gap-4">
        {Buttons.map((button) => (
          <Button
            key={button.text}
            className="h-full rounded-lg bg-green-500 p-4 text-2xl text-white"
            size="lg"
          >
            {button.text}
          </Button>
        ))}
      </div>
    </MainWrapper>
  );
}
