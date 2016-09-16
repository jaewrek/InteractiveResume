
// Jerrik Neri
// Intro to Programming Nanodegree - Udacity
// Front-End Web Development pathway Final Project
/* Resume Builder 1.0
	This program uses JS to create objects with the correct formatted information to
	replace the formatted strings in helper.js that will be appended into index.html

	The output of this code can be viewed by displaying index.html in your Internet
	Browser of choice.
*/
/*jshint multistr: true */
// bio object containing formatted Name, Role, Contact Info, Skills, Welcome Message, and Bio Picture
var bio = {
	"name": "Jerrik Neri",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "123456789",
		"email": "jerrik@example.com",
		"github": "jaewrek",
		"twitter": "@jaewrek",
		"location": "San Diego"
	},
	"welcomeMessage": "Begin before you are ready to turn your dreams into reality.",
	"skills": ["Programming",
		"HTML",
		"CSS",
		"Python",
		"JS",
		"Mac OS/Windows platforms",
		"Java, C, C++",
		"75+ WPM",
		"High attention to detail",
		"Experience w/ legal documents"
	],
	"biopic": "http://i1376.photobucket.com/albums/ah14/jaewrek/bio_zpspdvjrnnu.jpg",

	// Display function that properly formats and replaces the strings in Bio object
	// into the formatted strings in helper.js
	// The newly formatted variables are then appended into index.html in their
	// appropriate locations per the resume.
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").append(formattedWelcome);
		$("#header").append(formattedPic);

		// call to display skills function because Skills are part of bio object
		displaySkills();
	}
    
};

// Work object containing an array of Jobs that then contains the respective
// Title, Employer, Dates of Employment, Location of Job, and Job Description.
var work = {
	"jobs": [{
		"title": "Legal Assistant",
		"employer": "McCarthy & Holthus, LLP",
		"dates": "August 2008 - January 2015",
		"location": "San Diego",
		"description": "Managing and processing the company’s entire intake of referred \
		files, cases, and documents from clients across all departments; Bankruptcy, Judicial \
		Foreclosure, Civil, and Evictions; first hands on client referred case types requiring \
		high attention to detail and time/stress management to properly assess the priority in \
		which to complete work, ex. FNMA, FHLMC, VA, HUD, FHA flagged referrals; designated \
		trainer for team for new hires"
	}, {
		"title": "Professional Driver",
		"employer": "UCSD Transportation Shuttles",
		"dates": "February 2015 - September 2015",
		"location": "La Jolla",
		"description": "Attaining a class B license to properly pre-trip and maneuver various \
		sizes shuttles across different routes on and off campus for transportation of students \
		and campus affiliated employees"
	}, {
		"title": "Shipping & Delivery",
		"employer": "OptumRx",
		"dates": "March 2016 - July 2016",
		"location": "Carlsbad",
		"description": "Sorting and processing shipping of over thousands of Rx orders. \
		Knowledge of Stop Orders, ADC"
	}, {
		"title": "Customer Service Representative",
		"employer": "Sendlane",
		"dates": "July 2016 - current",
		"location": "San Diego",
		"description": "Providing online tech support to clients of product. Assisting \
		account cancellation, refunds, as well as troubleshooting various problems."
	}],

	// Display function for Work object.
	// Replace information from Work object into formatted variables from helper.js
	// Newly formatted variables are appended into index.html with correct div id.
	"display" : function() {
		for (var job = 0; job < work.jobs.length; job++) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};


// Education object containing an array of Schools and Online Courses.
// Each array respectively has the formatted information of
// Name of School, Location, Degree, Major, Dates Attended, and School URL.
var education = {
	"schools": [{
		"name": "UCSD",
		"location": "La Jolla",
		"degree": "BS",
		"majors": ["CSE"],
		"dates": "2008-2015",
		"url": "https://ucsd.edu"
	}, {
		"name": "Morse HS",
		"location": "San Diego",
		"degree": "HS Diploma",
		"majors": ["GED"],
		"dates": "2005-2008",
		"url": "https://www.sandiegounified.org/schools/morse"
	}, {
		"name": "Grossmont Community College",
		"location": "El Cajon",
		"degree": "GE",
		"majors": ["undeclared"],
		"dates": "2012",
		"url": "http://www.grossmont.edu"
	}],
	"onlineCourses": [{
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"dates": "2016 - current",
		"url": "https://www.udacity.com"
	}],

	// Display function for Education object
	// Replaces information from Education object into formatted variables in helper.js
	// These newly formatted variables are then appended into index.html in the correct 
	// area denoted by div id.
	"display" : function() {
		for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

			$(".education-entry:last").append(formattedName + formattedDegree + formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);

		}

		for (var i2 = 0; i2 < education.onlineCourses.length; i2++) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.onlineCourses[i2].title);
			var formattedOnlineMajor = HTMLonlineTitle.replace("%data%", education.onlineCourses[i2].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i2].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("#", education.onlineCourses[i2].url);
			formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i2].school + " Website");

			$(".education-entry:last").append(formattedOnlineMajor);
			$(".education-entry:last").append(formattedOnlineDates + "<br>");
			//$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineName);
			$(".education-entry:last").append(formattedOnlineURL);
    }
    }
};

// Projects object containing an array of Projects.
// Each project has the Title of Project, Date of Project, Description of Project
// and if available, Images of Project.
var projects = {
	"projects": [{
		"title": "Fill in the Blanks Quiz",
		"dates": "2016",
		"description": "Using python to prompt user with a game with 3 difficulties; \
		easy, medium, and hard. Corresponding to each difficulty is a fill in the blank \
		quiz which 4 blanks. They are given 5 attempts for each blank.",
		"images": ["http://i1376.photobucket.com/albums/ah14/jaewrek/fllblanks_zpszxn1hywg.png"]
	}, {
		"title": "Movie Website",
		"dates": "2016",
		"description": "Compilation of favortie movies displayed on website with HTML. \
		Site is built with python by creating movie objects with appropriate information, \
		then passed through an HTML generator in python, outputting HTML.",
		"images": ["http://i1376.photobucket.com/albums/ah14/jaewrek/movieproject1_zpsadnmg5tz.png",
			"http://i1376.photobucket.com/albums/ah14/jaewrek/movieproject2_zpsy12daxlo.png"]
    }],

	// Display function for Projects object.
	// Grabs information from Projects object to replace into formatted variables from helper.js
	// Newly formatted variables are passed into index.html in correct div id.
	"display" : function() {
  		for (var i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);


			for (var i2 = 0; i2 < projects.projects[i].images.length; i2++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[i2]);
				$(".project-entry:last").append(formattedImage);
        	}
    	}
    }
};

// Display function for Skills from Bio object
// Replace information from Skills into formatted variables from helper.js
// Newly formatted variables are appended into index.html with correct div id.
function displaySkills() {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

// Calling all  display functions to properly display data on resume.
bio.display();
education.display();
work.display();
projects.display();


// Locationizer function: creates new array where all locations from
// Job object are pushed in. This array of locations is returned.

/*function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
} */



$("#mapDiv").append(googleMap);