Template.NewOrder.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('newOrder');
		self.subscribe('customers');
		self.subscribe('recipes');
	});
})


Template.NewOrder.helpers({
	orders: () => {
		return Order.find();
	}
});