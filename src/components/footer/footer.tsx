import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center items-center gap-5 p-10">
        <Instagram
          size={48}
          color="white"
          className="bg-buttonBg border border-buttonBorder rounded-2xl p-2 backdrop-blur-sm"
        />
        <Facebook
          size={48}
          color="white"
          className="bg-buttonBg border border-buttonBorder rounded-2xl p-2 backdrop-blur-sm"
        />
        <Twitter
          size={48}
          color="white"
          className="bg-buttonBg border border-buttonBorder rounded-2xl p-2 backdrop-blur-sm"
        />
      </div>
      <div className="bg-footerBg flex justify-center items-center p-5">
        <p className="text-white">
          © 2024 CarlosJEG. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
