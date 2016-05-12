import Contact from '../models/contact';

let Contacts = Backbone.Collection.extend({
  url: '/contacts',
  model: Contact,
  sync: Backbone.localforage.sync('contacts')
});

export default new Contacts();