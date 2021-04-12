import React from 'react';

export default function Other() {
  return (
    <div className="page page-other">
      <div className="what-newBlock">
        Список обновлений:
        <div>
          <div className="what-newBlock_date">30.03.2021</div>
          <div className="what-newBlock_disc">
            <div>Сертификат обновлен.</div>
          </div>
        </div>
        <div>
          <div className="what-newBlock_date">04.03.2021</div>
          <div className="what-newBlock_disc">
            <div>
              Добавлен счетчик просмотров на записях
              <br />
              Исправлены баги.
            </div>
          </div>
        </div>
        <div>
          <div className="what-newBlock_date">03.03.2021</div>
          <div className="what-newBlock_disc">
            <div>
              Личный кабинет
              <br />
              Полное расписание
              <br />
              На главной отображаются только актуальные новости
              <br />
              <div>Push-уведомления о последних новостях</div>
              <div>
                Возможность отметиться о том, что д/з выполнено (после этого на карточке с домашним
                заданием появляется кружочек с твоей фотографией) <br />
                <i>P.S. Для этого нужно авторизироваться на сайте</i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="what-newBlock_date">20.12.2020</div>
          <div className="what-newBlock_disc">
            <div>
              Рядом с расписанием добавлен второй кружок красного цвета - он открывает окно с
              расписанием всех КР и зачетов (добавлено временно, исчезнет после сдачи последнего
              предмета)
            </div>
          </div>
        </div>
        <div>
          <div className="what-newBlock_date">18.12.2020</div>
          <div className="what-newBlock_disc">
            <div>
              На странице "Домашка" добавлена анимация наведения на блоки, аналогичная странице
              "Главная"
            </div>
          </div>
        </div>
        <div>
          <div className="what-newBlock_date">17.12.2020</div>
          <div className="what-newBlock_disc">
            <div>
              Сайту присвоен домен group0384.ru
              <br />
              Установлен SSL сертификат, соединение защищено
            </div>

            <div>Исправлены баги с отображением расписания в мобильной версии. </div>
          </div>
        </div>
        <div>
          <div className="what-newBlock_date">16.12.2020</div>
          <div className="what-newBlock_disc">
            <div>
              Теперь на странице "Главная" в правом верхнем углу каждого блока показывается
              количество оставшегося времени до того, как информация перестанет быть актуальной
            </div>
          </div>
        </div>
        <div>
          <div className="what-newBlock_date">14.12.2020</div>
          <div className="what-newBlock_disc">
            <div>
              Изменен внешний вид страницы "Главная" (теперь отображается по три блока информации,
              для удобства, так же, уменьшено количество выводимого текста на превью блока, так что
              не забывайте кликать и просматривать информацию целиком)
            </div>
            <div>Добавлена анимация при наведении на блок на странице "Главная"</div>
            <div>Адаптировано под мобильные устройства*</div>
          </div>
        </div>
        <div>
          <div className="what-newBlock_date">30.11.2020</div>
          <div className="what-newBlock_disc">
            <div>Запуск сайта</div>
          </div>
        </div>
      </div>
    </div>
  );
}
