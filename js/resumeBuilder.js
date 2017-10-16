//Bio object
var bio = {
  "name" : "Sreeram Padala",
  "role" : "Manager",
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
      for(var i = 0; i < this.skills.length; i++){
           skills.append (HTMLskills.replace("%data%", this.skills[i]));
      };
    }
  }
};

bio.display();

//education object
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
    for(var i=0; i<this.schools.length; i++){
      var eduEntry = $(HTMLschoolStart);
      eduEntry.append(HTMLschoolName.replace("%data%", this.schools[i].name) + HTMLschoolDegree.replace("%data%", this.schools[i].degree));
      eduEntry.append(HTMLschoolDates.replace("%data%", this.schools[i].dates));
      eduEntry.append(HTMLschoolLocation.replace("%data%", this.schools[i].location));
      eduEntry.append(HTMLschoolMajor.replace("%data%", this.schools[i].majors.join(" ,")));
      edu.append(eduEntry);
    }
    edu.append(HTMLonlineClasses);
    for(var j=0; j<this.onlineCourses.length; j++){
      var eduEntry = $(HTMLschoolStart);
      eduEntry.append(HTMLonlineTitle.replace("%data%", this.onlineCourses[j].title) + HTMLonlineSchool.replace("%data%", this.onlineCourses[j].school));
      eduEntry.append(HTMLonlineDates.replace("%data%", this.onlineCourses[j].dates));
      eduEntry.append(HTMLonlineURL.replace("%data%", this.onlineCourses[j].url));
      edu.append(eduEntry);
    }
  }
};

education.display();

//Work object
var work = {
  "jobs" : [
    {
      "employer" : "AT&T",
      "title" : "Manager",
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
    for(var i=0; i<this.jobs.length; i++){
        var posEntry = $(HTMLworkStart);
        posEntry.append(HTMLworkEmployer.replace("%data%", this.jobs[i].employer) + HTMLworkTitle.replace ("%data%", this.jobs[i].title));
        posEntry.append(HTMLworkDates.replace ("%data%", this.jobs[i].dates));
        posEntry.append(HTMLworkLocation.replace("%data%", this.jobs[i].location));
        posEntry.append(HTMLworkDescription.replace("%data%", this.jobs[i].description));
        pos.append(posEntry);
    };
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
      "images" : ["images/images.jpg"]
    },
    {
      "title" : "Resume",
      "dates" : "2017",
      "description" : "Project2",
      "images" : ["images/Scenarios.png"]
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
