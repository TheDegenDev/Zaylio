export default function WelcomePage() {
    const features = [
      {
        title: "Suivi en temps réel",
        description: "Calculez votre salaire jour après jour",
      },
      {
        title: "Analyses détaillées",
        description: "Visualisez l'évolution de vos revenus",
      },
      {
        title: "Calcul complet",
        description: "Heures sup, indemnités, primes et plus",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-[#FFFFFF] px-4 py-10 flex flex-col items-center">
        
        {/* Logo */}
        <div className="w-16 h-16 rounded-[20px] bg-gradient-to-b from-[#4daaff] to-[#2563eb] flex items-center justify-center shadow-md">
          <span className="text-white text-3xl font-bold">Z</span>
        </div>
  
        {/* Titre + sous-titre */}
        <div className="text-center mt-6">
          <h1 className="text-2xl font-bold text-gray-900">Bienvenue sur Zaylio</h1>
          <p className="text-sm text-gray-600 mt-2 max-w-xs">
            L'assistant simple et intelligent pour vos revenus.
          </p>
        </div>
  
        <div className="w-full max-w-md mt-10 space-y-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl px-5 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.05)] border border-gray-200 transition hover:shadow-md">
              <h3 className="text-gray-900 text-base font-semibold mb-1 text-center">{item.title}</h3>
              <p className="text-sm text-gray-500 text-center">{item.description}</p>
            </div>
          ))}
        </div>
  
        <div className="w-full max-w-sm mt-auto mb-10">
        <button
          className="w-full bg-[#2563eb] text-white font-semibold py-5 rounded-2xl hover:bg-[#1d4ed8] transition"
          onClick={() => console.log("Commencer cliqué")}
        >
          Commencer
        </button>
        </div>
        
      </div>
    );
  }
  