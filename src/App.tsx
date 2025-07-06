import { useState } from 'react';
import './App.css';
import CardFly from './components/CardFly';

function App() {
  const [countLikes, setCountLikes] = useState<number>(0);
  const [countDisLikes, setCountDisLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);

  const handleLike = (): void => {
    setLiked(true);
    setDisliked(false);
    setCountLikes((prev) => prev + 1);
    if (countDisLikes > 0) {
      setCountDisLikes((prev) => prev - 1);
    }
  };

  const handleDislike = (): void => {
    setDisliked(true);
    setLiked(false);
    setCountDisLikes((prev) => prev + 1);
    if (countLikes > 0) {
      setCountLikes((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sistema de Likes e Dislikes
          </h1>
          <p className="text-gray-600 text-lg">
            Interaja com o conteúdo usando os botões de curtir e não curtir
          </p>
        </div>
        
        <div className="flex justify-center">
          <CardFly
            likes={countLikes}
            dislikes={countDisLikes}
            liked={liked}
            disliked={disliked}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        </div>
      </div>
    </div>
  );
}

export default App;