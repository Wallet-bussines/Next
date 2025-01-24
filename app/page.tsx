import { PayBlock } from "@/components/Pay"; // Asegúrate de que el archivo exista y el alias esté bien configurado
import Link from "next/link"; // Importa Link para navegación
import { Home, DollarSign, MessageCircle } from "lucide-react"; // Iconos desde Lucide

export default function Home() {
  return (
    <>
      {/* Contenido principal */}
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-3 pb-20">
        <PayBlock /> {/* Asegúrate de que este componente exista */}
      </main>

      {/* Barra de navegación inferior */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16">
        {/* Enlace a la página principal */}
        <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <Home size={24} />
          <span className="text-xs mt-1">Pagos</span>
        </Link>

        {/* Enlace externo para "Vender" */}
        <Link
          href="https://wallet-bussines.github.io/index8.html"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <DollarSign size={24} />
          <span className="text-xs mt-1">Vender</span>
        </Link>

        {/* Enlace externo a soporte en WhatsApp */}
        <a
          href="https://wa.me/573248092374"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <MessageCircle size={24} />
          <span className="text-xs mt-1">Soporte</span>
        </a>
      </nav>
    </>
  );
}
