Template.Order.onCreated(function () {
	var self = this;
	self.autorun(function () {
		var id = FlowRouter.getParam('id');
		self.subscribe('order',id);
		self.subscribe('customers');
		self.subscribe('recipes');
	});
})


Template.Order.helpers({
	order: () => {
		var id = FlowRouter.getParam('id');
		return Order.findOne({_id: id});
	}
});