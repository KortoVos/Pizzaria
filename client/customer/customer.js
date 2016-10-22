
Template.Customer.onCreated(function () {
	var self = this;
	self.autorun(function () {
		var id = FlowRouter.getParam('id');
		self.subscribe('customer',id);
	});
})

Template.Customer.helpers({
	customer: () => {
		var id = FlowRouter.getParam('id');
		return Customer.findOne({_id: id});
	}
}); 