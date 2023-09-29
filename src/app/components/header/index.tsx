"use client";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const headerLinks = [
    {
      id: 1,
      title: "Página Inicial",
      url: "#",
    },
    {
      id: 2,
      title: "Quem Somos",
      url: "#about",
    },
    {
      id: 3,
      title: "Como te Ajudamos",
      url: "#help-you",
    },
    {
      id: 4,
      title: "Serviços",
      url: "#services",
    },
  ];
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
          <ul className="flex items-center gap-8">
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

        <button className="hidden lg:block bg-orange-400 text-white py-3 px-6 rounded-full">
          Entrar em contato
        </button>
      </header>
    </div>
  );
};
