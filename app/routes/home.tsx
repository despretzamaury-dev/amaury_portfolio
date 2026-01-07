import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Amaury Despretz | Portfolio" },
    { name: "description", content: "Portfolio de Amaury Despretz" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 gap-8 p-8">
      {/* Image placeholder */}
      <div className="w-48 h-48 rounded-full bg-white/20 border-4 border-white flex items-center justify-center overflow-hidden">
        <span className="text-white/60 text-sm text-center px-4">
          Ajouter une photo
        </span>
      </div>

      {/* Name */}
      <h1 className="text-white text-5xl md:text-6xl font-bold font-sans text-center">
        Amaury Despretz
      </h1>
    </div>
  );
}
