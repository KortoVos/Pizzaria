Template.Recipe.onCreated(function () {
	var self = this;
	self.autorun(function () {
		var id = FlowRouter.getParam('id');
		self.subscribe('recipe',id);
	});
})


Template.Recipe.helpers({
	recipe: () => {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});