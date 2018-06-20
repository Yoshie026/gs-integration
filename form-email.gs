function sendingEmail(e) { 
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  //iterate through responses
//--------------------Section 2 Main Detail 
  for (var i=0; i<itemResponses.length; i++) {
    switch (itemResponses[i].getItem().getTitle()) {
      case "firstQuestion" :
        var answer = itemResponses[i].getResponse();  // returns a string
        break; 
        Logger.log("success_01");
    }
    }  
mediaQueueFill(answer); 
//********** helper functions **********************


function mediaQueueFill(answer){
Logger.log("success_02");


var email = ['yourTeam@test.com'];  // List of email address 


//if(condition === true){
email.push("whoever@pop.com");
}
Logger.log(email);


for(var i = 0; i <= format.length; i++){
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

Logger.log("success_04");
var objs = function(format,onAirPromo,tmp){
if(answer == "answer1"){
return answer1;
}};

var selected = objs(answer1);
for (var keys in selected){
var selectedObjs=selected[keys];
}

+  note +"</div>"
}else if(note === null & packagePull !== null ){
bottom = "<b>Package Pull</b>: "+ packagePull +"<br>"
}else if(note !== null & packagePull !== null){
bottom = "<b>Package Pull</b>: "+ packagePull +"<br>" 
+ "<div><b>Notes</b>: "
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

Logger.log("success_05");
//determining colorcode 
var colorCode = "<font style=color:" + selected.hexCode +">"
var baseTemp = //email body here

Logger.log(email);
var subject = "whatever";
var msgHtml = baseTemp;
var msgPlain = msgHtml.replace(/\<br\/\>/gi, '\n').replace(/(<([^>]+)>)/ig, ""); // clear html tags and convert br to new lines for plain mail
Logger.log("success_06");
MailApp.sendEmail(email, subject, msgPlain,{ htmlBody: msgHtml});
Logger.log("success_07");
Logger.log("sent to" + email);
 }
 }
  
  
