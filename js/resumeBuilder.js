/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Sreeram Padala");
// var awesomeThoughts = "I am Sreeram and I am AWESOME";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// $("#main").append(funThoughts);
 var formattedName = HTMLheaderName.replace("%data%","Sreeram");
 var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

// var skills = ["awesomeness","programing","teaching","JS"];
// $("#main").append(skills);
// $("#main").append(skills[3]);
// $("#main").append(skills.length);

//work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.
var work = {
  "jobs" : [
    {
      "employer" : "AT&T",
      "title" : "Associate Director",
      "location" : "San Antonio, TX",
      "dates" : "2016 - present",
      "description" : "As a member of the IP Voice group, responsible for support and implementation of key technologies in the Call Center Technolgies organization."
    },
    {
      "employer" : "AT&T Services Inc.",
      "title" : "Sr. Technical Team Leader",
      "location" : "San Antonio, TX",
      "dates" : "2010 - 2016",
      "description" : "Responsible for the team that supports the CQM application platform across AT&T. Responsiblities include implementation and support of the CQM application platform as part of the Call Center Technolgies organization."
    }
  ]
}

//projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.
var projects = {
  "project" : [
    {
      "title" : "DTV integration",
      "dates" : 2017,
      "description" : "Implementation of the CQM & IEX platforms at 7 internal DTV call centers, impaction over 4000 agents."
    },
    {
      "title" : "Upgrade to Impact 360 15.1",
      "dates" : 2017,
      "description" : "Upgrade the exsisting 11.1 platfrom to 15.1. Closely work with the vendor resources on the upgrade which includes datases and webservers across home solutions impacting approximately 12000 agents."
    },
    {
      "title" : "AEP IVR recording",
      "dates" : 2017,
      "description" : "Implement a recording environment for the new AEP platform."
    }
  ]
}

//bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional
var bio = {
  "name" : "Padala",
  "role" : "Manager",
  "welcomeMessage" : "Change is constant. Accept and adapt to it.",
  "biopic" : "xxxxxxxxxxxxxxxxxx",
  "age" : 42,
  "contacts" : [
    {
      "name" : "Michael Y",
      "title" : "Associate Director",
      "company" : "Karta Technolgies",
      "location" : "San Antonio, TX"
    },
    {
      "name" : "Tom F",
      "title" : "Executive Director",
      "company" : "AT&T",
      "location" : "Hoffman Estates, IL"
    }
  ],
  "skills" : ["awesomeness","programing","teaching","JS"]
}

//$("#main").append(bio.name);

/*
var work = {};
  work.position = "Associate Director";
  work.employer = "AT&T";
  work.YOE = 18;
  work.city = "San Antonio";
*//*
var education = {};
  education["school"] = "UTSA";
  education["NOE"] = 2;
  education["city"] = "San Antonio";
//  $("#main").append(work["position"]);
//  $("#main").append(education.school);
*/

//education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings.

var education = {
  "schools" : [
    {
      "name" : "UTSA",
      "location" : "San Antonio, TX",
      "degree" : "Masters",
      "dates" : "2003-2005",
      "url" : "www.utsa.com",
      "majors" : "MS IT"
    },
    {
      "name" : "SAC",
      "location" : "San Antonio, TX",
      "degree" : "Certificate course",
      "dates" : "1999",
      "url" : "www.accd.edu/sac",
      "majors" : "Oracle DBA"
    }
  ],
  "onlineCourses" : [
    {
      "course" : "Frontend Web Developer",
      "type" : "Nano-Degree",
      "dates" : 2017
    }
  ]
}

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
}

displayWork();

  $(document).click(function(loc){
    var x = loc.pagex;
    var y = loc.pagey;

    logClicks(x,y);
  });
