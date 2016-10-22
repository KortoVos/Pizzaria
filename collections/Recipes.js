Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId,doc){
		return !!userId;
	},
	update: function(userId,doc){
		return !!userId;
	}
});

Ingredient = new SimpleSchema({
	name: {
		type:String,
		label: "Zutaten Name"
	},
	amount: {
		type: String,
		label: "Menge"
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type:String,
		label:"Name",
		autoform: {
			class:"col s6"
		}

	},
	price: {
		type:Number,
		decimal:true,
		min: 0,
		label:"Preis",
		autoform: {
			class:"col s6"
		}
	},
	desc: {
		type: String,
		label: "Description"
	},
	ingredient:{
		label: "Zutaten",
		type: [Ingredient]
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

Recipes.attachSchema(RecipeSchema);