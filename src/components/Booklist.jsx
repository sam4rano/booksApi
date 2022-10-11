import React, { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../Api";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const Booklist = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="booklist">
      {books.map((book) => (
        <div key={book.id} className="flex flex-col justify-center items-center m-sm text-center">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img className="w-[300px] h-[300px] transition ease-in-out hover:-translate-y-1 hover:scale-110 hover: duration-300"
              src={book.image_url}
              alt="#"
              onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button className='w-[300px] text-lg m-lg items-center p-[12px] bg-black text-white rounded-lg' onClick={() => removeFromFavorites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button className='w-[300px] text-lg m-lg items-center p-[12px] bg-black text-white rounded-lg' onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booklist;
