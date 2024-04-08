import Main from '../Main/Main';
import './App.css';
import * as Api from './../../utils/utils';
import { useEffect, useState } from 'react';
import { HistoryItem } from '../IconsContainer/IconsContainer';
import { Message } from './../Chat/Chat'

export default function App() {
  const [history, getHistory] = useState<HistoryItem[]>([]);
  const [historyMess, getHistoryMess] = useState<Message[]>([]);
  console.log('historyMess: ', historyMess);
  const [messId, getMessId] = useState<string>('');
  const [chat, setChat] = useState<string>('');
  // const [socket, setSocket] = useState<WebSocket | null>(null);

  function openChat() {
    const chatId = localStorage.getItem('chatId');
    if (chatId) {
      setChat(chatId);
      Api.getChat(chatId)
        .then((data) => {
          getHistory(data.dialogs);
          getMessId(data.dialogs[0].id);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Api.postChat()
        .then((data) => {
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

  function getChat() {
    const chatId = localStorage.getItem('chatId');
    if (chatId !== null) {
      Api.getHistoryDialog(chatId, messId)
        .then((data) => {
          getHistoryMess(data.messages);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error('chatId is null');
    }
  }

  useEffect(() => {
    openChat();
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

  // useEffect(() => {
  //   if (chat) {
  //     const newSocket = new WebSocket(
  //       `ws://127.0.0.1:8000/ws/chat/6f95b2ac-d228-45f4-802f-066cb4ad25d5/dialog/3/`
  //     );
  //     setSocket(newSocket);
  //   }
  // }, [chat]);

  return (
    <div className='body'>
      <Main
        openChat={openChat}
        history={history}
        getChat={getChat}
        historyMess={historyMess}
      />
    </div>
  );
}
