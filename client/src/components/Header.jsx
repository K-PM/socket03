import {Link} from "react-router-dom"
import '../assets/css/headerInicio.css'
import {UseMessages} from "../context/MessagesProvider";

import IChat from '../assets/img/heChat.png'
import '../assets/css/headerInicio.css'

function Header() {
    const {setmessages}=UseMessages();
    
    const handleOnClick=()=>{
        setmessages([]);
    }

    return(
        <header className="parteazul">
            <Link to='/menu'><img className="Logo" onClick={handleOnClick} src={IChat}></img></Link>
            <h1 className="nom">KR_PM</h1>
        </header>
    );
}

export default Header