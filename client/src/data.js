import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
  },
  {
    img: "assets/beach_cat.jpg",
    label: "University of California",
    description: "This property is located near UCLA.",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "University of Texas",
    description: "This property is located near the University of Texas at Austin.",
  },
  {
    img: "assets/modern_cat.jpg",
    label: "Harvard",
    description: "This property is located near Harvard University.",
  },
  {
    img: "assets/countryside_cat.png",
    label: "University of Florida",
    description: "This property is located near the University of Florida.",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Princeton",
    description: "This property is located near Princeton University.",
  },
  {
    img: "assets/island_cat.webp",
    label: "Yale",
    description: "This property is located near Yale University.",
  },
  {
    img: "assets/lake_cat.webp",
    label: "University of Michigan",
    description: "This property is located near the University of Michigan.",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Dartmouth",
    description: "This property is located near Dartmouth College.",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Columbia University",
    description: "This property is located near Columbia University.",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "University of Georgia",
    description: "This property is located near the University of Georgia.",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "University of Washington",
    description: "This property is located near the University of Washington.",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Penn",
    description: "This property is located near the University of Pennsylvania.",
  },
  {
    img: "assets/desert_cat.webp",
    label: "Arizona State University",
    description: "This property is located near Arizona State University.",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "Cornell",
    description: "This property is located near Cornell University.",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "NYU",
    description: "This property is located near New York University (NYU).",
  },
  {
    img: "assets/example_img.jpg",
    label: "Stanford",
    description: "This property is located near Stanford University.",
  },
  {
    img: "assets/example_img.jpg",
    label: "MIT",
    description: "This property is located near the Massachusetts Institute of Technology (MIT).",
  },
  {
    img: "assets/example_img.jpg",
    label: "University of Chicago",
    description: "This property is located near the University of Chicago.",
  },
  {
    img: "assets/example_img.jpg",
    label: "Duke",
    description: "This property is located near Duke University.",
  },
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];
