//$("#main").append("ROBIN EDWARD IRVING");


var name = "Robin Irving";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Robin Edward Irving",
	"Role" : "Web Developer",
	"Message" : "Welcome to my Resume. Let's connect!",
	"Contact info" : "robin@outlook.com",
	"url" : "robin@fff.com",
	"skills": [ "Communication", "Language", "Sales", "Management", "Technical" ],
	"biopic": "images/IMG_0170-Copy.jpg" 
}
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
console.log (formattedbioPic);


//$("#header").prepend(bio.name);
//$("#header").prepend(bio.Role);
$("#header").append(bio.Message);
$("#header").append(bio.Contact_info);
$("#header").append(bio.url);
$("#header").append(formattedbioPic);
//$("#header").append(bio.skills);


if (bio.skills.length>0)
{
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace(
		"%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",
		bio.skills[4]);
}




//$("#main").append(work[jobs.employer]);

//$("#main").append(education.schools);

var education = {
	"schools": [
	{
		"name": "Mohawk College",
		"city": "Hamilton",
		"degree": "Diploma 3-year",
		"major" : ["Finance", "Marketing"],
		"year graduation": "1990"
	},
	{
		"name": "Lester B Pearson SS",
		"city": "Burlington",
		"degree": "High School Diploma",
		"major": "General Diploma",
		"year graduation": "1984"
	}
	]
}
var work = {
	"jobs": [
	{
		"employer": "ICAM",
		"title": "Account Executive",
		"location": "Ste-Anne-de-Bellevue, QC",
		"dates": "2012 - 2016",
		"description" : "Business Development and Account Management"
	},
	{
		"employer": "PCMall",
		"title": "Account Executive",
		"location": "Montreal, QC",
		"dates": "2010 - 2011",
		"description":"Business Development and Account Management"
	},
	{
		"employer": "Insight",
		"title": "Account Executive",
		"location": "Montreal, QC",
		"dates": "2000 - 2009",
		"description": "Business Developement and Account Management"
	},
	{
		"employer": "Various",
		"title": "Contractor",
		"location": "Toronto, ON",
		"dates": "1990 - 2000",
		"description" : "short-term contracts marketing, credit and collections, general accounting clerical roles"
	}
	]
}
var Projects = {
	"projects": {
		"title": "launch Mastercam Division",
		"dates": "June 2012 - September 2015",
		"description" : "started new sales division from zero for Mastercam users",
		"images": "www.icam.com" 
		}
}

function displayWork(){
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace
	    ("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace(
		"%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer +
		formattedTitle;

	$(".work-entry:last").append(
		formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace(
		"%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.
	replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(
		formattedDescription);
}
}
displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

console.log(locationizer(work));



function inName(name) {
	name = "Robin Irving";
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] + " "+name[1];
}

$("#main").append(internationalizeButton);

$(document).click(function(loc) {
	console.log(loc.pageX, loc.pageY);
});

