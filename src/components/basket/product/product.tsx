import { DataCard } from "../../../App";
import { Accessories } from "../../accessories/accessories";
import { Covers } from "../../covers/covers";
import Glass from "../../../png/covers/glass.png";
import Plastic from "../../../png/plastic.png";
import Byz from "../../../png/wired/byz.png";
import { WiredHeadphones } from "../../wiredHeadphones/WiredHeadphones";

export const Product = () => {
  const DataCard: DataCard[] = [
    {
      label: "Чехлы",
      imgCards: [Glass, Glass, Plastic],
      alt: "Glass",
      variantColum: false,
    },
    {
      label: "Наушники",
      imgCards: [Byz, Byz, Byz, Byz, Byz, Byz, Byz],
      alt: "Byz",
      variantColum: true,
    },
  ];
  return (
    <>
      <Accessories />
      <Covers
        alt={DataCard[0].alt}
        imgCards={DataCard[0].imgCards}
        label={DataCard[0].label}
        variantColum={DataCard[0].variantColum}
      />
      <WiredHeadphones
        label={DataCard[1].label}
        imgCards={DataCard[1].imgCards}
        alt={DataCard[1].alt}
        variantColum={DataCard[1].variantColum}
      />
    </>
  );
};
