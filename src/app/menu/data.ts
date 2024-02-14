import CheeseWhiteSauce from "@/../public/menu/classic/cheese_white_sauce.jpeg";
import CheeseTomatoSauce from "@/../public/menu/classic/cheese_tomato_sauce.jpeg";
import Pepperoini from "@/../public/menu/classic/pepperoni.jpeg";
import Hawaiian from "@/../public/menu/classic/hawaiian.jpeg";
import Beef from "@/../public/menu/classic/beef.jpeg";
import BaconMushroom from "@/../public/menu/classic/bacon_mushroom.jpeg";
import Veggie from "@/../public/menu/classic/veggie.jpeg";

import { StaticImageData } from "next/image";

export type MenuItem = {
  name: string;
  ingredients: string;
  image: StaticImageData;
};

export const classicPizzas: MenuItem[] = [
  {
    name: "Cheese With White Sauce",
    ingredients: "Creamy White Garlic Sauce, Mozzarella, Cheddar",
    image: CheeseWhiteSauce,
  },
  {
    name: "Cheese With Tomato Sauce",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Cheddar",
    image: CheeseTomatoSauce,
  },
  {
    name: "Pepperoni",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Pepperoni",
    image: Pepperoini,
  },
  {
    name: "Hawaiian",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Ham, Pineapple",
    image: Hawaiian,
  },
  {
    name: "Beef",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Beef",
    image: Beef,
  },
  {
    name: "Bacon Mushroom",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Bacon, Mushroom",
    image: BaconMushroom,
  },
  {
    name: "Veggie",
    ingredients: "Zesty Tomato Sauce, Mozzarella, Mushroom, Onion, Capsicum",
    image: Veggie,
  },
];
