'use strict';

import {initRouter, initSync} from './app/helpers';

// первичная настройки подключения к БД
let lf = Backbone.localforage.localforageInstance;
lf.config({
  name: 'utro2016'
});

// инициализация роутера
initRouter();

// установка начальных параметров Framework7
// при чем инициализация в самом низу скрипта
let app = new Framework7({
  swipePanel: 'left',
  init: false
});

// создаем главную (и единственную) вьюшку приложения
app.addView('.view-main', {
  dynamicNavbar: true
});

// начало синхронизации
initSync(function () {
  // где то по пути инициализируем само приложение
  app.init();
});
