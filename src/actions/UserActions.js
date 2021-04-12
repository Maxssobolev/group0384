import { cookies } from '../index.js';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function handleLogin() {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });

    /*eslint-disable*/
    VK.Auth.login((r) => {
      if (r.session) {
        let userData = r.session.user;

        VK.Api.call('users.get', { user_ids: userData.id, fields: 'photo_max', v: 5.52 }, (r) => {
          let photos = r.response[0].photo_max;

          const sended_data = {
            id: userData.id,
            name: userData.first_name,
            last_name: userData.last_name,
            photo: photos,
          };

          async function postData(data = {}) {
            const response = await fetch('/users/login', {
              method: 'POST', // или 'PUT'
              body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
              headers: {
                'Content-Type': 'application/json',
              },
            });

            return await response.json();
          }

          postData(sended_data).then((data) => {
            cookies.set('userData', { ...userData, photos }, { path: '/' });

            dispatch({
              type: LOGIN_SUCCESS,
              payload: { ...userData, photos },
            });
          });
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        });
      }
    }, 4); // запрос прав на доступ к photo
    /*eslint-enable*/
  };
}
