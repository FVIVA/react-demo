import React, {Component} from 'react'
import AppTodos from '../components/AppTodos'

class AppList extends Component {
  SubmitDelete(id) {
    this.props.DeleteTop(id)
  }
  ChangeDone(id) {
    this.props.ChangeTop(id)
  }
  render () { 
    var value = this.props.choosevalue
    const a = this.props.data.map(({ id, text, complete }, index) => {
      if (value === '1') {
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete}
            DeleteItem={this.SubmitDelete.bind(this)} 
            ChangeCompleteItem={this.ChangeDone.bind(this)}
          />
        )
      }
      if (value === '2' && complete === false) {
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete}
            DeleteItem={this.SubmitDelete.bind(this)} 
            ChangeCompleteItem={this.ChangeDone.bind(this)}
          />
        ) 
      }
      if (value === '3' && complete === true) {
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete}
            DeleteItem={this.SubmitDelete.bind(this)} 
            ChangeCompleteItem={this.ChangeDone.bind(this)}
          />
        ) 
      }
    })
    return (
      <div>
      { a }
      { value }
      </div>
    )
  }
}
export default AppList;