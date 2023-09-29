import Image from "next/image";
import Link from "next/link";

export const WhatsAppButton = () => {
  return (
    <div className="fixed right-8 bottom-16">
      <div className="bg-green-600 w-16 h-16 flex justify-center items-center rounded-full cursor-pointer">
        <Link
          href="https://api.whatsapp.com/send?phone=5519999985348"
          target="_blank"
        >
          <Image
            src="/whatsapp.svg"
            width={62}
            height={62}
            alt="WhatsApp imagem"
          />
        </Link>
      </div>
    </div>
  );
};
