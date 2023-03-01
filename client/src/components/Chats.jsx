import { UseUser } from "../context/UserProvider";
import { UseChat } from "../context/ChatProvider";
import { useEffect } from "react";
import {UseMessages} from "../context/MessagesProvider";


function Chats() {
  const {setmessages}=UseMessages();
  const { users, user, updatelist } = UseUser();
  const {
    conversation,
    setUserOrigin,
    setUserDestination,
    toGeneral,
    setStatus,
    status,
  } = UseChat();
  const desactived =
    "my-4 mx-4 p-4 rounded-md table text-left text-2xl h-auto bg-neutral-600";
  const actived =
    "my-4 mx-4 p-4 rounded-md table text-left text-2xl h-auto ";

  useEffect(() => {
    setUserOrigin(user);
    updatelist();
  }, [status]);

  const handleOnClickChat = (e) => {
    if (e.target.id == conversation.to.id) {
      toGeneral();

      setmessages([]);
      setStatus(false);
    } else {

      
      setmessages([]);
      e.target.className = actived;
      setTimeout(() => {
        e.target.className = desactived;
      }, 100);
      setUserDestination({
        id: e.target.id,
        username: e.target.textContent,
      });
      setStatus(true);
    }
  };

  return (
    <>
      <ul className=" h-full w-6/6 overflow-y-auto flex flex-col">
        {users.map((chat, index) => {
          if (chat.id == user.id) {
            if (users.length == 1) {
              return (
                <>
                  <p className="p-5 text-2xl">
                    Chats diposnibles para: {user.username}
                  </p>
                  <p className="p-5 text-2xl">No hay contactos disponibles</p>
                </>
              );
            }
            return <></>;
          } else {
            return (
              <li
                onClick={handleOnClickChat}
                id={chat.id}
                className={desactived}
              >
                {chat.username}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default Chats;
