import NewPrompt from '../../components/newPrompt/newPrompt';
import './chatPage.css';
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ChatPage = () => {

  const path = useLocation().pathname;
  const chatId = path.split("/").pop();

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  // console.log(data);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]); // Scroll when data changes

  // Custom renderer for markdown code blocks
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : 'javascript'; // default to javascript

      return !inline ? (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          customStyle={{
            borderRadius: '8px',
            margin: '16px 0',
            backgroundColor: '#2c2937'
          }}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data?.history?.map((message, i) => (
              <>
                {message.img && (
                  <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                    path={message.img}
                    height="300"
                    width="400"
                    transformation={[{ height: 300, width: 400 }]}
                    loading="lazy"
                    lqip={{ active: true, quality: 20 }}
                  />
                )}
                <div className={
                  message.role === "user" ? "message user" : "message"
                } key={i}>
                  <Markdown components={components}>
                    {message.parts[0].text}
                  </Markdown>
                </div>
              </>
            ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="prompt-container">
        {data && <NewPrompt data={data} />}
      </div>
    </div>
  )
}

export default ChatPage