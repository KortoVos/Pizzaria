Customer = new Mongo.Collection('customer');

Customer.allow({
	insert: function(userId,doc){
		return !!userId;
	},
	update: function(userId,doc){
		return !!userId;
	}
});

Address = new SimpleSchema({
	plz: {
		type:String
	},
	str: {
		type: String
	}
});

CustomerSchema = new SimpleSchema({
	firstname: {
		type:String,
		label:"Vorname"
	},
	surname: {
		type: String,
		label: "Nachname"
	},
	Phone:{
		type: String,
		label: "Tel.Nr"
	},
	Address:{
		type: [Address]
	},
	author: {
		type:String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type:"hidden"
		}
	},
	createtAt:{
		type: Date,
		label: "Createt At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type:"hidden"
		}
	}
});

Customer.attachSchema(CustomerSchema);