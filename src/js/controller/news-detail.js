'use strict';

import Page from '../views/news/detail';
import news from '../collections/news';

module.exports = function (container, {id} = {}) {
  if (!id) {
    throw new Error('чтобы посмотреть новость, нужно передать айдишник');
  }

  let model = news.get(id);
  if (!model) {
    throw new Error(`на нашли новость с таким айдишником ${id}`);
  }

  let page = new Page({
    el: container,
    model: model
  });
  page.render();

  return page;
};
