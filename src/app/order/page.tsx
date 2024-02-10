import MainWrapper from "@/components/main-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Buttons = [
  {
    link: "/order/delivery",
    text: "Delivery",
  },
  {
    link: "/order/pickup",
    text: "Pickup",
  },
  {
    link: "/order/gift-card",
    text: "Gift Card",
  },
];

export default function Order() {
  return (
    <MainWrapper className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-semibold">Choose an option</h1>
      <div className="flex w-full max-w-xs flex-col gap-4">
        {Buttons.map((button) => (
          <Link className="h-full w-full" key={button.text} href={button.link}>
            <Button
              key={button.text}
              className="h-full w-full rounded-lg bg-green-500 p-4 text-2xl text-white"
              size="lg"
            >
              {button.text}
            </Button>
          </Link>
        ))}
      </div>
    </MainWrapper>
  );
}
