import mainImg from "../../assets/main-img.png";
import mainIconOne from "../../assets/main-icon-one.png";
import mainIconTwo from "../../assets/main-icon-two.png";
import mainIconThree from "../../assets/main-icon-three.png";
import mainIconFour from "../../assets/main-icon-four.png";

const Main = () => {
  return (
    <main className="w-10/12 flex justify-center mx-auto p-12">
      <div className="w-full flex justify-between flex-wrap gap-10 max-xl:justify-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-8xl font-semibold">
            Helado de <br /> Flor Roja
          </h2>
          <p className="text-secondText text-lg">
            El helado de flor roja es un helado de sabor único y fresco. <br />{" "}
            ¡Pruébalo ya!
          </p>
          <div className="flex gap-5">
            <button className="border-2 border-white px-6 py-4 text-white rounded-xl">
              Comprar ahora
            </button>
            <button className="bg-buttonBg backdrop-blur-sm px-6 py-4 text-white rounded-xl">
              Ver Sabores
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <img src={mainImg} alt="main" />
          <div className="flex flex-col gap-5">
            <p className="text-white font-medium">Escoge un tipo de helado:</p>
            <div className="flex gap-8 items-center flex-wrap justify-center">
              <img
                src={mainIconOne}
                alt="icon"
                className="bg-buttonBg border border-buttonBorder rounded-3xl p-3 backdrop-blur-sm"
              />
              <img
                src={mainIconTwo}
                alt="icon"
                className="bg-buttonBg border border-buttonBorder rounded-3xl p-3 backdrop-blur-sm"
              />
              <img
                src={mainIconThree}
                alt="icon"
                className="bg-buttonBg border border-buttonBorder rounded-3xl p-3 backdrop-blur-sm"
              />
              <div className="w-[60px] h-[60px] bg-buttonBg rounded-3xl p-3 backdrop-blur-sm flex justify-center items-center">
                <img src={mainIconFour} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
