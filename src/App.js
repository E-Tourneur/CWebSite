/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
            Section intro
        </div>
        <div>
            Section service
        </div>
        <div>
          Section our work
        </div>
        <div>
          <p>Contact Me</p>
          <div>
            <form action="/action_page.php">
              <label>First Name</label>
              <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
              <br/>
              <label>Last Name</label>
              <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>
              <br/>
              <label>Email</label>
              <input type="email"id="email"name="email"placeholder="Your email"/>
              <br/>
              <label>Subject</label>
              <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
              <br/>
              <input type="submit"value="Submit"/>
            </form>
          </div>
        </div>
    </div>
  );
}

export default App;
