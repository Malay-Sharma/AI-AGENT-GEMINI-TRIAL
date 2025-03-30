import { Link, useLocation } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  const location = useLocation();
  const currentChatId = location.pathname.split("/").pop();

  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/explore">Explore SUPER AI</Link>
      <Link to="/contacts">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((chat) => (
                <Link 
                  to={`/dashboard/chats/${chat._id}`} 
                  key={chat._id}
                  className={chat._id === currentChatId ? 'active-chat' : ''}
                >
                  {chat.title}
                </Link>
              ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to SUPER AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;