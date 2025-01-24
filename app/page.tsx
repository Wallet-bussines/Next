import { PayBlock } from "@/components/Pay";
import Link from "next/link";
import { Home, DollarSign, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-3 pb-20">
        <PayBlock />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16">
        <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <Home size={24} />
          <span className="text-xs mt-1">Pagos</span>
        </Link>
        <Link
          href="https://wallet-bussines.github.io/index8.html"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <DollarSign size={24} />
          <span className="text-xs mt-1">Vender</span>
        </Link>
        <a href="https://wa.me/573248092374" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <MessageCircle size={24} />
          <span className="text-xs mt-1">Soporte</span>
        </a>
      </nav>
    </>
  );
}
