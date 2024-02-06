import MainWrapper from "@/components/main-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MainWrapper>
      <h1 className="text-xl my-4">Welcome Michael</h1>
      <h2 className="border-b-2 w-fit">App Deal</h2>
      <div></div>
      <h2 className="border-b-2 w-fit">Recent Orders</h2>
    </MainWrapper>
  );
}
