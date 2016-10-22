if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go("home");
	});


	Accounts.onLogout(function(){
		FlowRouter.go("StartPage");
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('StartPage')
	}
}]);

FlowRouter.route('/',{
	name:'StartPage',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('home');
		}else{
			BlazeLayout.render('StartPage');
		}
	}
});
FlowRouter.route('/home',{
	name:'home',
	action(){
		BlazeLayout.render('HomeLayout',{main:'Recipes'});
	}
});

// --- Recipe ---
FlowRouter.route('/recipe-book',{
	name:'recipe-book',
	action(){
		BlazeLayout.render('HomeLayout',{main:'Recipes'});
	}
});
FlowRouter.route('/recipe/:id',{
	name:'recipeEdit',
	action(){
		BlazeLayout.render('HomeLayout',{main:'Recipe'});
	}
});
FlowRouter.route('/newrecipe',{
	name:'newrecipe',
	action(){
		BlazeLayout.render('HomeLayout',{main:'NewRecipe'});
	}
});

//--- Customer ---
FlowRouter.route('/customerlist',{
	name:'customer-list',
	action(){
		BlazeLayout.render('HomeLayout',{main:'CustomerList'});
	}
});

FlowRouter.route('/customer/:id',{
	name:'customerEdit',
	action(){
		BlazeLayout.render('HomeLayout',{main:'Customer'});
	}
});

FlowRouter.route('/newcustomer',{
	name:'customerNew',
	action(){
		BlazeLayout.render('HomeLayout',{main:'NewCustomer'});
	}
});

// --- Order ---
FlowRouter.route('/orderlist',{
	name:'order-list',
	action(){
		BlazeLayout.render('HomeLayout',{main:'OrderList'});
	}
});

FlowRouter.route('/order/:id',{
	name:'orderEdit',
	action(){
		BlazeLayout.render('HomeLayout',{main:'Order'});
	}
});

FlowRouter.route('/neworder',{
	name:'customerNew',
	action(){
		BlazeLayout.render('HomeLayout',{main:'NewOrder'});
	}
});
