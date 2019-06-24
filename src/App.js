import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from './TodoList'

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <ul>
                <li><Link to="/todolist">TodoList</Link></li>
                <li><Link to="/comment">评论</Link></li>
            </ul>
            <Route path="/todolist" component={TodoList}/>
            {/* <Route path="/comment" component={About}/> */}
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
