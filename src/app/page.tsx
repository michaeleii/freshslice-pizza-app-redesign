import MainWrapper from "@/components/main-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MainWrapper>
      <h1 className="my-4 text-xl font-medium">Welcome Michael</h1>
      <h2 className="w-fit border-b-2 border-green-700 text-green-700">
        App Deal
      </h2>
      <div></div>
      <h2 className="my-5 w-fit border-b-2 border-b-black text-gray-500">
        Recent Orders
      </h2>
    </MainWrapper>
  );
}
