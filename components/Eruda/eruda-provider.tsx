import dynamic from "next/dynamic";

// Importación dinámica del componente Eruda
const Eruda = dynamic(() => import("../components/Eruda"), {
  ssr: false, // Evitar la renderización del lado del servidor
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Eruda>
      {/* Aquí se renderiza el contenido de la página */}
      <div>{children}</div>
    </Eruda>
  );
};

export default Layout;
