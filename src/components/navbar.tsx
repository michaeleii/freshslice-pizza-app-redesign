import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="max-w-xl mx-auto bg-white border-t">
      <ul className="flex justify-around items-center h-20">
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
