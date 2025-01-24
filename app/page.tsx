"use client"; // Marca este archivo como un Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PayBlock } from "@/components/Pay";

interface Transaction {
  date: string;
  description: string;
  amount: number;
  token: string;
}

export default function Home() {
  const router = useRouter();
  const [history, setHistory] = useState<Transaction[]>([]);
  const [showIframe, setShowIframe] = useState(false);
  const [currentSection, setCurrentSection] = useState<"home" | "pagos" | "vender" | "support">("home");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVerification = () => {
    router.push("https://twdnrdzqthbdikjy.vercel.app/");
  };

  const handleTransaction = (transaction: { description: string; amount: number; token: string }) => {
    const newEntry: Transaction = {
      date: new Date().toLocaleString(),
      ...transaction,
    };
    setHistory((prev) => [newEntry, ...prev]);
  };

  const navigateToSupport = () => {
    window.open("https://wa.me/573248092374", "_blank");
  };

  const handleVenderClick = () => {
    setShowIframe(true);
    setCurrentSection("vender");
  };

  const changeSection = (section: "home" | "pagos" | "vender" | "support") => {
    setCurrentSection(section);
  };

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Orbital-X</h1>
        <p className="text-sm">Realiza pagos, verifica tu identidad o vende fácilmente</p>
      </header>

      <main className="flex-grow p-8 transition-all duration-500 ease-in-out">
        {currentSection === "home" && (
          <div className="w-full max-w-3xl space-y-12">
            <section className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold mb-4">¿Qué deseas hacer?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleVerification}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md"
                >
                  Verificar Identidad
                </button>
                <button
                  onClick={() => changeSection("pagos")}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
                >
                  Realizar un Pago
                </button>
                <button
                  onClick={handleVenderClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md"
                >
                  Vender
                </button>
              </div>
            </section>

            {/* Sección de Videos */}
            <section className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Videos</h2>
              <div className="relative">
                <div className="slider-container overflow-x-scroll flex space-x-4">
                  {["bWnJD9-A1Rw", "GHstipo-hCM", "BzX8Yt7YhCw", "Uz8pmMyGZFU", "X1Wt0FQYvt8"].map((videoId) => (
                    <div key={videoId} className="flex-shrink-0">
                      <button
                        onClick={() => handleVideoSelect(videoId)}
                        className={`w-72 h-48 bg-gray-200 rounded-lg ${
                          selectedVideo === videoId ? "border-4 border-blue-500" : ""
                        }`}
                      >
                        {selectedVideo === videoId ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title={`Video ${videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div className="w-full h-full flex justify-center items-center text-gray-500">
                            <span>Seleccionar Video</span>
                          </div>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {currentSection === "pagos" && (
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Realiza Pagos</h2>
            <p className="text-sm text-gray-600 mb-4">
              Envía y recibe tokens de manera segura utilizando Orbital-X.
            </p>
            <PayBlock onTransaction={handleTransaction} />
          </section>
        )}

        {currentSection === "vender" && showIframe && (
          <section className="bg-gray-100 p-6 rounded-lg shadow-md w-full h-[calc(100vh-100px)] overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Vender</h2>
            <iframe
              src="https://wallet-bussines.github.io/index8.html"
              title="Vender"
              className="w-full h-full border-0"
            />
          </section>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md">
        <div className="flex justify-around py-2">
          <button onClick={() => changeSection("home")} className="text-gray-600 hover:text-blue-600">
            Home
          </button>
          <button onClick={() => changeSection("pagos")} className="text-gray-600 hover:text-blue-600">
            Pagos
          </button>
          <button onClick={handleVenderClick} className="text-gray-600 hover:text-blue-600">
            Vender
          </button>
          <button onClick={navigateToSupport} className="text-gray-600 hover:text-blue-600">
            Soporte
          </button>
        </div>
      </nav>
    </div>
  );
              }
