import { DatePicker } from "@/components/date-picker";
import MainWrapper from "@/components/main-wrapper";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  QrCodeIcon,
  User2Icon,
  Wallet2Icon,
} from "lucide-react";

type SettingLink = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const SettingLinks: SettingLink[] = [
  {
    title: "Edit Account Information",
    icon: <User2Icon />,
    children: (
      <>
        <DrawerHeader className="text-left">
          <DrawerTitle>Profile Information</DrawerTitle>
          <DrawerDescription className="my-2">
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </>
    ),
  },
  {
    title: "Scan QR Code",
    icon: <QrCodeIcon />,
    children: (
      <>
        <DrawerHeader className="text-left">
          <DrawerTitle>Scan QR Code</DrawerTitle>
          <DrawerDescription className="my-2">
            Use the QR code to scan and earn points when you order in-store.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2"></DrawerFooter>
      </>
    ),
  },
  {
    title: "Edit Payment Information",
    icon: <Wallet2Icon />,
    children: (
      <>
        <DrawerHeader className="text-left">
          <DrawerTitle>Payment Information</DrawerTitle>
          <DrawerDescription className="my-2">
            Add or remove payment methods here.
          </DrawerDescription>
        </DrawerHeader>
        <AddPaymentInformation />
        <DrawerFooter className="pt-2"></DrawerFooter>
      </>
    ),
  },
];

export default function Account() {
  return (
    <MainWrapper>
      <header className="text-center">
        <h1 className="mb-4 text-xl font-medium">Michael Lei</h1>
        <h2 className="mb-4 text-sm text-gray-500">(555)-555-555</h2>
      </header>
      <div className="flex flex-col rounded-lg shadow">
        {SettingLinks.map((link, index) => (
          <DrawerLink key={index} title={link.title} icon={link.icon}>
            {link.children}
          </DrawerLink>
        ))}
      </div>
    </MainWrapper>
  );
}

function DrawerLink({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex cursor-pointer justify-between border-b p-5 hover:bg-gray-100">
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
          <ArrowRightIcon />
        </div>
      </DrawerTrigger>
      <DrawerContent className="mx-auto max-w-sm">{children}</DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input type="text" id="firstName" defaultValue="Michael" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" type="text" defaultValue="Lei" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="mlei6@my.bcit.ca" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="mobile">Mobile</Label>
        <Input id="mobile" type="tel" defaultValue="555-555-5555" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="birthday">Birthday</Label>
        <DatePicker />
      </div>
      <Button className="bg-green-700" type="submit">
        Save changes
      </Button>
    </form>
  );
}

function AddPaymentInformation() {
  return (
    <div className="grid items-start gap-4 p-5">
      <Button className="bg-green-700" type="submit">
        Add Payment Method
      </Button>
    </div>
  );
}
