// Sends Emails in multiple formats. Saves Form data to designated platforms.

function sendingEmail(e) { // event 
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  
    //iterate through responses

  for (var i=0; i<itemResponses.length; i++) {
    switch (itemResponses[i].getItem().getTitle()) {
      case "firstQuestion" : //your quiz needs to be exact same  
        var variables = itemResponses[i].getResponse();  // returns a string
        break; 
    }
    }  
mediaQueueFill(); // fill your variables 
  
//********** helper functions **********************


function mediaQueueFill(variables){
Logger.log(variables);


var email = ['yourTeam@test.com'];  // List of email address 


//if(condition === true){ // simple if statement to add someone to an email chain 
//email.push("whoever@test.com");
}
  
Logger.log(email);

/*
for(var i = 0; i <= variable.length; i++){ // make html templates based on the answer 
var temps = [i];
temps[0] = //temp 1;

temps[1] = //temp 2;

temps[2] = //temp 3;

temps[3] = //temp 4; 

temps[4] = //temp 5; 



var type1 = {
    temp: temps[0],
    hexCode: "#E59400",
};

var type2  = {
    temp: temps[1],
    hexCode: "#bc0384",
};


var type3  = {
    temp: temps[2],
    hexCode: "#6642e5",
};


var type4 = {
    temp: temps[3],
    hexCode: "#567dc4",
};

var temp5 = {
    temp: temps[4],
    hexCode: "#0d7757",
};



var weeklySocialPress = {
    temp: temps[1],
    hexCode: "#f975b5",
};


var objs = function(){ //variable match 
if(condition == true){
return answer1;
}};

var selected = objs(answer1);
for (var keys in selected){
var selectedObjs=selected[keys];
}

+  note +"</div>"
}else if(note === null & packagePull !== null ){
bottom = "<b></b>: "+ packagePull +"<br>"
}else if(note !== null & packagePull !== null){
bottom = "<b></b>: "+ packagePull +"<br>" 
+ "<div></b>: "
+ "<br>"+ note +"</div>"
}else{
bottom = bottom;
}
var contactTemp = function(answer,selected,emails) {
var contact = "<table style=border-style: double; border-color:" + selected.hexCode + ";>"
+"<b style=color:"+selected.hexCode +";>CONTACT:</b>"
+"<tr><td>email: </td>"
+"<td>"+ email +"</td></tr></table>"

if(condition === ""){
contact = "<table style=border-style: double; border-color:" + selected.hexCode + ";>"
return contact;
}else{
contact = contact;
return contact;
}};



var colorCode = "<font style=color:" + selected.hexCode +">" //determining colorcode 
*/

var baseTemp = "hola"//email body here


var subject = "test"; // subject line here
var msgHtml = baseTemp; //  context here
var msgPlain = msgHtml.replace(/\<br\/\>/gi, '\n').replace(/(<([^>]+)>)/ig, ""); // clear html tags and convert br to new lines for plain mail
MailApp.sendEmail(email, subject, msgPlain,{ htmlBody: msgHtml}); // mailapp to send out 
Logger.log("sent to " + email);
 }
 }
  
  
