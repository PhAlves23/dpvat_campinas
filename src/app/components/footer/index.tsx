import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="flex justify-between px-5 items-center text-white text-sm py-3 border-t border-t-primary/40">
        <div className="container-desktop flex flex-col-reverse lg:flex-row gap-5 justify-between items-center">
          <p className="whitespace-nowrap text-center">
            &copy;DPVAT Campinas - Todos os direitos reservados.
          </p>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <AiOutlineInstagram size={32} />
            @dpvatcampinas
          </Link>
        </div>
      </div>
    </footer>
  );
};
