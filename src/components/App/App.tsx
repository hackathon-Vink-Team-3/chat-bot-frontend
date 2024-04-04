import Main from '../Main/Main';
import './App.css';
import * as Api from './../../utils/utils';
import { useEffect, useState } from 'react';

export default function App() {
  const [chat, setChat] = useState('');
  const [dialog, setDialog] = useState('');

  console.log('dialog: ', dialog);

  const postChat = () => {
    // Получаем данные чата из локального хранилища
    const storedChat = localStorage.getItem('chat');
    if (storedChat) {
      setChat(storedChat);
    } else {
      // Если данных чата нет в локальном хранилище, делаем POST запрос на сервер
      Api.postChat()
        .then((data) => {
          setChat(data.id);
          console.log('dataGetChats: ', data.id);
          // Сохраняем данные чата в локальное хранилище
          localStorage.setItem('chat', data.id);
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  useEffect(() => {
    postChat();
    if (chat) {
      Api.getDialog(chat)
        .then((data) => {
          setDialog(data);
          console.log('data: ', data);
        })
        .catch((error) => {
          console.error(error);
        });
      postDialog(chat);
    }
  }, [chat]);

  const postDialog = (chat_uuid: string) => {
    Api.postDialog(chat_uuid)
      .then((data) => {
        console.log('Dialog posted successfully:', data);
      })
      .catch((error) => console.error('Error posting dialog:', error));
  };

  return (
    <div className='body'>
      <Main />
    </div>
  );
}

// useEffect(() => {
//   Api.postChat()
//     .then((data) => {
//       postChats(data);
//       console.log('chat_id: ', data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, []);

//   useEffect(() => {
//     Api.postChat().then((id) => {
//       console.log('chat_uuid: ', id);
//       Api.getChats(id)
//         .then((data) => {
//           postChats(data);
//           console.log('dataMess: ', data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     });
//   }, []);

//   return (
//     <div className='body'>
//       <Main />
//     </div>
//   );
// }

//   useEffect(() => {
//     Api.getChats()
//       .then((data) => {
//         setChats(data);
//         console.log('data: ', data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const postChat = () => {
//     Api.postChat()
//       .then(data => {
//         console.log('data:', data);
//       })
//       .catch(error => console.error('Error:', error));
//   };

//   return (
//     <div className='body'>
//      <Main postChat={postChat}/>
//     </div>
//   );
// }

// useEffect(() => {
//   Api.getChats()
//     .then((data) => {
//       setChats(data);
//       console.log('dataGetChats: ', data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, []);

// useEffect(() => {
//   Api.postChat()
//     .then(chatId => {
//       console.log('chatId:', chatId);
//       return Api.getChats(chatId);
//     })
//     .then(info => {
//       console.log('info:', info);
//     })
//     .catch(error => console.error('Error:', error));
// },  []);
