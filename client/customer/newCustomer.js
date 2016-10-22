Template.NewCustomer.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('newCustomer');
	});
})


Template.NewCustomer.helpers({
	customers: () => {
		return Customer.find();
	}
});