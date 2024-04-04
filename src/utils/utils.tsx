export const BASE_URL = 'http://127.0.0.1:8000';
// export const BASE_URL = 'https://be20-95-25-218-131.ngrok-free.app';
// export const TOKEN = 'eb5412dde4a745df4b30b39ccff457978b1b5902';

// const headers = {
//   // authorization: `Token ${TOKEN}`,
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const postChat = () => {
  return fetch(`${BASE_URL}/api/v1/chat/`, {
    method: 'POST',
  }).then(getResponseData);
};


export const getDialog = (chat_uuid: string) => {
  return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/dialog`, {
    method: 'GET',
  }).then(getResponseData);
};


// const getResponseData = (res: Response) => {
//   if (!res.ok) {
//     return Promise.reject(Ошибка: ${res.status});
//   }
//   const cookies = res.headers.get('Set-Cookie'); // Получаем куки из заголовков ответа
//   return res.json().then(data => ({ cookies, data })); // Возвращаем объект с куками и данными
// };

// export const postChat = () => {
//   const cookieValue = 'your_cookie_key=your_cookie_value';
//   return fetch(${BASE_URL}/api/v1/chat/, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Cookie': cookieValue
//     },
//   }).then(getResponseData);
// };



// export const postChat = () => {
//   const cookieValue = 'your_cookie_key=your_cookie_value';
//   return fetch(`${BASE_URL}/api/v1/chat/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Cookie': cookieValue
//     },
//   }).then(getResponseData);
// };


// export const postChat = () => {
//   return fetch(`${BASE_URL}/api/v1/chat/`, {
//     method: 'POST',
//     // headers: {
//     //   ...headers,
//     //   credentials: 'true',
//     // },
//     // headers: {
//     //   credentials: 'true',
//     // },
//   }).then(getResponseData);
//   // .then(data => data.dialogs.chat_id);
// };

// export const getChats = (chat_uuid: string) => {
//   return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/dialog`, {
//     method: 'GET',
//   }).then(getResponseData);
// };

// export const postChat = () => {
//   return fetch(`${BASE_URL}/api/v1/chat/`, {
//     method: 'POST',
//     // headers: {
//     //   ...headers,
//     //   credentials: 'include',
//     // },
//   })
//     .then(getResponseData)
//     .then(data => data.id);
// };

// export const getChats = (chat_uuid: []) => {
//   return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/dialog`, {
//     method: 'GET',
//         // headers: {
//         //   ...headers,
//         //   credentials: 'include',
//         // },
//   }).then(getResponseData);
// };
