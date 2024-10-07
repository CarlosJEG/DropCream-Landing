import CardTemplate from "./cardTemplate";
import IceCreamOne from "../../assets/iceCream-one.png";
import IceCreamTwo from "../../assets/iceCream-two.png";
import IceCreamThree from "../../assets/iceCream-three.png";
import IceCreamFour from "../../assets/iceCream-four.png";

const iceCreams = [
  {
    title: "Helado de Vainilla",
    img: IceCreamOne,
  },
  {
    title: "Helado de Chocolate",
    img: IceCreamTwo,
  },
  {
    title: "Helado de Fresa",
    img: IceCreamThree,
  },
  {
    title: "Helado de Menta",
    img: IceCreamFour,
  },
];

const CardsComponent = () => {
  return (
    <div className="flex justify-center mx-auto p-12">
      <div className="flex gap-10 justify-center flex-wrap">
        {iceCreams.map((iceCream, index) => (
          <CardTemplate key={index} title={iceCream.title} img={iceCream.img} />
        ))}
      </div>
    </div>
  );
};

export default CardsComponent;
