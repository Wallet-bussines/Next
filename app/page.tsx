"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PayBlock } from "@/components/Pay";

export default function Home() {
  const router = useRouter();
  const [history, setHistory] = useState([]);
  const [showIframe, setShowIframe] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVerification = () => {
    window.location.href = "https://twdnrdzqthbdikjy.vercel.app/";
  };

  const handleTransaction = (transaction: {
    description: string;
    amount: number;
    token: string;
  }) => {
    const newEntry = {
      date: new Date().toLocaleString(),
      ...transaction,
    };
    setHistory((prev) => [newEntry, ...prev]);
  };

  const navigateToSupport = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/573248092374", "_blank");
    }
  };

  const handleVenderClick = () => {
    setShowIframe(true);
    setCurrentSection("vender");
  };

  const changeSection = (section: string) => {
    setCurrentSection(section);
  };

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Orbital-X</h1>
        <p className="text-sm">
          Realiza pagos, verifica tu identidad o vende fácilmente.
        </p>
      </header>

      <main className="flex-grow p-8">
        {/* Secciones de contenido */}
        {currentSection === "home" && (
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">¿Qué deseas hacer?</h2>
            <div className="flex gap-4">
              <button
                onClick={handleVerification}
                className="bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Verificar Identidad
              </button>
              <button
                onClick={() => changeSection("pagos")}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Realizar un Pago
              </button>
              <button
                onClick={handleVenderClick}
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
              >
                Vender
              </button>
            </div>
          </section>
        )}

        {/* Más contenido según la sección */}
      </main>
    </div>
  );
      }
