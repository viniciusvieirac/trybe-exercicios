import { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import mailsList from "./data/messagesList";
import Controls from "./components/Control";
import './App.css'

function App() {
  const [messages, setMessages] = useState(mailsList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({status}) => status === 1);
    if(isAllMessagesRead) {
      alert('Parabéns! Você leu todas as mensagens')
    }
  }, [messages])

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === messageId) {
        return {...message, status: newStatus}
      }
      return message;
    })
    setMessages(updatedMessages);
  }

  const markAllAsRead = () => {
    const allAsRead = messages.map((message) => ({...message, status: 1}))
    setMessages(allAsRead);
  }

  const markAllAsUnRead = () => {
    const allAsRead = messages.map((message) => ({...message, status: 0}))
    setMessages(allAsRead);
  }


  return (
    <div>
      <Header />
      <Controls markAllAsRead={markAllAsRead} markAllAsUnRead={markAllAsUnRead} />
      <List messages={messages} setMessageStatus={setMessageStatus}/>
    </div>
  );
}

export default App;
