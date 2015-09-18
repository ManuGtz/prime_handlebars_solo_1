$(function(){

 	var theTemplateScript = $("#manu-template").html();

 	console.log(theTemplateScript);

 	var theTemplate = Handlebars.compile(theTemplateScript);

 	var info = {
 		hobbies: [
 			{hobbie: 'Watch movies'},
 			{hobbie: 'Read Comic Books'},
 			{hobbie: 'Listening to Podcasts'},
 			{hobbie: 'Editing'}
 		],		

 		"name": "Manu",
 		"lastName": "Garcia",
 		"birthday": "June 24th",
 		"countryOfBirth": "Mexico",
 		"son": "Noah"

 	};

 	var theCompiledHtml = theTemplate(info);

 	$(".manu-content").html(theCompiledHtml);


});