FlowRouter.route('/',{
	name:'home',
	action(){
		BlazeLayout.render('main',{mainContainer:'newCustomer'});
	}
});

FlowRouter.route('/newCustomer',{
	name:'newCustomer',
	action(){
		BlazeLayout.render('main',{mainContainer:'newCustomer'});
	}
});

FlowRouter.route('/customerList',{
	name:'customerList',
	action(){
		BlazeLayout.render('main',{mainContainer:'customerList'});
	}
});