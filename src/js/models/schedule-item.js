let ScheduleItem = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: '',
    type: 'html',
    text: '',
    timestamp: 0,
    start: '',
    end: '',
    placeID: 0,
    location: '',
    dayID: 0
  },
  syncMap: {
    ID: 'id',
    NAME: 'name',
    TEXT_TYPE: 'type',
    TEXT: 'text',
    TIMESTAMP_X: 'timestamp',
    TIME_START: 'start',
    TIME_END: 'end',
    PLACE_ID: 'placeID',
    PLACE_STR: 'location',
    DAY_ID: 'dayID'
  },
  sync: Backbone.localforage.sync('schedule-item')
});

export default ScheduleItem;