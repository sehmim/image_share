if (Meteor.isClient){

//  This finds the images from the data base in isClient
	Template.images.helpers({images : Images.find()});

    Template.images.events({
    	'click': function(){
        	var img_id = this._id;
        	$("#"+ img_id).hide('slow')
        	Images.remove({_id : img_id})
    	}
	});
	


};
