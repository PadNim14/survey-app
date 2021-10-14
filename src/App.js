// import logo from './logo.svg';
import React, { Component } from 'react'
// import './App.css';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import ReactDOM from 'react-dom';



class App extends Component {

  render() {
    //   var model = new Survey.Model(this.json);
    //   // Survey.StylesManager.applyTheme("darkblue");
    //   return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
    //   
    // }
    
    Survey.StylesManager.applyTheme("orange");

    var surveyJSON = {title:"ACS Symptom Checklist",description:"Obtains basic patient information",completedHtml:"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <h1>Thank you for completing the survey </h1>\n        <a href=\"https://padnim14.github.io/survey-app/\"> Take survey again </a>\n    </head>\n</html>",pages:[{name:"page1",elements:[{type:"boolean",name:"question1",title:"Chest Pressure"},{type:"boolean",name:"question2",title:"Shoulder Pain"},{type:"boolean",name:"question3",title:"Sweating"},{type:"boolean",name:"question4",title:"Palpitations"},{type:"boolean",name:"question5",title:"Chest Discomfort"},{type:"boolean",name:"question6",title:"Upper Back Pain"},{type:"boolean",name:"question7",title:"Short of Breath"},{type:"boolean",name:"question8",title:"Arm Pain"},{type:"boolean",name:"question9",title:"Unusual Fatigue"},{type:"boolean",name:"question10",title:"Nausea"},{type:"boolean",name:"question11",title:"Lightheaded"},{type:"boolean",name:"question12",title:"Chest Pain "},{type:"boolean",name:"question13",title:"Indigestion"},{type:"comment",name:"question14",title:"Other (write-in)"},{type:"rating",name:"question15",title:"Severity (Rank from 1-10, 1 being low and 10 being high)",rateMax:10}],title:"ACS Symptom Checklist",description:"Please indicate all symptoms that you are currently experiencing or experienced before you called 911 today or came to the Emergency Department today."}]}
    
    function sendDataToServer(survey) {
        survey.sendResult('398b1917-1d7b-4c0f-b910-0deb09e4c1e3');
    }
    
   return ReactDOM.render(
        <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));  
   }
  // Survey.StylesManager.applyTheme("modern");
  // <script src="https://unpkg.com/survey-react"></script>
  // var surveyJSON = {"title":"Patient Basic Assessment","description":"Obtains basic patient information","pages":[{"name":"page1","elements":[{"type":"text","name":"question10","title":"Full Name"},{"type":"text","name":"date1","title":"Date:","isRequired":true,"inputType":"datetime"},{"type":"rating","name":"question2","title":"I weigh myself everyday."},{"type":"rating","name":"question1","title":"If my shortness of breath increases, I contact my doctor or nurse."},{"type":"rating","name":"question3","title":"If my feet/legs become more swollen than usual, I contact my doctor or nurse. "},{"type":"rating","name":"question4","title":"If I gain 2 kg in one week, I contact my doctor or nurse. "},{"type":"rating","name":"question5","title":"If I experience increased fatigue, I contact my doctor or nurse. "},{"type":"rating","name":"question6","title":"I eat a low salt diet. "},{"type":"rating","name":"question7","title":"I take my medication as prescribed. "},{"type":"rating","name":"question8","title":"I exercise regularly."}],"title":"Patient Vital Survey","description":"Click 1 if you strongly disagree with the statement; click 5 if you strongly agree with the statement. Otherwise, rate your answer accordingly.\n"}]}

//   function sendDataToServer(survey) {
//     //send Ajax request to your web server.
//     // alert("The results are:" + JSON.stringify(survey.data));
// }

  // return ReactDOM.render(
  //   <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));
  // }
}


export default App;
