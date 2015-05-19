var bioContactInfo;

var bio = {
	"name": "Alf Maglalang",
	"role": "programmer",
	"welcomeMessage": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
	"contacts": {
		"email": "alf@findmuck.net",
		"mobile": "808-286-9999",
		"github": "alf808",
		"twitter": "canogh",
		"location": "Honolulu"
	},
	"biopic": "images/fry.jpg",
	"skills": [
		"cook all day",
		"ballet three times a week",
		"piano new piece once a month",
		"read all day"
	]
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
	bioContactInfo = formattedEmail + formattedMobile + formattedGit + formattedTwit + formattedLoc;
	$("#topContacts").append(bioContactInfo);

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);
	$("img:last").attr('alt', bio.name);

	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};

var education = {
	"schools": [
		{
			"name": "University of Hawaii at Manoa",
			"location": "Honolulu, HI",
			"degree": "PhD candidate",
			"majors": ["Linguistics"],
			"dates": 1995,
			"url": "http://hawaii.edu"
		},
		{
			"name": "University of Hawaii at Manoa",
			"location": "Honolulu, HI",
			"degree": "Master",
			"majors": ["Linguistics"],
			"dates": 1994,
			"url": "http://hawaii.edu"
		},
		{
			"name": "Indiana University",
			"location": "Bloomington, IN",
			"degree": "BS",
			"majors": ["Mathematics","Literature"],
			"dates": 1988,
			"url": "http://indiana.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "http://udacity.com"
		}
	]
};
education.display = function() {
	for (educ in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[educ].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[educ].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[educ].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[educ].dates);
		var formattedEduc = formattedName + formattedDegree + formattedDates + formattedLocation;
		$(".education-entry:last").append(formattedEduc);
		$("a[href]:last").attr('href', education.schools[educ].url);

		for (major in education.schools[educ].majors) {
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[educ].majors[major]);
			$(".education-entry:last").append(formattedMajors);
		}
	}
	$("#education").append(HTMLonlineClasses);
	for (educ in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[educ].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[educ].school);
		var formattedInfo = formattedTitle + formattedSchool;
		$(".online-entry:last").append(formattedInfo);
		$("a[href]:last").attr('href', education.onlineCourses[educ].url);

		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[educ].date);
		$(".online-entry:last").append(formattedDate);

		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[educ].url);
		$(".online-entry:last").append(formattedUrl);
		$("a[href]:last").attr('href', education.onlineCourses[educ].url);
	}
};

var work = {
	"jobs": [
		{
			"employer": "DoD Contractor",
			"title": "programmer",
			"location": "Honolulu, HI",
			"dates": "2000-present",
			"description": "mostly server-side development in C#, PHP, Coldfusion. Some database work with MSSQL and MySQL. Some frontend work with HTML and CSS",
			"url": "http://usa.gov"
		},
		{
			"employer": "University of Hawaii Linguistics",
			"title": "Linguistics instructor",
			"location": "Honolulu, HI",
			"dates": "1992-2000",
			"description": "taught Linguistics and language data processing using Emacs, Lisp, Snobol and PERL",
			"url": "http://www.ling.hawaii.edu"
		},
		{
			"employer": "Alta Bates Hospital",
			"title": "medical transcriber",
			"location": "Oakland, CA",
			"dates": "1989-1991",
			"description": "medical transcription and billing coding",
			"url": "http://www.altabatessummit.org"
		},
		{
			"employer": "Indiana University Mathematics",
			"title": "teaching assistant",
			"location": "Bloomingtion, IN",
			"dates": "1986-1988",
			"description": "taught Advanced Calculus and Statistics",
			"url": "http://www.iub.edu"
		},
		{
			"employer": "Indiana University Library",
			"title": "library researcher",
			"location": "Bloomingtion, IN",
			"dates": "1986-1988",
			"description": "transliterated Russian, Greek, Thai texts",
			"url": "http://www.iub.edu"
		},
		{
			"employer": "Six Flags",
			"title": "dancer",
			"location": "St. Louis, MO",
			"dates": "1983-1984",
			"description": "danced in variety shows Broadway, Jazz, Country style",
			"url": "http://www.sixflags.com"
		}
	]
};
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedWorkData = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDesc;
		$(".work-entry:last").append(formattedWorkData);
		$("a[href]:last").attr('href', work.jobs[job].url);
	}
};

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "2015",
			"description": "a collections of recent projects",
			"images": ["images/197x148.gif","images/197x148.gif"],
			"url": "http://github.com/alf808"
		},
		{
			"title": "Vitae",
			"dates": "2015",
			"description": "most recent resume",
			"images": ["images/197x148.gif","images/197x148.gif"],
			"url": "http://github.com/alf808"
		}
	]
};
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		$("a[href]:last").attr('href', projects.projects[project].url);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				$("img:last").attr('alt', projects.projects[project].title);
			}
		}
	}
};

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);

$("#footerContacts").append(bioContactInfo);
