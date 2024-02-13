import MainWrapper from "@/components/main-wrapper";

export default function Rewards() {
  return (
    <>
      <h1 className="mx-auto w-full max-w-sm bg-black py-2 text-center text-white">
        Rewards
      </h1>
      <MainWrapper>
        <div>
          <div>
            <span className="uppercase">Rewards</span>
          </div>
          <div>
            <h2>Freshslice Pizza</h2>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-semibold text-green-600">
                $1.05
              </span>
              <span className="text-xs uppercase">Balance</span>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
}
