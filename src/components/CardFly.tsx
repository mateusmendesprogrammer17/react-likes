type Props = {
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
};

export default function CardFly({ likes, dislikes, onLike, onDislike }:Props) {
  const totalVotes = likes + dislikes;
  const likePercentage = totalVotes > 0 ? (likes / totalVotes) * 100 : 0;

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-400 to-green-700 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">
          Tecnologias Emergentes 2025
        </h2>
        <p className="text-blue-100">
          Descubra as principais tendências tecnológicas deste ano
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-700 mb-6 leading-relaxed">
          Inteligência Artificial, Computação Quântica e Realidade Aumentada estão 
          revolucionando a forma como interagimos com a tecnologia. O que você acha 
          dessas inovações?
        </p>

        {/* Stats */}
        {totalVotes > 0 && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Aprovação: {likePercentage.toFixed(1)}%</span>
              <span>Total de votos: {totalVotes}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-700 h-2 rounded-full transition-all duration-500"
                style={{ width: `${likePercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={onLike}
            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            <span className="text-lg">👍</span>
            <span>Curtir</span>
            <span className="bg-green-600 px-2 py-1 rounded-full text-sm font-bold">
              {likes}
            </span>
          </button>
          
          <button
            onClick={onDislike}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            <span className="text-lg">👎</span>
            <span>Não Curtir</span>
            <span className="bg-red-600 px-2 py-1 rounded-full text-sm font-bold">
              {dislikes}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
