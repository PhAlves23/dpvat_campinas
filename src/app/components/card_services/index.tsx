"use client";

import Image from "next/image";
import Link from "next/link";
import BannerDPVAT from "../banner_content/banner_dpvat";
import BannerSeguro from "../banner_content/banner_seguro";
import BannerINSS from "../banner_content/banner_inss";
interface CardServicesProps {
  id: number;
  image: string;
  title: string;
  description: string;
  path: string;
  setBannerText?: any;
}

export const CardServices = ({
  id,
  image,
  title,
  description,
  path,
  setBannerText,
}: CardServicesProps) => {
  const handleClickSaibaMais = () => {
    switch (id) {
      case 1:
        setBannerText(<BannerDPVAT />);
        break;
      case 2:
        setBannerText(<BannerSeguro />);
        break;
      case 3:
        setBannerText(<BannerINSS />);
        break;
      default:
        setBannerText(<BannerDPVAT />);
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-col min-h-[490px] justify-center items-center rounded-t-lg hover:scale-105 transition-all duration-300">
        <Image
          src={image ? image : ""}
          width={370}
          height={200}
          alt="Services image"
          className="rounded-t-lg shadow-md"
        />
        <div className="max-w-[370px] pt-8 pb-14 px-5 flex flex-col justify-center items-center bg-white shadow-md rounded-b-lg">
          <h3 className="text-2xl mb-5 font-semibold">{title}</h3>
          <p className="text-center text-sm mb-3">{description}</p>
          <Link
            href={path}
            className="italic text-orange-500"
            onClick={handleClickSaibaMais}
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
};
