import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';



const styles = {

  App: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'left',
    height: '100vh',
    Float: 'left'
  },
  // form: {
  //   height: '100%',
  //   display: 'flex',
  //   // alignItems: 'center',
  //   justifyContent: 'space-around'
  // },
  // leftAlign: {
  //   textAlign: 'left',
  //   padding: '20px',
  // },
  label: {
    color: 'red',
    padding: '10px',
  },

  inputline: {
    padding: '10px',
  }



}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: [],
      work: [],
      personaltimetotal: 0,
      project: 'personal',
      Description: "",
      Minutes: "",
    };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleMinutes = this.handleMinutes.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDescription(event) {
    // let desc =event.target.value.trim()
    console.log(event.target);
    this.setState({ Description: event.target.value });
  }

  handleDropdown(event) {
    console.log(event.target.value)
    this.setState({ project: event.target.value })
  }

  handleMinutes(event) {
    console.log('event');
    this.setState({ Minutes: event.target.value })
  }

  onButtonClick(e) {
    e.preventDefault();
    console.log(this.state.project)
    let arrpersonal = this.state.personal
    let arrwork = this.state.work
    if (this.state.project === 'personal') {
      arrpersonal.push({ Minutes: this.state.Minutes, Description: this.state.Description })
      this.setState({ personal: arrpersonal })
    } else {
      arrwork.push({ minutes: this.state.Minutes, desc: this.state.Description })
      this.setState({ work: arrwork })
    }
    // this.setState({submitvalid: 0})
  }

  //   this.setState(),)


  render() {
    console.log(this.state.Description)
    return (
      <div>
        <h1>Work Logger</h1>
        <div style={styles.App} className="App">
          <div style={styles.inputline}>
            <select type="dropdown" onChange={this.handleDropdown}>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
            </select>
            <div>
              <label>Description</label>
              <input type="text" onChange={this.handleDescription} value={this.state.Description} ></input>
            </div>
            <div>
              <label>Minutes</label>
              <input type="number" min="0" max="240" onChange={this.handleMinutes} value={this.state.Minutes}  ></input>
            </div>
            <div style={styles.inputline}>
              <button onClick={this.onButtonClick}>Add</button>
            </div>
            <div>
              <div>{this.state.project}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }


}


export default App;


