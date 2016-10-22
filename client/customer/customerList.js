//Meteor.subscribe('recipes');
Template.CustomerList.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('customers');
	});
})


Template.CustomerList.helpers({
	customers: () => {
		return Customer.find();
	}
});