Template.NewRecipe.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('newRecipe');
	});
})


Template.NewRecipe.helpers({
	recipes: () => {
		return Recipes.find();
	}
});