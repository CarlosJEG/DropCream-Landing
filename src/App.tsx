import CardsComponent from "./components/cards/cardsComponent";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <CardsComponent />
      <Footer />
    </>
  );
};

export default App;
