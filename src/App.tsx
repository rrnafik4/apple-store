import "./index.css";
import "./index.scss";
import { Header } from "./components/header/header";
import { Container } from "@mui/material";

type dataMenuItems = {
  title: string;
  items: [string];
};

const dataMenuItems = [
  {
    title: "Apple",
    items: [
      "iPhone 12",
      "iPhone 12 Max",
      "iPhone 13",
      "iPhone 13 Pro Max",
      "iPhone 14",
    ],
  },
];

function App() {
  return (
    <div className="wrapper">
      <Container maxWidth={false} sx={{ maxWidth: "1110px" }}>
        <Header />
      </Container>
    </div>
  );
}

export default App;
