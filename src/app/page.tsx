import MainWrapper from "@/components/main-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MainWrapper>
      <h1 className="my-4 text-xl">Welcome Michael</h1>
      <h2 className="w-fit border-b-2">App Deal</h2>
      <div></div>
      <h2 className="w-fit border-b-2">Recent Orders</h2>
    </MainWrapper>
  );
}
