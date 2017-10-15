//Bio object
var bio = {
  "name" : "Sreeram Padala",
  "role" : "Technical Director",
  "contacts" : {
      "mobile" : "210-474-7814",
      "email" : "sreeram@gmail.com",
      "github" : "https://github.com/oparo/frontend-nanodegree-resume",
      "location" : "San Antonio, TX"
    },
  "welcomeMessage" : "Change is constant. Accept and adapt to it.",
  "skills" : ["Web Programming","Scripting","Database Administration"],
  "biopic" : "images/fry.jpg",

  "display": function () {
    var header = $("#header");
    header.prepend(HTMLheaderRole.replace("%data%", this.role));
    header.prepend(HTMLheaderName.replace("%data%", this.name));

    var topContacts = $("#topContacts");
    var bottomContacts = $("#footerContacts");
    var contact;

    function HTMLContact(key, value) {
      return value ? HTMLcontactGeneric.replace("%contact%", key).replace ("%data%", value) : undefined;
    }

    contact = HTMLContact("Phone", this.contacts.mobile);
    topContacts.append(contact);
    bottomContacts.append(contact);
    contact = HTMLContact("Email", this.contacts.email);
    topContacts.append(contact);
    bottomContacts.append(contact);
    contact = HTMLContact("Github", this.contacts.github);
    bottomContacts.append(contact);
    contact = HTMLContact("Location",this.contacts.location);
    topContacts.append(contact);
    bottomContacts.append(contact);

    header.append(HTMLbioPic.replace("%data%", this.biopic));
    header.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

    if (this.skills && this.skills.length > 0) {
      header.append(HTMLskillsStart);
      var skills = $("#skills");
      /*
      this.skills.forEach(function(skill) {
        skills.append (HTMLskills.replace("%data%", skill));
      });*/
      for(var i = 0; i < this.skills.length; i++){
           skills.append (HTMLskills.replace("%data%", this.skills[i]));
      };
    }
  }
};

bio.display();

//education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings.
var education = {
  "schools" : [
    {
      "name" : "UT",
      "location" : "Austin, TX",
      "degree" : "Masters",
      "majors" : ["MS IT","Statistics"],
      "dates" : "2003-2005",
      "url" : "www.utexas.edu"
    },
    {
      "name" : "SAC",
      "location" : "San Diego, CA",
      "degree" : "Diploma",
      "majors" : ["Oracle DBA"],
      "dates" : "1999",
      "url" : "www.accd.edu/sac"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Git",
      "school" : "Udacity",
      "dates" : "2016-2017",
      "url" : "Udacity.com"
    },
    {
      "title" : "JavaScript",
      "school" : "Udacity",
      "dates" : "2016-2017",
      "url" : "Udacity.com"
    }
  ],

  "display": function () {
    var edu = $("#education");
    this.schools.forEach(function(school) {
      var eduEntry = $(HTMLschoolStart);
      eduEntry.append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
      eduEntry.append(HTMLschoolDates.replace("%data%", school.dates));
      eduEntry.append(HTMLschoolLocation.replace("%data%", school.location));
      eduEntry.append(HTMLschoolMajor.replace("%data%", school.majors.join(" ,")));
      edu.append(eduEntry);
    });
    edu.append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      var eduEntry = $(HTMLschoolStart);
      eduEntry.append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
      eduEntry.append(HTMLonlineDates.replace("%data%", course.dates));
      eduEntry.append(HTMLonlineURL.replace("%data%", course.url));
      edu.append(eduEntry);
    });
  }
};

education.display();

//Work object
var work = {
  "jobs" : [
    {
      "employer" : "AT&T",
      "title" : "Tech Director",
      "location" : "San Antonio, TX",
      "dates" : "2016 - present",
      "description" : "Responsible for multiple application groups including programmers and DBAs."
    },
    {
      "employer" : "AT&T Services Inc.",
      "title" : "Team Lead",
      "location" : "Dallas, TX",
      "dates" : "2010 - 2016",
      "description" : "As team lead was responsible for 6 team members in support of applications for our organization. Responsiblities include creating new programs in support of the application platform."
    }
  ],

  "display" : function () {
    var pos = $("#workExperience");
    this.jobs.forEach (function(position) {
        var posEntry = $(HTMLworkStart);
        posEntry.append(HTMLworkEmployer.replace("%data%", position.employer) + HTMLworkTitle.replace ("%data%", position.title));
        posEntry.append(HTMLworkDates.replace ("%data%", position.dates));
        posEntry.append(HTMLworkLocation.replace("%data%", position.location));
        posEntry.append(HTMLworkDescription.replace("%data%", position.description));
        pos.append(posEntry);
    });
  }
};
work.display();

//Projects object
var projects = {
  "projects" : [
    {
      "title" : "Portfolio",
      "dates" : "2017",
      "description" : "Project1",
      "images" : ["https://www.projectsmart.co.uk/img/pm-workflow.png"]
    },
    {
      "title" : "Resume",
      "dates" : "2017",
      "description" : "Project2",
      "images" : [" "]
    },
    {
      "title" : "Arcade Game",
      "dates" : "2017",
      "description" : "Project3",
      "images" : [" "]
    }
  ],

  "display" : function () {
    var proj = $("#projects");
    /*this.projects.forEach(function(projects) {
      var projEntry = $(HTMLprojectStart);
      projEntry.append(HTMLprojectTitle.replace("%data%", projects.title));
      projEntry.append(HTMLprojectDates.replace("%data%", projects.dates));
      projEntry.append(HTMLprojectDescription.replace("%data%", projects.description));
      projEntry.append(HTMLprojectImage.replace("%data%", projects.images));
      proj.append(projEntry);
    });*/
    for(var i=0; i<this.projects.length; i++){
      var projEntry = $(HTMLprojectStart);
      projEntry.append(HTMLprojectTitle.replace("%data%", this.projects[i].title));
      projEntry.append(HTMLprojectDates.replace("%data%", this.projects[i].dates));
      projEntry.append(HTMLprojectDescription.replace("%data%", this.projects[i].description));
      projEntry.append(HTMLprojectImage.replace("%data%", this.projects[i].images));
      proj.append(projEntry);
    }
  }
};
projects.display();

// Code to display the google Map
$("#mapDiv").append(googleMap);

/*
if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace ("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace ("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace ("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace ("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}
/*
work.jobs.forEach(function(job) {
//a.forEach(function(element)){
    //console.log(element);
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace ("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
});
*/
/*
function displayWork(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace ("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

Work.display();
*/
