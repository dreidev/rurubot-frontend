import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {items: []};
  }
  componentWillMount() {
    console.log(new Date().getDate());
    fetch(`http://localhost:8000/api/daily-tasks/day/${new Date().getDate()}-${new Date().getMonth()}-${new Date().getYear()}}`)
      .then((response) => response.json())
      .then((items) => {
        console.log(items);
        this.setState({items});
      });
  }
  render() {
    let items = this.state.items;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" width="100px" height="100px" alt="logo" />
        </header>
        <main className="App-body">
          {/* <h1>Rurubot</h1> */}
          <h3>{items.length==0?`No Tasks were recorded today`:`Today's Tasks`}</h3>
          <div className="daily-tasks">
              {items.map((item) =>
                <div className="daily-tasks__item" key={item._id}>
                <div>
                  <h6>{item.user_name || item.user_id}</h6>
                  <div className="daily-tasks__item__tasks-container">
                    {item.tasks.map((task)=>
                      <span key={task._id}>
                        {task.description}
                      </span>
                    )}
                  </div>
                </div>
                <hr/>
              </div>
              )}
          </div>
        </main>
        <footer className="App-footer">
          <p>Copyright (c) 2017 <a href="http://dreidev.com">Dreidev</a> All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
