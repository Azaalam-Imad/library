import { createContext, useState } from "react";
import Data from "../constants/Data";

export const Mycontext = createContext();

export const MyProvider = ({ children }) => {
  // const Databooks = Data.books;
  const [Databooks, setDatabooks] = useState(Data.books);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [cpas, setCpas] = useState("");
  const [lognam, setLognam] = useState("");
  const [logpass, setLogpass] = useState("");
  const [mostakhdim, setMostakhdim] = useState("");
  const [nname, setNname] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("");
  const [index,setIndex] = useState(Databooks.length+1)
  
 let user = {
    Email: email,
    Name: nom,
    Password: password,
    Cpassword: cpas,
  };
  // ***************************
const ImageChange = (e) => {
  const file = e.target.files[0];
  
  
  if (file) {
    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
    // e.target.value = "";
    console.log(imageURL);
  }
};
 
const add = ()=>{
 setIndex(index+1)
   const newBook = {
          name: nname,
          author:author,
          photo: preview,
          type:type,
          price:price,
          description:description,
          id:index
          };
          Databooks.push(newBook); 
          setCover("")
          setAuthor("")
          setNname("")
          setType("")
          setPrice("")
          setDescription("")
}
// ********************************
  const log = (lognam, logpass) => {
    const found = users.find(
      (val) =>
        (val.Email == lognam || val.Name == lognam) && val.Password == logpass
    );
    setMostakhdim(found);
    return !!found;
  };

// ********************************
  const sin = () => {
    if (
      cpas == password &&
      password !== "" &&
      nom.trim() !== "" &&
      email.split("@").length == 2
    ) {
      // users.push(user);
      // darooori ndir noskha 3ad n3adal 3la data ola rada tmchi liya 39al mzyan 3liha
      const updated = [...users];
      updated.push(user);
      setUsers(updated);
      setEmail("");
      setCpas("");
      setPassword("");
      setNom("");
      console.log(users);

      return true;
    }
      
      return false;
    
   
  };
  // *******************************
  const all = {
    Databooks,
    users,
    sin,
    log,
    email,
    nom,
    password,
    cpas,
    setCpas,
    setEmail,
    setNom,
    setPassword,
    setLognam,
    setLogpass,
    lognam,
    logpass,
    setMostakhdim,
    mostakhdim,
    setCover,
    setAuthor,
    setNname,
    cover,
    author,
    nname,
    type, setType,
  price, setPrice,
  description, setDescription,add,preview,setPreview,ImageChange
  };

  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};
