FlowRouter.route('/',{
	name:'home',
	action(){
		BlazeLayout.render('HomeLayout',{main:'Recipes'});
	}
});

FlowRouter.route('/recipe-book',{
	name:'recipe-book',
	action(){
		BlazeLayout.render('MainLayout',{main:'NewRecipe'});
	}
});

FlowRouter.route('/customer',{
	name:'customer',
	action(){
		BlazeLayout.render('MainLayout',{main:'Customer'});
	}
});

FlowRouter.route('/order',{
	name:'order',
	action(){
		BlazeLayout.render('MainLayout',{main:'NewOrder'});
	}
});