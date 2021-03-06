'use strict';

/**
 * @param {string} type - может быть двух вариантов text или html
 */
let NewsItem = Backbone.Model.extend({
  defaults: {
    id: 0,
    active: true,
    name: 'Без имени',
    date: 0,
    timestamp: 0,
    text: '',
    type: 'text',
    previewPicture: '',
    detailPicture: '',
    sort: 10
  },
  syncMap: {
    NAME: 'name',
    ID: 'id',
    ACTIVE_FROM: 'date',
    TIMESTAMP_X: 'timestamp',
    DETAIL_TEXT: 'text',
    DETAIL_TEXT_TYPE: 'type',
    PREVIEW_PICTURE: 'previewPicture',
    DETAIL_PICTURE: 'detailPicture',
    SORT: 'sort'
  },
  sync: Backbone.localforage.sync('news-item')
});

export default NewsItem;
