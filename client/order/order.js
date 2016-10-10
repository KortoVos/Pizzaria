Meteor.subscribe('order');

Template.Order.helpers({
	order: () => {
		return Order.find({});
	}
});