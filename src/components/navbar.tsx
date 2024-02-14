"use client";

import { cn } from "@/lib/utils";
import { CreditCardIcon, HomeIcon, PizzaIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon className="h-6 w-6" /> },
  {
    href: "/order",
    label: "Order",
    icon: <PizzaIcon className="h-6 w-6 -scale-x-100" />,
  },
  { href: "/rewards", label: "Rewards", icon: <CreditCardIcon /> },
  { href: "/account", label: "Account", icon: <User2Icon /> },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 w-full bg-white">
      <ul className="mx-auto flex h-20 max-w-md items-center justify-around border-t bg-gray-50 text-gray-500 shadow-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex flex-col items-center gap-2 px-5 py-4 transition-all",
                  {
                    "border-t-4 border-green-500 text-green-700": isActive,
                    "hover:text-green-700": !isActive,
                  },
                )}
              >
                {link.icon}
                <span className="text-xs font-semibold">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
