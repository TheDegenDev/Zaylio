export default function WelcomePage() {
    const features = [
      {
        title: "Suivi en temps réel",
        description: "Calculez votre salaire jour après jour",
        icon: "/suiviee.png",
      },
      {
        title: "Analyses détaillées",
        description: "Visualisez l'évolution de vos revenus",
        icon: "/analysee.png",
      },
      {
        title: "Calcul complet",
        description: "Heures sup, indemnités, primes et plus",
        icon: "/cal.png",
      },
    ];
  
    return (
      <div className="min-h-screen flex flex-col justify-between px-4 py-10 bg-gradient-to-b from-[#F0F9FF] to-[#FFFFFF]">
  
        {/* Top Content */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-16 h-16 rounded-[20px] bg-gradient-to-b from-[#4daaff] to-[#2563eb] flex items-center justify-center shadow-md">
            <span className="text-white text-3xl font-bold">Z</span>
          </div>
  
          {/* Titre + Sous-titre */}
          <div className="text-center mt-6">
            <h1 className="text-2xl font-bold text-gray-900">Bienvenue sur Zaylio</h1>
            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              L'assistant simple et intelligent pour vos revenus.
            </p>
          </div>
  
          {/* Blocs Fonctionnalités */}
          <div className="w-full max-w-md mt-10 space-y-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-4 
                           shadow-[0_6px_20px_rgba(0,0,0,0.05)] 
                           border border-[#d0e2ff] flex items-center gap-6 transition hover:shadow-md"
              >
                {/* Icône à gauche */}
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
  
                {/* Texte centré dans tout le bloc */}
                <div className="flex-1 flex flex-col items-center text-center pr-14">
                  <h3 className="text-gray-900 text-base font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* BOUTON EN BAS */}
        <div className="w-full max-w-xs mx-auto mt-5">
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
  