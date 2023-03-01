import {useNavigate} from "react-router-dom"
import {useEffect, useState } from "react";
import logo from "../assets/img/heChat.png";
import {UseUser} from "../context/UserProvider";

function HomePage() {
  const {user,login}=UseUser();

  const navigate= useNavigate();

  const [placeholderText, setPlaceholderText] = useState("nombre");
  const [name, setName] = useState("");

  useEffect(()=>{
    if(user!=null && user.username!=user.id){
      setTimeout(()=>{navigate("/menu")},200)
    }},[user])

  
  const handleName = (e) => {
    setName(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if(name!=""){
      login(name);
      setName("");
      if(user==null || user.username!=user.id){
        setPlaceholderText("Cambia de nombre, ya esta en uso ese")
      }
    }
  };

  

  return (
    <>
      <div className="h-screen flex justify-evenly items-center flex-row">
        <div className="items-center justify-center">
          <img src={logo} className="w-80 h-auto"></img>
          <p className="text-5xl text-center my-4"></p>
        </div>

        <div className="h-auto  p-4 rounded-lg">
            <form onSubmit={handleSubmit}>
                <p className="text-4xl my-5">Usuario:</p>
                <input value={name} type="text" onChange={handleName} placeholder={placeholderText} className=" text-2xl w-full border-zinc-500 text-black  rounded-lg p-4"></input>
                <input type="submit" className="w-full h-auto p-2 bg-blue-500 my-2 rounded-lg text-2xl"
                    value="ENTRA" ></input>    
            </form>
        </div>
      </div>
    </>
  );
}

export default HomePage;
