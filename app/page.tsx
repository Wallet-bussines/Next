import { PayBlock } from "@/components/Pay";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 gap-y-3 mb-20">
        <PayBlock />
      </main>

      {/* Barra de navegación fija en la parte inferior */}
      <nav className="bg-blue-600 text-white p-4 fixed bottom-0 w-full z-10">
        <div className="flex justify-between items-center">
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-300">Inicio</a>
            <a href="#" className="hover:text-blue-300">Servicios</a>
            <a href="#" className="hover:text-blue-300">Contacto</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
