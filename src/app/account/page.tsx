import MainWrapper from "@/components/main-wrapper";
import { ArrowRightIcon, User2Icon } from "lucide-react";

const SettingLinks = [];

export default function Account() {
  return (
    <MainWrapper>
      <div></div>
      <div className="flex flex-col shadow">
        <div className="flex justify-between border-b p-5">
          <div className="flex items-center gap-2">
            <User2Icon />
            <span>Edit Account Information</span>
          </div>
          <ArrowRightIcon />
        </div>
        <div className="flex justify-between border-b p-5">
          <div className="flex items-center gap-2">
            <User2Icon />
            <span>Edit Account Information</span>
          </div>
          <ArrowRightIcon />
        </div>
      </div>
    </MainWrapper>
  );
}
