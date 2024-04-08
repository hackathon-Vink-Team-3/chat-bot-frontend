export const BASE_URL = 'https://vink-chat.ddns.net/';

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getHistoryDialog = (chat_uuid: string, id: string) => {
  return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/dialog/${id}`, {
    method: 'GET',
  }).then(getResponseData);
};

export const postChat = () => {
  return fetch(`${BASE_URL}/api/v1/chat/`, {
    method: 'POST',
  }).then(getResponseData);
};

export const getChat = (id: string) => {
  return fetch(`${BASE_URL}/api/v1/chat/${id}/`, {
    method: 'GET',
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
