//Meteor.subscribe('recipes');
Template.OrderList.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('orders');
	});
})


Template.OrderList.helpers({
	orders: () => {
		return Order.find();
	}
});