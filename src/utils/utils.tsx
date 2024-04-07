export const BASE_URL = 'http://127.0.0.1:8000';

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
  return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/dialog/`, {
    method: 'GET',
  }).then(getResponseData);
};

export const postDialog = (chat_uuid: string) => {
  return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/dialog/`, {
    method: 'POST',
  }).then(getResponseData);
};

export const postMessage = (chat_uuid: string, messageText: string) => {
  return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/message/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: messageText }),
  }).then(getResponseData);
};