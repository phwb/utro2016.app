'use strict';

import Page from '../views/polls/detail';

module.exports = function (container, {id}) {
  if (!id) {
    return false;
  }

  let page = new Page({
    el: container,
    id: id
  });
  page.render();

  return page;
};
