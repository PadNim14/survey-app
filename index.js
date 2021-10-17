import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
// import App from './App';
import './index.css';
import "survey-react/survey.css";
import * as Survey from "survey-react";

import reportWebVitals from './reportWebVitals';

Survey.StylesManager.applyTheme("darkrose");
var surveyJSON = {
    title: "ACS Symptom Checklist",
    description: "Obtains basic patient information",
    completedHtml: "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <h1>Thank you for completing the survey </h1>\n        <a href=\"https://padnim14.github.io/survey-app/\"> Take survey again </a>\n    </head>\n</html>",
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "text",
        name: "question16",
        title: "Please enter patient's name."
       },
       {
        type: "boolean",
        name: "question1",
        title: "Chest Pressure"
       },
       {
        type: "boolean",
        name: "question2",
        title: "Shoulder Pain"
       },
       {
        type: "boolean",
        name: "question3",
        title: "Sweating"
       },
       {
        type: "boolean",
        name: "question4",
        title: "Palpitations"
       },
       {
        type: "boolean",
        name: "question5",
        title: "Chest Discomfort"
       },
       {
        type: "boolean",
        name: "question6",
        title: "Upper Back Pain"
       },
       {
        type: "boolean",
        name: "question7",
        title: "Short of Breath"
       },
       {
        type: "boolean",
        name: "question8",
        title: "Arm Pain"
       },
       {
        type: "boolean",
        name: "question9",
        title: "Unusual Fatigue"
       },
       {
        type: "boolean",
        name: "question10",
        title: "Nausea"
       },
       {
        type: "boolean",
        name: "question11",
        title: "Lightheaded"
       },
       {
        type: "boolean",
        name: "question12",
        title: "Chest Pain "
       },
       {
        type: "boolean",
        name: "question13",
        title: "Indigestion"
       },
       {
        type: "radiogroup",
        name: "question17",
        title: "Chief Complaint",
        isRequired: true,
        requiredErrorText: "Please select one chief complaint.\n\n",
        choices: [
         {
          value: "item1",
          text: "Chest Pressure"
         },
         {
          value: "item2",
          text: "Shoulder Pain"
         },
         {
          value: "item3",
          text: "Sweating"
         },
         {
          value: "item4",
          text: "Palpitations"
         },
         {
          value: "item5",
          text: "Chest Discomfort"
         },
         {
          value: "item6",
          text: "Upper Back Pain"
         },
         {
          value: "item7",
          text: "Short of Breath"
         },
         {
          value: "item8",
          text: "Arm Pain"
         },
         {
          value: "item9",
          text: "Unusual Fatigue"
         },
         {
          value: "item10",
          text: "Nausea"
         },
         {
          value: "item11",
          text: "Lightheaded"
         },
         {
          value: "item12",
          text: "Chest Pain"
         },
         {
          value: "item13",
          text: "Indigestion"
         }
        ]
       },
       {
        type: "comment",
        name: "question14",
        title: "Other (write-in)"
       },
       {
        type: "rating",
        name: "question15",
        title: "Severity (Rank from 1-10, 1 being low and 10 being high)",
        rateMax: 10
       }
      ],
      title: "ACS Symptom Checklist",
      description: "Please indicate all symptoms that you are currently experiencing or experienced before you called 911 today or came to the Emergency Department today."
     }
    ]
   }
// var surveyJSON = {title:"ACS Symptom Checklist",description:"Obtains basic patient information",completedHtml:"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <h1>Thank you for completing the survey </h1>\n        <a href=\"https://padnim14.github.io/survey-app/\"> Take survey again </a>\n    </head>\n</html>",pages:[{name:"page1",elements:[{type:"text",name:"question16",title:"Please enter patient's name."},{type:"boolean",name:"question1",title:"Chest Pressure"},{type:"boolean",name:"question2",title:"Shoulder Pain"},{type:"boolean",name:"question3",title:"Sweating"},{type:"boolean",name:"question4",title:"Palpitations"},{type:"boolean",name:"question5",title:"Chest Discomfort"},{type:"boolean",name:"question6",title:"Upper Back Pain"},{type:"boolean",name:"question7",title:"Short of Breath"},{type:"boolean",name:"question8",title:"Arm Pain"},{type:"boolean",name:"question9",title:"Unusual Fatigue"},{type:"boolean",name:"question10",title:"Nausea"},{type:"boolean",name:"question11",title:"Lightheaded"},{type:"boolean",name:"question12",title:"Chest Pain "},{type:"boolean",name:"question13",title:"Indigestion"},{type:"radiogroup",name:"question17",title:"Chief Complaint",isRequired:true,requiredErrorText:"Please select one chief complaint.\n\n",choices:[{value:"item1",text:"Chest Pressure"},{value:"item2",text:"Shoulder Pain"},{value:"item3",text:"Sweating"},{value:"item4",text:"Palpitations"},{value:"item5",text:"Chest Discomfort"},{value:"item6",text:"Upper Back Pain"},{value:"item7",text:"Short of Breath"},{value:"item8",text:"Arm Pain"},{value:"item9",text:"Unusual Fatigue"},{value:"item10",text:"Nausea"},{value:"item11",text:"Lightheaded"},{value:"item12",text:"Chest Pain"},{value:"item13",text:"Indigestion"}]},{type:"comment",name:"question14",title:"Other (write-in)"},{type:"rating",name:"question15",title:"Severity (Rank from 1-10, 1 being low and 10 being high)",rateMax:10}],title:"ACS Symptom Checklist",description:"Please indicate all symptoms that you are currently experiencing or experienced before you called 911 today or came to the Emergency Department today."}]}

function sendDataToServer(survey) {
    survey.sendResult('398b1917-1d7b-4c0f-b910-0deb09e4c1e3');
}

ReactDOM.render(
    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));
   
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
