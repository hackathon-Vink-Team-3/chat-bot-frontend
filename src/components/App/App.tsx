import Main from '../Main/Main';
import './App.css';
import * as Api from './../../utils/utils';
import { useEffect, useState } from 'react';
import { HistoryItem } from '../IconsContainer/IconsContainer';

export default function App() {
  const [history, getHistory] = useState<HistoryItem[]>([]);
  console.log('history: ', history);
  const [chat, setChat] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);
  console.log('socket: ', socket);

  function sendMessage() {
    const chatId = localStorage.getItem('chatId');
    if (chatId) {
      setChat(chatId);
      console.log('chatId from localStorage: ', chatId);
        Api.getChat(chatId)
        .then((data) => {
          console.log('getChat with ID: ', data);
          getHistory(data.dialogs); 
          console.log('getHistorygetHistorygetHistorygetHistory: ', data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Api.postChat()
        .then((data) => {
          console.log('postChat: ', data);
          setChat(data.id);
          localStorage.setItem('chatId', data.id);
            Api.getChat(data.id)
            .then((data) => {
              console.log('getChat data: ', data);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  useEffect(() => {
    sendMessage();
  }, []);

  useEffect(() => {
    const chatId = localStorage.getItem('chatId');
    if (chatId) {
      Api.getDialog(chatId)
        .then((data) => {
          console.log('GET Dialog: ', data);
        })
        .catch((error) => {
          console.error(error);
        });
      Api.postDialog(chatId)
        .then((data) => {
          console.log('POST Dialog: ', data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [chat]);

    useEffect(() => {
    if (chat) {
      const newSocket = new WebSocket(
        `ws://127.0.0.1:8000/ws/chat/6f95b2ac-d228-45f4-802f-066cb4ad25d5/dialog/3/`
      );
      setSocket(newSocket);
    }
  }, [chat]);

  return (
    <div className='body'>
      <Main sendMessage={sendMessage} history={history} />
    </div>
  );
}
