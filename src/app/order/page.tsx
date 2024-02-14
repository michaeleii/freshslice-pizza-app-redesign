import MainWrapper from "@/components/main-wrapper";
import { Button } from "@/components/ui/button";
import { CarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

const Buttons = [
  {
    link: "/menu",
    icon: <CarIcon size={30} className="mr-2" />,
    text: "Delivery",
  },
  {
    link: "/menu",
    icon: <MapPinIcon size={24} className="mr-2" />,
    text: "Pickup",
  },
];

export default function Order() {
  return (
    <MainWrapper className="flex flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-semibold">Start your order</h1>
      <div className="grid max-w-sm grid-cols-2 gap-4">
        {Buttons.map((button) => (
          <Link className="h-full w-full" key={button.text} href={button.link}>
            <Button
              key={button.text}
              className="h-[200px] w-full rounded-lg bg-green-700 p-4 text-2xl"
              size="lg"
            >
              {button.icon}
              <span>{button.text}</span>
            </Button>
          </Link>
        ))}
      </div>
    </MainWrapper>
  );
}
