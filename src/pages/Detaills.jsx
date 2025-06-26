import React from 'react';
import { useContext } from 'react';
import { Mycontext } from '../context/Index';
import { useParams, useNavigate } from 'react-router-dom';
import Images from '../constants/Images';

const Detaills = () => {
  const { Databooks } = useContext(Mycontext);
  const { id } = useParams();
  const navigate = useNavigate();

  const dbooks = Databooks.find((e) => e.id == id);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="bg-amber-500/50 w-[80vw] h-[90vh] flex rounded-2xl shadow-xl overflow-hidden relative">
        
       
            <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
        >
          back
        </button>

        {/* *********/}
        <div className="w-[40vw] h-[90vh] bg-amber-950 p-4">
          <img
            src={Images[dbooks.photo] ?? dbooks.photo}
            alt={dbooks.name}
            className="w-full h-full  rounded-lg"
          />
        </div>

        {/* ***********/}
        <div className="flex flex-col items-center w-[60%] justify-center gap-8 p-6 text-black">
          <h1 className="text-[28px] font-bold uppercase">{dbooks.name}</h1>

          <div className="flex justify-between w-full px-4">
            <div>
              <h1 className="font-medium">Author: {dbooks.author}</h1>
              <h1 className="font-medium text-gray-600 italic">{dbooks.type}</h1>
            </div>
            <h1 className="font-semibold text-xl">{dbooks.price}</h1>
          </div>

          <div className="border-2 border-amber-800 bg-white/80 p-7 rounded-md w-full">
            <h1 className="font-medium text-justify">{dbooks.description}</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Detaills;
