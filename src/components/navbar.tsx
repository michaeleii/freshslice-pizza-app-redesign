import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full bg-lime-950">
      <ul className="mx-auto flex h-20 max-w-xl items-center justify-around border-t bg-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/order">Order</Link>
        </li>
        <li>
          <Link href="/rewards">Rewards</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
}
