import MainWrapper from "@/components/main-wrapper";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MenuItem, classicPizzas } from "./data";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuPage() {
  return (
    <MainWrapper>
      <Tabs defaultValue="classic-pizzas" className="w-full">
        <TabsList className="sticky top-0 mb-2 h-fit w-full max-w-md gap-2 overflow-y-auto rounded-none border-b bg-white pb-2">
          <TabsTrigger value="classic-pizzas">Classic Pizzas</TabsTrigger>
          <TabsTrigger value="feast-pizzas">Feast Pizzas</TabsTrigger>
          <TabsTrigger value="extras">Extras</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>
        <TabsContent value="classic-pizzas">
          <MenuList data={classicPizzas} />
        </TabsContent>
        <TabsContent value="feast-pizzas"></TabsContent>
      </Tabs>
    </MainWrapper>
  );
}

function MenuList({ data }: { data: MenuItem[] }) {
  return (
    <div className="grid gap-6">
      {data.map((item) => (
        <MenuItemCard key={item.name} menuItem={item} />
      ))}
    </div>
  );
}

function MenuItemCard({ menuItem }: { menuItem: MenuItem }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="cursor-pointer rounded-lg rounded-b-lg border shadow-md">
          <Image
            src={menuItem.image}
            alt={menuItem.name}
            className="rounded-t-lg"
          />
          <div className="p-5">
            <h2 className="text-lg font-semibold">{menuItem.name}</h2>
            <p className="my-4 text-sm text-gray-500">{menuItem.ingredients}</p>
            <p className="text-right text-xl">$2.00</p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="mx-auto max-w-md">
        <DrawerHeader>
          <Image
            src={menuItem.image}
            alt={menuItem.name}
            className="mb-4 w-full rounded-lg"
          />
          <DrawerTitle className="text-left text-xl">
            {menuItem.name}
          </DrawerTitle>
          <DrawerDescription className="text-left">
            {menuItem.ingredients}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button className="bg-green-700">Add To Cart</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
