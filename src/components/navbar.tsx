"use client";

import { cn } from "@/lib/utils";
import { CreditCardIcon, HomeIcon, PizzaIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  {
    href: "/order",
    label: "Order",
    icon: <PizzaIcon className="-scale-x-100" />,
  },
  { href: "/rewards", label: "Rewards", icon: <CreditCardIcon /> },
  { href: "/account", label: "Account", icon: <User2Icon /> },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 w-full bg-lime-950">
      <ul className="mx-auto flex h-20 max-w-xl items-center justify-around border-t bg-gray-50 text-gray-500 shadow-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex flex-col items-center p-5 transition-colors",
                  {
                    "text-green-700": isActive,
                    "hover:text-green-700": !isActive,
                  },
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
