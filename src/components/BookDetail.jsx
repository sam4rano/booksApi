
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../App"
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../Api';

const BookDetail = () => {

  const [book, setBook] = useState({});

  const {id} = useParams();

  useEffect(()=> {
    axios
    .get(`${BOOK_DETAILS_URL}/${id}`)
    .then((res)=> {
      setBook(res.data);
    })
    .catch((err)=> console.log(err));
  }, [id]);

  return (
    <div className="flex justify-evenly p-md min-h-[80vh]">
      <div className="text-center p-md">
        <h2 className='text-xl p-md font-bold'>{book?.title}</h2>
        <img src={book?.image_url} alt="#" className="w-[300px] h-[300px] transition ease-in-out hover:-translate-y-1 hover:scale-110 hover: duration-300"/>
      </div>
      <div className='flex flex-wrap p-md w-[600px]'>
        <h2 className='font-bold'>Description</h2>
        <p >{book?.description}</p>
        <h2 className='font-semibold'>Authors</h2>
        <p className='font-semibold pl-[10px]'>{book?.authors}</p>
        <h2 className='font-semibold pl-[10px]'>Genres</h2>
        <p className='font-semibold'>{book?.genres}</p>
      </div>
    </div>
  );
}

export default BookDetail;
