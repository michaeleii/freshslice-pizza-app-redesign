import { CreditCardIcon, HomeIcon, PizzaIcon, User2Icon } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full bg-lime-950">
      <ul className="mx-auto flex h-20 max-w-xl items-center justify-around border-t bg-gray-50 text-gray-500 shadow-lg">
        <li>
          <Link
            href="/"
            className="flex flex-col items-center p-5 transition-colors hover:text-green-500"
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/order"
            className="flex flex-col items-center p-5 transition-colors hover:text-green-500"
          >
            <PizzaIcon className="-scale-x-100" />
            <span>Order</span>
          </Link>
        </li>
        <li>
          <Link
            href="/rewards"
            className="flex flex-col items-center p-5 transition-colors hover:text-green-500"
          >
            <CreditCardIcon />
            <span>Rewards</span>
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="flex flex-col items-center p-5 transition-colors hover:text-green-500"
          >
            <User2Icon />
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
