import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/configStore';
import Cookies from 'universal-cookie';

import './assets/scss/main.scss';

export const cookies = new Cookies();
export function sendNotification(title, options) {
  // Проверим, поддерживает ли браузер HTML5 Notifications
  if (!('Notification' in window)) {
    alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
  }

  // Проверим, есть ли права на отправку уведомлений
  else if (Notification.permission === 'granted') {
    // Если права есть, отправим уведомление
    var notification = new Notification(title, options);
  }

  // Если прав нет, пытаемся их получить
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // Если права успешно получены, отправляем уведомление
      if (permission === 'granted') {
        var notification = new Notification(title, options);
      } else {
        alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
      }
    });
  } else {
    // Пользователь ранее отклонил наш запрос на показ уведомлений
    // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
