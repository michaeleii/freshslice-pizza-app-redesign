import MainWrapper from "@/components/main-wrapper";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MenuItem, classicPizzas, feastPizzas, drinks, extras } from "./data";
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
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  return (
    <MainWrapper>
      <div className="my-4">
        <h1 className="my-2">You currently ordering from:</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-baseline gap-2">
            <p className="text-sm font-semibold text-gray-500">
              Freshslice Pizza (Joyce St)
            </p>
            <Link
              href="/store"
              className="text-xs text-blue-500 hover:text-blue-700 hover:underline"
            >
              Change Location
            </Link>
          </div>
        </div>
      </div>
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
        <TabsContent value="feast-pizzas">
          <MenuList data={feastPizzas} />
        </TabsContent>
        <TabsContent value="drinks">
          <MenuList data={drinks} />
        </TabsContent>
        <TabsContent value="extras">
          <MenuList data={extras} />
        </TabsContent>
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
        <div className="flex cursor-pointer gap-4 rounded-lg rounded-b-lg border shadow-md">
          <Image
            src={menuItem.image}
            alt={menuItem.name}
            placeholder="blur"
            className="w-44 rounded-l-lg"
          />
          <div className="flex h-full w-full flex-col p-2">
            <h2 className="text-md font-semibold">{menuItem.name}</h2>
            <p className="text-xs text-gray-500">{menuItem.ingredients}</p>
            <div className="mt-auto">
              <p className="text-md mt-6 text-right font-semibold text-gray-700">
                $2.00
              </p>
            </div>
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
          <Button className="flex items-center gap-2 bg-green-700">
            <ShoppingCartIcon className="h-4 w-4" />
            <span>Add To Cart</span>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
