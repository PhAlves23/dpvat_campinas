"use client";
import { headerLinks } from "@/app/mocks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleActive = (id: number) => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-gray-50 shadow-md shadow-gray-300">
      <header className="flex justify-between items-center container-desktop h-20">
        <Image
          src="/logo.svg"
          width={154}
          height={64}
          alt="Logo DPVAT Campinas"
        />

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {headerLinks?.map(({ id, title, url }) => (
              <li
                key={title}
                className={`text-blue-900 py-3 px-3`}
                onClick={() => handleToggleActive(id)}
              >
                <a href={url}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="https://www.instagram.com" target="_blank">
          <button className="hidden lg:block bg-orange-400 text-white py-3 px-6 rounded-full">
            Entrar em contato
          </button>
        </Link>
        {/* <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={32} className="text-secondary" />
        </Link> */}
      </header>
    </div>
  );
};
