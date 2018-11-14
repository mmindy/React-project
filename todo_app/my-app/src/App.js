import React, { Component } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';

class App extends Component {
  id = 0;
  state = {
    dataList : []
  }

  handleCreate = data => {
    const { dataList } = this.state;
    this.setState({
      dataList : dataList.concat(Object.assign({}, data, {
        id : this.id++,
        state : 0
      }))
    })
  }

  handleUpdate = (id, data) => {
    const { dataList } = this.state;
    this.setState({
      dataList : dataList.map(
          info => {
            if ( info.id === id) {
              return {
                id, ...data
              };
            }
            return info;
          }
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Todo List</h1>
        <TodoForm 
          onCreate={this.handleCreate}
        />
        <TodoList 
          dataList={this.state.dataList} 
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
