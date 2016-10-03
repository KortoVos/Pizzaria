Meteor.publish('Customer',function(){
	return Customer.find();
});