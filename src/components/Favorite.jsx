import React from "react";
import "../App";
import { useAppContext } from "./context/appContext";

const Favorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="w-full min-h-[80vh] grid grid-cols-3 text-center justify-center">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="flex flex-col justify-center items-center m-sm text-center">
            <div>
              <h4 className="font-bold pb-md">{book.title}</h4>
            </div>
            <div>
              <img className="w-[300px] h-[300px] transition ease-in-out hover:-translate-y-1 hover:scale-110 hover: duration-300 rounded-lg" src={book.image_url} alt="#" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button className='w-[300px] text-lg m-lg items-center p-[12px] bg-[#a67c00] text-white rounded-lg' onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button className='w-[300px] text-lg m-lg items-center p-[12px] bg-[#a67c00] text-white rounded-lg' onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1 className="#">You don't have any favorites yet</h1>
      )}
    </div>
  );
};

export default Favorite;
