import React from "react";
import Link from "next/link"; // Usamos Link de Next.js para manejar la navegación
import { PayBlock } from "@/components/Pay";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 gap-y-3 mb-20">
        <PayBlock />
      </main>

      {/* Barra de navegación fija en la parte inferior */}
      <nav className="bg-blue-600 text-white p-4 fixed bottom-0 w-full z-10">
        <div className="flex justify-around items-center">
          <Link href="/inicio">
            <a className="hover:text-blue-300">Inicio</a>
          </Link>
          <Link href="/servicios">
            <a className="hover:text-blue-300">Servicios</a>
          </Link>
          <Link href="/contacto">
            <a className="hover:text-blue-300">Contacto</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Home;
