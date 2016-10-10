Order = new Mongo.Collection('order');

Order.allow({
	insert: function(userId,doc){
		return !!userId;
	}
});


OrderSchema = new SimpleSchema({
	remark: {
		type: String,
		label: "Besonderheit"
	},
	customer:{
		type: String
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

Order.attachSchema(OrderSchema);