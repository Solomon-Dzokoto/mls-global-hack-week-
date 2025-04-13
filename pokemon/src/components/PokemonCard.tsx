
import { Pokemon } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      <div className="relative overflow-hidden group">
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-emerald-500/5 z-0 
          group-hover:from-emerald-500/20 group-hover:to-emerald-500/10 transition-all duration-500"
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/0 via-white/0 to-emerald-50/30"></div>
        <div className="flex items-center justify-center p-8">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="w-full max-w-[280px] h-auto object-contain transform transition-transform duration-500 
              group-hover:scale-110 group-hover:rotate-2"
          />
        </div>
      </div>

      <div className="p-6 sm:p-8 bg-white/95">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold capitalize text-emerald-700 tracking-tight text-center">
            {pokemon.name}
          </h2>
          <span
            className="inline-flex items-center px-4 py-2 rounded-2xl text-lg font-semibold bg-emerald-50 text-emerald-700
            shadow-sm ring-1 ring-emerald-100/50 transform transition-all duration-300 hover:scale-105"
          >
            #{pokemon.id.toString().padStart(3, "0")}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`pokemon-type-${type.type.name} px-6 py-2 rounded-xl text-sm font-semibold capitalize
                shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer`}
            >
              {type.type.name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div
            className="bg-gradient-to-br from-emerald-50/80 to-emerald-50/50 backdrop-blur-sm p-6 rounded-2xl
            transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ring-1 ring-emerald-100/50"
          >
            <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Abilities
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {pokemon.abilities.map((ability) => (
                <span
                  key={ability.ability.name}
                  className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-emerald-700
                    shadow-sm ring-1 ring-emerald-100/50 transform transition-all duration-300 
                    hover:scale-105 hover:shadow-md hover:bg-emerald-50 cursor-pointer"
                >
                  {ability.ability.name.replace("-", " ")}
                </span>
              ))}
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-emerald-50/80 to-emerald-50/50 backdrop-blur-sm p-6 rounded-2xl
            transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ring-1 ring-emerald-100/50"
          >
            <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-emerald-600 font-medium">Height</span>
                <span
                  className="px-4 py-2 bg-white rounded-xl font-medium text-emerald-700 shadow-sm
                  ring-1 ring-emerald-100/50 transition-all hover:shadow-md"
                >
                  {(pokemon.height / 10).toFixed(1)}m
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-600 font-medium">Weight</span>
                <span
                  className="px-4 py-2 bg-white rounded-xl font-medium text-emerald-700 shadow-sm
                  ring-1 ring-emerald-100/50 transition-all hover:shadow-md"
                >
                  {(pokemon.weight / 10).toFixed(1)}kg
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-gradient-to-br from-emerald-50/80 to-emerald-50/50 backdrop-blur-sm p-6 rounded-2xl
          transform transition-all duration-300 hover:shadow-lg ring-1 ring-emerald-100/50"
        >
          <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Moves
          </h3>
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto custom-scrollbar pr-2 justify-center">
            {pokemon.moves.slice(0, 15).map((move) => (
              <span
                key={move.move.name}
                className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-emerald-700
                  shadow-sm ring-1 ring-emerald-100/50 transform transition-all duration-300 
                  hover:scale-105 hover:shadow-md hover:bg-emerald-50 cursor-pointer"
              >
                {move.move.name.replace("-", " ")}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
