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
  Mail,
  PowerIcon,
  QrCodeIcon,
  ScaleIcon,
  Trash2Icon,
  User2Icon,
  UserMinus2Icon,
  Wallet2Icon,
  WalletCardsIcon,
} from "lucide-react";

import QRCodeImage from "@/../public/qr-code.webp";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

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
          <Image
            className="mx-auto"
            src={QRCodeImage.src}
            alt="QR Code"
            height={200}
            width={200}
          />
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
  {
    title: "Legal",
    icon: <ScaleIcon />,
    children: (
      <>
        <DrawerHeader className="text-left">
          <DrawerTitle>Legal Information</DrawerTitle>
        </DrawerHeader>

        <DrawerFooter className="pt-2">
          <LegalLinks />
        </DrawerFooter>
      </>
    ),
  },
  {
    title: "Contact Us",
    icon: <Mail />,
    children: (
      <>
        <DrawerHeader className="text-left">
          <DrawerTitle>Contact Us</DrawerTitle>
          <DrawerDescription className="my-2">
            Have a question? Reach out to us.
          </DrawerDescription>
          <ContactForm />
        </DrawerHeader>
        <DrawerFooter className="pt-2"></DrawerFooter>
      </>
    ),
  },
  {
    title: "Delete Account",
    icon: <Trash2Icon />,
    children: (
      <>
        <DrawerHeader className="text-left">
          <DrawerTitle>Are you sure?</DrawerTitle>
          <DrawerDescription className="my-2">
            This will permanently delete your account.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <Button className="bg-red-700" type="submit">
            Delete Account
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </>
    ),
  },
];

export default function Account() {
  return (
    <MainWrapper className="flex h-full flex-col items-center justify-center">
      <header className="mb-10 text-center">
        <h1 className="mb-4 text-xl font-medium">Michael Lei</h1>
        <h2 className="mb-4 text-sm text-gray-500">(555)-555-555</h2>
        <div className="my-6">
          <Button className="w-full bg-stone-600" size="sm" type="submit">
            <PowerIcon className="mr-2 size-4" />
            <span>Logout</span>
          </Button>
        </div>
      </header>
      <div className="flex w-full flex-col rounded-lg shadow">
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
      <DrawerContent className="mx-auto max-w-md">{children}</DrawerContent>
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

function ContactForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="mobile">Phone</Label>
        <Input id="mobile" type="tel" placeholder="Enter your phone number" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="date">Date Of Visit</Label>
        <DatePicker />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Enter your message here" />
      </div>
      <Button className="bg-green-700" type="submit">
        Submit
      </Button>
    </form>
  );
}

function AddPaymentInformation() {
  return (
    <div className="grid items-start gap-4 p-5">
      <Button className="bg-green-700" type="submit">
        <span>Add Payment Method</span>
      </Button>
    </div>
  );
}

function LegalLinks() {
  return (
    <div className="grid items-start gap-4 p-5">
      <Button className="bg-green-700" type="submit">
        <span>Terms and Conditions</span>
      </Button>
      <Button className="bg-green-700" type="submit">
        <span>Privacy Policy</span>
      </Button>
    </div>
  );
}
