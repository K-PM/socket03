import Chats from "./Chats";
import { UseChat } from "../context/ChatProvider";
import ViewChat from "./ViewChat";
import { UseUser } from "../context/UserProvider";

function Inbox() {
    const {user}=UseUser();
    const {status}=UseChat();
    
    return ( 
        <>  
            <div className="h-screen flex flex-row items-center justify-center">
                <div className=" h-5/6 w-1/6 mx-3 justify-center">
                    <Chats/>
                </div>
                <div className="h-5/6 w-3/6">
                    {status ? (<ViewChat/>): (<p className="p-5 text-2xl items-center justify-center">Select a chat: {user.username}</p>)}
                </div>
            </div>

        </> 
    );
}

export default Inbox;