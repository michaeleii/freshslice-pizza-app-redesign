import MainWrapper from "@/components/main-wrapper";
import { Button } from "@/components/ui/button";
import { CarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

const Buttons = [
  {
    link: "/menu",
    icon: <CarIcon size={40} className="mr-2" />,
    text: "Delivery",
  },
  {
    link: "/menu",
    icon: <MapPinIcon size={40} className="mr-2" />,
    text: "Pickup",
  },
];

export default function Order() {
  return (
    <MainWrapper className="flex flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-semibold">Start your order</h1>
      <div className="grid w-full max-w-md grid-cols-2 items-center justify-center gap-4">
        {Buttons.map((button) => (
          <Link className="h-full w-full" key={button.text} href={button.link}>
            <Button
              key={button.text}
              className="flex h-[200px] w-full flex-col gap-6 rounded-lg bg-green-700 p-4 text-2xl shadow-md"
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
