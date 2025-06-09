export default function WelcomePage() {
    return (
      <div className="min-h-screen flex flex-col px-3 justify-center items-center pt-10 bg-gradient-to-b from-[#F0F9FF] to-[#FFFFFF] shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        
        {/* Logo carré avec coins arrondis et ombre */}
        <div className="w-16 h-16 rounded-[20px] bg-gradient-to-b from-[#4daaff] to-[#2563eb] flex items-center justify-center shadow-md">
          <span className="text-white text-3xl font-bold">Z</span>
        </div>
  
        {/* Titre et sous-texte */}
        <div className="flex-1 flex-col items-center text-center mt-5">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 font-inter">Bienvenue sur Zaylio</h1>
          <p className="text-gray-600 text-sm max-w-xs mb-8 font-inter mt-4">
            L’assistant simple et intelligent pour vos revenus.
          </p>
        </div>
        
      </div>
    );
  }
  