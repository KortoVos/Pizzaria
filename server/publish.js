
// --- Recipe ---
Meteor.publish('recipes',function(){
	return Recipes.find()
});
Meteor.publish('recipe',function(id){
	check(id,String);
	return Recipes.find({_id: id})
});
Meteor.publish('newRecipe',function(){
	return Recipes.find()
});

// --- Customer ---- 

Meteor.publish('customers',function(){
	return Customer.find()
});
Meteor.publish('customer',function(id){
	//check(id,String);
	return Customer.find({_id: id})
});
Meteor.publish('newCustomer',function(){
	return Customer.find()
}); 


// --- Order ---
Meteor.publish('orders',function(){
	return Order.find()
});

Meteor.publish('order',function(id){
	//check(id,String);
	return Order.find({_id: id})
});
Meteor.publish('newOrder',function(){
	return Order.find()
}); 
