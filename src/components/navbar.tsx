import { CreditCardIcon, HomeIcon, PizzaIcon, User2Icon } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full bg-lime-950">
      <ul className="mx-auto flex h-20 max-w-xl items-center justify-around border-t bg-white text-gray-500">
        <li>
          <Link href="/" className="flex flex-col items-center">
            <HomeIcon />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/order" className="flex flex-col items-center">
            <PizzaIcon />
            <span>Order</span>
          </Link>
        </li>
        <li>
          <Link href="/rewards" className="flex flex-col items-center">
            <CreditCardIcon />
            <span>Rewards</span>
          </Link>
        </li>
        <li>
          <Link href="/account" className="flex flex-col items-center">
            <User2Icon />
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
