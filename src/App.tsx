import "./index.css";
import "./index.scss";
import { Header } from "./components/header/header";
import { Container } from "@mui/material";

import { Accessories } from "./components/accessories/accessories";
import { Covers } from "./components/covers/covers";
import { WiredHeadphones } from "./components/wiredHeadphones/WiredHeadphones";
import Glass from "./png/covers/glass.png";
import Plastic from "./png/plastic.png";
import Byz from "./png/wired/byz.png";

export interface DataCard {
  label: string;
  imgCards: string[];
  alt: string;
  variantColum: boolean;
}
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

function App() {
  console.log(2);

  return (
    <div className="wrapper">
      <Container maxWidth={false} sx={{ maxWidth: "1110px" }}>
        <Header />
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
      </Container>
    </div>
  );
}

export default App;
