// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
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
  Survey.StylesManager.applyTheme("modern");
  <script src="https://unpkg.com/survey-react"></script>
  var surveyJSON = {"title":"Patient Basic Assessment","description":"Obtains basic patient information","pages":[{"name":"page1","elements":[{"type":"text","name":"question10","title":"Full Name"},{"type":"text","name":"date1","title":"Date:","isRequired":true,"inputType":"datetime"},{"type":"rating","name":"question2","title":"I weigh myself everyday."},{"type":"rating","name":"question1","title":"If my shortness of breath increases, I contact my doctor or nurse."},{"type":"rating","name":"question3","title":"If my feet/legs become more swollen than usual, I contact my doctor or nurse. "},{"type":"rating","name":"question4","title":"If I gain 2 kg in one week, I contact my doctor or nurse. "},{"type":"rating","name":"question5","title":"If I experience increased fatigue, I contact my doctor or nurse. "},{"type":"rating","name":"question6","title":"I eat a low salt diet. "},{"type":"rating","name":"question7","title":"I take my medication as prescribed. "},{"type":"rating","name":"question8","title":"I exercise regularly."}],"title":"Patient Vital Survey","description":"Click 1 if you strongly disagree with the statement; click 5 if you strongly agree with the statement. Otherwise, rate your answer accordingly.\n"}]}

  function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

  return ReactDOM.render(
    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));
  }
}


export default App;
