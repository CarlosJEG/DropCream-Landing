interface CardTemplateProps {
  title: string;
  img: string;
}

const CardTemplate = ({ title, img }: CardTemplateProps) => {
  return (
    <div className="bg-cardBg border border-buttonBg rounded-2xl backdrop-blur-sm flex justify-center items-center px-5 pb-8 flex-wrap">
      <img src={img} alt="Ice Cream" />
      <div className="flex flex-col gap-5 mr-5">
        <h3 className="text-white text-2xl font-medium">{title}</h3>
        <div>
          <p className="text-white mb-2">Tipo de orden:</p>
          <div className="flex gap-3">
            <button className="border border-white px-3 py-2 rounded-xl text-white">
              Retirar en tienda
            </button>
            <button className="border border-white px-3 py-2 rounded-xl text-white">
              Delivery
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-white text-xl font-medium">Rs. 250/-</p>
          <button className="border-2 border-white rounded-xl px-5 py-3 text-white">
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
