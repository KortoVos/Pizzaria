Meteor.publish('recipes',function(){
	return Recipes.find({author: this.userId})
});

Meteor.publish('customer',function(){
	return Customer.find({author: this.userId})
});

Meteor.publish('order',function(){
	return Order.find({author: this.userId})
});