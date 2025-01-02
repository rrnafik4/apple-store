import "./index.css";
import "./index.scss";
import { Header } from "./components/header/header";
import { Container } from "@mui/material";

import Glass from "./png/covers/glass.png";
import Plastic from "./png/plastic.png";
import Byz from "./png/wired/byz.png";
import { Footer } from "./components/footer/footer";

import { Product } from "./components/basket/product/product";

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
  return (
    <div className="wrapper">
      <Container maxWidth={false} sx={{ maxWidth: "1110px" }}>
        <Header />

        <Product />
        {/* <Basket /> */}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
