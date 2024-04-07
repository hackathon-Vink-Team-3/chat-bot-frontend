import Main from '../Main/Main';
import './App.css';
import * as Api from './../../utils/utils';
import { useEffect, useState } from 'react';

export default function App() {
  const [chat, setChat] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const postChatAndGetDialog = async () => {
      try {
        const storedChat = localStorage.getItem('chat') ?? '';
        let newChatId = '';

        if (storedChat) {
          setChat(storedChat);
          newChatId = storedChat;
        } else {
          const data = await Api.postChat();
          newChatId = data.id;
          localStorage.setItem('chat', newChatId);
          setChat(newChatId);
        }

        await postDialog(newChatId);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    postChatAndGetDialog();
  }, []);

  useEffect(() => {
    if (chat) {
      const newSocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/7df0fef0-13b1-4e7d-b23e-361079ddc89a/dialog/1/`);
      setSocket(newSocket);
    }
  }, [chat]);

  const postDialog = async (chat_uuid: string) => {
    try {
      const data = await Api.postDialog(chat_uuid);
      console.log('Dialog posted successfully:', data);
    } catch (error) {
      console.error('Error posting dialog:', error);
    }
  };

  const sendMessage = async() => {
    try {
      const messageText = 'Привет!'; // Замените на текст вашего сообщения
      if (socket) {
        socket.send(JSON.stringify({ text: messageText }));
        console.log('Message sent successfully');
      } else {
        console.error('WebSocket connection not established');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='body'>
      <Main sendMessage={sendMessage}/>
    </div>
  );
}
