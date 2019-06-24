import React, { Component } from 'react';
import AppList from './components/AppList'
import AppForm from './components/AppForm'
import AppFooter from './components/AppFooter'

class TodoList extends Component {
  state = {
    choosevalue: '1',
    data: [
      {id: 0, text: '天气下雨了', complete: false},
      {id: 1, text: '天气下雨了!!', complete: false},
      {id: 2, text: '不要出去玩', complete: true}
    ]
  }
  OnAddTodoItem(newItem) {
    let newData = this.state.data.concat(newItem)
    this.setState({data: newData})
  }
  ChooseValue(id) {
    this.setState({choosevalue:id})
  }
  AllChangeComplete(id) {
    let newData = this.state.data.map((item, index) => {
      if(item.id === id) {
        item.complete = !item.complete
      }
      return item
    })
    this.setState({data: newData})
  }
  AllDelete(id) {
    let newData = this.state.data.filter((item, index) => item.id !== id)
    this.setState({data: newData})
  }
  render () {
    const {data, choosevalue} = this.state
    return (
      <div className='ui comments'>
        <h1>My Todo with React</h1>
        <div className="ui divder">
        <AppForm AddTodoItem={this.OnAddTodoItem.bind(this)}></AppForm>
        <AppList data={data}
                 choosevalue={choosevalue}
                 DeleteTop={this.AllDelete.bind(this)}
                 ChangeTop={this.AllChangeComplete.bind(this)}></AppList>
        <AppFooter SubmitChooseValue={this.ChooseValue.bind(this)}></AppFooter>
        </div>
      </div>
    )
  }
}

export default TodoList;
