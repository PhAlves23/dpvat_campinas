import Image from "next/image";
import Link from "next/link";

interface CardServicesProps {
  image: string;
  title: string;
  description: string;
  path: string;
}

export const CardServices = ({
  image,
  title,
  description,
  path,
}: CardServicesProps) => {
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
          <Link href={path} className="italic text-orange-500">
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
};
