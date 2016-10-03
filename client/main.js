import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './newCustomer.html';
import './customerList.html';

AutoForm.setDefaultTemplate('materialize');

Pizza = new Mongo.Collection("Pizza");

Pizza.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Pizza Name",
    max: 200
  },
  price: {
    type: Number,
    label: "Pris in €",
    min: 0
  },
  description: {
    type: String,
    label: "Kurze Beschreibung",
    optional: true,
    max: 1000
  }
}));
