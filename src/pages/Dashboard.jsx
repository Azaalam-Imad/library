import React, { useContext, useState } from "react";
import "../App.css";
import Icons from "../constants/Icons";
import Images from "../constants/Images";
import { Mycontext } from "../context/Index";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // hadi mohima o matnsach import dyalha
  const { Databooks,setMostakhdim,mostakhdim,nname,author,cover,setAuthor,setCover,setNname,type, setType, price, setPrice, description, setDescription,add,ImageChange,preview} = useContext(Mycontext);
  // ***************
  console.log(Databooks);
  const [showModal, setShowModal] = useState(false);
  const naviga = useNavigate()

  const [recher,setRecher]= useState("")
  const [buton,setButon] = useState(false)
  

 const resulrech = Databooks.filter((val) => val.name.toLowerCase().includes(recher.toLowerCase())) 

 const buttonRechech = () =>{
      setButon(!buton)

 }




  return (
    <div className="flex">
      {/* sidebar*************** */}
      <div className=" w-[25vw] relative h-full">
        <div className="w-[25vw] h-[90vh] pl-[10px] pt-[15px] fixed top-0 left-0">
          <h1 className="font-bold pl-15 text-[20px] pb-8 ">THE BOOKS</h1>
          <h2 className="font-bold text-gray-500">Menu</h2>
          <div className="flex flex-col  h-[90%] gap-10 pt-4">
            <div className="flex flex-col gap-3 pt-2 border-b-2 w-[70%] pb-[35px] border-gray-500/30">
              <div className="flex items-center gap-3 font-bold iconSidBar text-gray-500 ">
                <span className="bg-gray-300/30 p-1 rounded-[8px]">
                  {
                    <Icons.IoHomeOutline className="text-[20px] text-gray-500 icsid" />
                  }
                </span>
                Discover
              </div>
              <div className="flex items-center gap-3 font-bold iconSidBar text-gray-500">
                <span className="bg-gray-300/30 p-1 rounded-[8px]">
                  {
                    <Icons.BiCategory className="text-[20px] text-gray-500 icsid" />
                  }
                </span>
                Category
              </div>
              <div className="flex items-center gap-3 font-bold iconSidBar text-gray-500">
                <span className="bg-gray-300/30 p-1 rounded-[8px]">
                  {
                    <Icons.IoLibraryOutline className="text-[20px] text-gray-500 icsid" />
                  }
                </span>
                My Library
              </div>
              <div className="flex items-center gap-3 font-bold iconSidBar text-gray-500">
                <span className="bg-gray-300/30 p-1 rounded-[8px]">
                  {
                    <Icons.FaFileDownload className="text-[20px] text-gray-500 icsid" />
                  }
                </span>
                Download
              </div>
              <div className="flex items-center gap-3 font-bold iconSidBar text-gray-500">
                <span className="bg-gray-300/30 p-1 rounded-[8px]">
                  {
                    <Icons.MdFavorite className="text-[20px] text-gray-500 icsid" />
                  }
                </span>
                Favorite
              </div>
            </div>
            <div className="flex flex-col gap-3 border-b-2 w-[70%] pb-[35px] border-gray-500/30">
              <div className="flex items-center gap-3 font-bold iconSidBar text-gray-500 ">
                <span className="bg-gray-300/30 p-1 rounded-[8px]">
                  {
                    <Icons.IoMdSettings className="text-[20px] text-gray-500 icsid" />
                  }
                </span>
                Setting
              </div>
              <div className="flex items-center gap-3 font-bold iconSidBar text-gray-500 ">
                <span className="bg-gray-300/30 p-1 rounded-[8px]">
                  {
                    <Icons.MdLiveHelp className="text-[20px] text-gray-500 icsid" />
                  }
                </span>
                Help
              </div>
              <div onClick={()=>naviga("/")} className="flex items-center gap-3 font-bold iconSidBar text-gray-500 ">
                <span className="bg-gray-300/30 p-1 rounded-[8px]">
                  {
                    <Icons.IoLogOut className="text-[20px] text-gray-500 icsid" />
                  }
                </span>
                Log out
              </div>
            </div>
            <div>BOOK LIBRARY</div>
          </div>
        </div>
      </div>

      {/* ************************** */}
      <div className="w-[100%]  relative ">
        <div className=" w-full h-[65vh] bg-amber-500/50 rounded-bl-[100px] absolute top-0 left-0 flex justify-end  ">
          <div className="flex items-center h-[10vh] gap-4 pr-10">
            <div className="w-[40px] h-[40px] bg-black rounded-[50%]">
                  <img src={Images.avatar} alt="" />
          </div>

                  <p className="font-bold text-[18px]">{mostakhdim.Name}</p>

          </div>
          
        </div>
        <div className=" pl-15 pt-13 w-full h-full absolute top-0 left-0 z-10 flex flex-col gap-15">
          {/* *************** */}
          <div className="flex flex-col gap-6">
            <h1 className="text-black font-bold text-[35px]">Discover</h1>

            {/* input recherche********************************************************** */}
            <div className="relative w-[60%]">
              <input
              value={recher}
                type="text"
                className="bg-white rounded-[10px] h-12 w-full pl-50"
                placeholder="find the book you like..."
                onChange={(e)=>setRecher(e.target.value) }
              />
              <button onClick={()=> buttonRechech()}  className="absolute right-2 top-1 bg-emerald-950 text-white rounded-[10px] h-[80%] px-3 cursor-pointer">
                shearch
                {console.log(buton)
                }
                
              </button>
              <div className="py-1 overflow-x-hidden w-[160px] absolute left-2 top-2.5 border-r-2 border-gray-500">
                <select
                  name=""
                  id=""
                  value=""
                  className="text-gray-500 font-bold   pr-20"
                >
                  <option value="" className="">
                    All Categorues{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* *************************** */}

          <div className="flex flex-col gap-8 ">
            <div className="flex justify-between pr-5">
              <h1 className="font-bold text-black/50 text-[20px]">
                Book Recemendation
              </h1>
              <button   onClick={() => setShowModal(true)} className="bg-white px-4 rounded-[6px] font-bold cursor-pointer">
                Add
              </button>
              {/* modal add books */}
             {showModal && (
  <div className="fixed top-[30px] right-[10vw] w-[70vw] h-[90vh] bg-white rounded-2xl shadow-2xl z-50 p-8 flex flex-col justify-between overflow-y-auto">
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Add a New Book</h2>

      <input
        type="text"
        placeholder="Book Name"
        value={nname}
        onChange={(e) => setNname(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      />

      <input
        type="text"
        placeholder="Type (Genre)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      />

      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      />

      <input
        type="file"
        accept="image/*"
        onChange={ImageChange}
        className="w-full text-gray-700"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        rows={4}
      />
    </div>

    <div className="flex justify-center gap-6 mt-6">
      <button
        onClick={() => setShowModal(false)}
        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition cursor-pointer"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          add();
          setShowModal(false);
        }}
        className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-500/50 transition cursor-pointer"
      >
        Add Book
      </button>
    </div>
  </div>
)}


            </div>

            <div className="flex gap-10 pr-5 overflow-x-hidden  ">
              {(buton?resulrech:Databooks).map((e, index) => (
                <img
                  src={Images[e.photo] ?? e.photo}
                  alt=""
                  className="w-[20vw] h-[50vh] border-4 border-white/0 hover:border-amber-500/50 cursor-pointer "
                  onClick={()=>naviga(`/Dashboard/${e.id}`)
}
                />
                
              ))}
            </div>
          </div>

          {/* ***************** */}

          <div className="flex flex-col gap-8">
            <div className="flex justify-between pr-5">
              <h1 className="font-bold text-black/50 text-[20px]">
                Book Category
              </h1>
              <button className="bg-white px-4 rounded-[6px] font-bold cursor-pointer">
                <Icons.MdOutlineDisplaySettings className="text-[25px]" />
              </button>
            </div>

            <div className=" gap-10 pr-5 grid grid-cols-4">
              {(buton?resulrech:Databooks).map((e, index) => (
                <div className="cursor-pointer" key={index}  onClick={()=>naviga(`/Dashboard/${e.id}`)}>
                  <img
                   src={Images[e.photo] ?? e.photo}
                    alt=""
                    className="w-[20vw] h-[50vh] border-4 border-white/0 hover:border-amber-500/50 "
                  />
                  <p className="text-center font-bold">{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
