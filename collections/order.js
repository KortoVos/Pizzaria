Order = new Mongo.Collection('order');

Order.allow({
	insert: function(userId,doc){
		return !!userId;
	},
	update: function(userId,doc){
		return !!userId;
	}
});

products = new SimpleSchema({
	product: {
		type: String,
		autoform: {
	    	type: "select2",
	      	options: function() {
	          	var opts = Recipes.find().map(function(entity) {
		            return {
		                label: entity.name,
		                value: entity._id
		            };
	          	});
	          	return opts;
	        }
	    }
	}
});

OrderSchema = new SimpleSchema({
	customer:{
		type: String,
		optional: true,
		autoform: {
		type: "select2",
      	options: function() {
          	var opts = Customer.find().map(function(entity) {
              	return {
                  	label: entity.firstname,
                  	value: entity._id
              	};
          	});
          return opts;
        }
    }
	},
	products:{
		type: [products]
	},
	remark: {
		type: String,
		label: "Besonderheit"
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