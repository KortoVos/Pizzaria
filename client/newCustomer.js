
Customer = new Mongo.Collection("Customer");

Customer.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "Vorname",
    max: 30
  },
  surName: {
    type: String,
    label: "Nachname",
    max: 40
  },
  birthDate: {
    type: Date,
    label: "Gerburtsdatum",
    optional: true
  },
  Str: {
    type: String,
    label: "Straße",
    max: 40
  },
  nr: {
    type: String,
    label: "Haus Nummer",
    max: 12
  },
  plz: {
    type: String,
    label: "Postleitzahl",
    max: 5
  },
  ort: {
    type: String,
    label: "Ort",
    max: 40
  }
}));