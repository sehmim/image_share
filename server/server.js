import { Meteor } from 'meteor/meteor';

if (Meteor.isServer){

	Meteor.startup(function(){
		// if theres 0 images in the database do
		if (Images.find().count == 0){

			// add all images from 1 to 69
			for (var i = 1; i < 70; i++) {
				Images.insert(
				{

				img_src : i +".jpg",
				img_alt : "picture of a ball"
				}
				);	
			}
		}
	
	});
}