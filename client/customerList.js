Template.customerList.helpers({
  customer: function(){
    //return JSON.stringify({"user":userData.find({ _id:Meteor.user()._id}).fetch()[0]},undefined,2);
    return Customer.find();
  }
  /*user:{
    firstName:"Karsten",
    surName:"Krachten"
  }*/
});