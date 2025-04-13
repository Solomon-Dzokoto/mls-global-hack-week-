import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "./types/pokemon";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchPokemon = async (name: string) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      setPokemon(response.data);
    } catch (err) {
      setError("Pokemon not found! Please try another name.");
      console.log(err);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchPokemon(searchTerm);
    }
  };

  useEffect(() => {
    const getRandomPokemon = async () => {
      const randomId = Math.floor(Math.random() * 898) + 1;
      await searchPokemon(randomId.toString());
    };
    getRandomPokemon();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex flex-col items-center">
      <main className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="text-center w-full mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-600 tracking-tight mb-3 sm:mb-4 
              leading-tight sm:leading-tight">
            Pokemon Explorer
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-700 font-medium mb-6 sm:mb-8
              max-w-2xl mx-auto leading-relaxed">
            Discover the fascinating world of Pokemon!
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter Pokemon name or random number(1-889)..."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl 
                      border-2 border-emerald-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200/50 
                      focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md 
                      bg-white/80 backdrop-blur-sm"
                />
                {loading && (
                  <div className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 
                        border-4 border-emerald-500/30 border-t-emerald-500"></div>
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 text-white rounded-xl sm:rounded-2xl 
                  font-semibold text-base sm:text-lg shadow-lg shadow-emerald-500/20 transform 
                  transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-xl 
                  hover:shadow-emerald-500/30 active:scale-95 disabled:opacity-50 
                  disabled:cursor-not-allowed sm:w-auto w-full backdrop-blur-sm"
              >
                Search
              </button>
            </div>
          </form>
        </header>

        {error && (
          <div className="w-full max-w-md mx-auto mb-6 sm:mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded-r-xl shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 font-medium">{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex justify-center">
          {pokemon && (
            <div className="w-full animate-slideUp">
              <PokemonCard pokemon={pokemon} />
            </div>
          )}
        </div>
      </main>

      <footer className="w-full mt-auto py-6 sm:py-8 border-t border-emerald-100">
        <div className="w-full max-w-4xl mx-auto px-4">
          <p className="text-center text-sm sm:text-base text-emerald-600 font-medium 
            hover:text-emerald-700 transition-colors">
            Created with ❤️ by Solomon Elorm Dzokoto
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
