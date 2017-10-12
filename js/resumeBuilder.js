//work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.
var work = {
  "jobs" : [
    {
      //"employer" : "AT&T",
      "title" : "Associate Director",
      "location" : "San Antonio, TX",
      "dates" : "2016 - present"//,
    //  "description" : "As a member of the IP Voice group, responsible for support and implementation of key technologies in the Call Center Technolgies organization."
    },
    {
      //"employer" : "AT&T Services Inc.",
      "title" : "Sr. Technical Team Leader",
      "location" : "San Antonio, TX",
      "dates" : "2010 - 2016"//,
      //"description" : "Responsible for the team that supports the CQM application platform across AT&T. Responsiblities include implementation and support of the CQM application platform as part of the Call Center Technolgies organization."
    }
  ],

  "display" : function () {
    var pos = $("#workExperience");
    this.jobs.forEach ((position) => {
        var posEntry = $(HTMLworkStart);
        posEntry.append(HTMLworkEmployer.replace("%data%", position.title) +
        HTMLworkDates.replace ("%data%", position.dates));
        posEntry.append(HTMLworkLocation.replace("%data%", position.location));
        pos.append(posEntry);
    });
  }
};
work.display();

$("#mapDiv").append(googleMap);
//projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.
var projects = {
  "projects" : [
    {
      //"title" : "DTV integration",
      "name" : "Article",
      "dates" : "2017",
      "description" : "Project1"
      //"description" : "Implementation of the CQM & IEX platforms at 7 internal DTV call centers, impaction over 4000 agents."
    },
    {
      //"title" : "Upgrade to Impact 360 15.1",
      "name" : "Card",
      "dates" : "2017",
      "description" : "Project2"
      //"description" : "Upgrade the exsisting 11.1 platfrom to 15.1. Closely work with the vendor resources on the upgrade which includes datases and webservers across home solutions impacting approximately 12000 agents."
    },
    {
      //"title" : "AEP IVR recording",
      "name" : "Portfolio",
      "dates" : "2017",
      "description" : "Project3"
      //"description" : "Implement a recording environment for the new AEP platform."
    },
    {
      //"title" : "AEP IVR recording",
      "name" : "Resume",
      "dates" : "2017",
      "description" : "Projec4"
      //"description" : "Implement a recording environment for the new AEP platform."
    }
  ],

  "display" : function () {
    var proj = $("#projects");
    this.projects.forEach((projects) => {
      var projEntry = $(HTMLprojectStart);
      projEntry.append(HTMLprojectTitle.replace("%data%", projects.name));
      projEntry.append(HTMLprojectDates.replace("%data%", projects.dates));
      projEntry.append(HTMLprojectDescription.replace("%data%", projects.description));
      proj.append(projEntry);
    });
  }
};
projects.display();

//bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional
var bio = {
  "name" : "Padala",
  "role" : "Manager",
  "welcomeMessage" : "Change is constant. Accept and adapt to it.",
  "biopic" : "images/fry.jpg",
//  "age" : 42,
  "contacts" : {
      "mobile" : "210-474-7814",
      "email" : "sreeram.padala@att.com",
      "github" : "sreeram.padala@att.com",
      "location" : "San Antonio, TX"
    },
  "skills" : ["awesomeness","programming","teaching","JS"],

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
    contact = HTMLContact("Location",this.contacts.location);
    topContacts.append(contact);
    bottomContacts.append(contact);

    header.append(HTMLbioPic.replace("%data%", this.biopic));
    header.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

    if (this.skills && this.skills.length > 0) {
      header.append(HTMLskillsStart);
      var skills = $("#skills");
      this.skills.forEach((skill) => {
        skills.append (HTMLskills.replace("%data%", skill));
      });
    }
  }
};

bio.display();


//education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings.
var education = {
  "schools" : [
    {
      "name" : "UTSA",
      "location" : "San Antonio, TX",
      "degree" : "Masters",
      "dates" : "2003-2005",
      "url" : "www.utsa.com",
      "majors" : ["MS IT","Statistics"]
    },
    {
      "name" : "SAC",
      "location" : "San Antonio, TX",
      "degree" : "Certificate course",
      "dates" : "1999",
      "url" : "www.accd.edu/sac",
      "majors" : ["Oracle DBA"]
    }
  ],
  "onlineCourses" : [
    {
      //"course" : "Frontend Web Developer",
      //"type" : "Nano-Degree",
      //"dates" : 2017
      "title" : "HTML",
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
