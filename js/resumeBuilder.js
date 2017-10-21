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
    var myheader = $("#header");
    myheader.prepend(HTMLheaderRole.replace("%data%", this.role));
    myheader.prepend(HTMLheaderName.replace("%data%", this.name));

    $("#topContacts, #footerContacts").append(
      HTMLcontactGeneric.replace("%contact%","Phone").replace ("%data%",this.contacts.mobile),
      HTMLcontactGeneric.replace("%contact%","Email").replace ("%data%",this.contacts.email),
      HTMLcontactGeneric.replace("%contact%","Github").replace ("%data%",this.contacts.github),
      HTMLcontactGeneric.replace("%contact%","Location").replace ("%data%",this.contacts.location)
    );

    myheader.append(HTMLbioPic.replace("%data%", this.biopic));
    myheader.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

    if (this.skills && this.skills.length > 0) {
      myheader.append(HTMLskillsStart);
      var mySkills = $("#skills");
      for(var i = 0; i < this.skills.length; i++){
           mySkills.append (HTMLskills.replace("%data%", this.skills[i]));
      }
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
    for(var i=0; i<this.schools.length; i++){
      var myEducation = $(HTMLschoolStart).append(
        HTMLschoolName.replace("%data%", this.schools[i].name) + HTMLschoolDegree.replace("%data%", this.schools[i].degree),
        HTMLschoolDates.replace("%data%", this.schools[i].dates),
        HTMLschoolLocation.replace("%data%", this.schools[i].location),
        HTMLschoolMajor.replace("%data%", this.schools[i].majors)
      );
      $("#education").append(myEducation);

    }
    $("#education").append(HTMLonlineClasses);
    for(var j=0; j<this.onlineCourses.length; j++){
      var myClasses = $(HTMLschoolStart).append(
        HTMLonlineTitle.replace("%data%", this.onlineCourses[j].title) + HTMLonlineSchool.replace("%data%", this.onlineCourses[j].school),
        HTMLonlineDates.replace("%data%", this.onlineCourses[j].dates),
        HTMLonlineURL.replace("%data%", this.onlineCourses[j].url)
      );
      $("#education").append(myClasses);
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
    for(var i=0; i<this.jobs.length; i++){
        var myWork =  $(HTMLworkStart).append(
          HTMLworkEmployer.replace("%data%", this.jobs[i].employer) + HTMLworkTitle.replace ("%data%", this.jobs[i].title),
          HTMLworkDates.replace ("%data%", this.jobs[i].dates),
          HTMLworkLocation.replace("%data%", this.jobs[i].location),
          HTMLworkDescription.replace("%data%", this.jobs[i].description)
        );
        $("#workExperience").append(myWork);
    }
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
      "images" : ["images/images.jpg","images/images.jpg"]
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
      "images" : [""]
    }
  ],

  "display" : function () {
    for(var i=0; i<this.projects.length; i++){
      var myProjects = $(HTMLprojectStart);
      myProjects.append(HTMLprojectTitle.replace("%data%", this.projects[i].title));
      myProjects.append(HTMLprojectDates.replace("%data%", this.projects[i].dates));
      myProjects.append(HTMLprojectDescription.replace("%data%", this.projects[i].description));
      for(var j = 0; j < this.projects[i].images.length; j++){
           myProjects.append(HTMLprojectImage.replace("%data%", this.projects[i].images[j]));
      }
      $("#projects").append(myProjects);
    }
  }
};
projects.display();

// Code to display the google Map
$("#mapDiv").append(googleMap);
