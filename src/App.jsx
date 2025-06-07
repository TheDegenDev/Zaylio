import { useEffect, useState } from "react";

export default function App() {
  const [step, setStep] = useState("splash");
  const [tauxHoraire, setTauxHoraire] = useState("");
  const [options, setOptions] = useState({
    primePanier: false,
  });
  const [showExtras, setShowExtras] = useState(false);
  const [extraValues, setExtraValues] = useState({});

  useEffect(() => {
    if (step === "splash") {
      const timer = setTimeout(() => {
        const isFirstVisit = !localStorage.getItem("zaylioSetupDone");
        setStep(isFirstVisit ? "config" : "welcome");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  if (step === "splash") {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center animate-fade-in-out">
        <h1 className="text-5xl font-extrabold tracking-tight transition-all duration-1000 ease-in-out" style={{ fontFamily: 'system-ui, sans-serif' }}>Zaylio</h1>
      </div>
    );
  }

  if (step === "welcome") {
    return (
      <div className="h-screen bg-black text-white flex flex-col justify-center items-center px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-blue-600 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-white text-3xl font-semibold tracking-tight">Zaylio</h1>
        </div>
        <div className="mt-24 w-full max-w-md">
          <button
            onClick={() => setStep("config")}
            className="w-full bg-neutral-900 text-white text-base font-medium py-3 rounded-xl hover:bg-neutral-800 transition"
          >
            Continuer
          </button>
        </div>
      </div>
    );
  }

  if (step === "config") {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center">Configurer votre contrat</h2>

          <div>
            <label className="block mb-2 text-sm">Taux horaire (€)</label>
            <input
              type="number"
              value={tauxHoraire}
              onChange={(e) => setTauxHoraire(e.target.value)}
              className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
              placeholder="Ex : 14.50"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Choisissez ce que vous souhaitez inclure :</label>
            <div className="bg-gray-800 rounded p-4 space-y-2">
              <label className="flex items-center">
                <input type="checkbox" checked={options.primePanier} onChange={() => setOptions({ ...options, primePanier: !options.primePanier })} className="mr-2" />
                Prime de panier
              </label>
            </div>

            <div className="mt-4">
              <p className="text-sm mb-2">Voulez-vous en ajouter d'autres ?</p>
              <button
                onClick={() => setShowExtras(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Ajouter
              </button>
            </div>

            {showExtras && (
              <div className="space-y-4 mt-4">
                {[
                  { key: 'ifm', label: 'IFM (Indemnité Fin de Mission)' },
                  { key: 'icp', label: 'ICP (Congés Payés)' },
                  { key: 'primePresence', label: 'Prime de présence' },
                ].map(({ key, label }) => (
                  <div key={key}>
                    <label className="block mb-1 text-sm">{label}</label>
                    <input
                      type="number"
                      value={extraValues[key] || ""}
                      onChange={(e) => setExtraValues({ ...extraValues, [key]: e.target.value })}
                      className="w-full bg-gray-800 text-white p-3 rounded border border-gray-600"
                      placeholder="Ex : 3.50"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            className="bg-blue-600 text-white w-full py-3 rounded text-lg hover:bg-blue-700 transition"
            onClick={() => {
              console.log("Taux horaire :", tauxHoraire, "Extras :", extraValues);
              localStorage.setItem("zaylioSetupDone", "true");
              setStep("welcome");
            }}
          >
            Continuer
          </button>
        </div>
      </div>
    );
  }

  return null;
}
