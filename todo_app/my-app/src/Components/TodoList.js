import React, { Component } from 'react';
import TodoListElem from './TodoListElem';
import './TodoList.css';
// import TodoListElem_noData from './TodoListElem_noData';

class TodoList extends Component {
  static defaultProps = {
    dataList : []
  }

  render() {
    const { dataList, stateChange } = this.props;
    console.log("list loading",this.props)
    const doingList = dataList
      .filter(data => !data.state )
      .map(info => (<TodoListElem 
              info={info}
              key={info.id}
              stateChange={stateChange}
            />)
      )
    const doneList= dataList
      .filter(data => data.state )
      .map(info => (<TodoListElem 
              info={info}
              key={info.id}
              stateChange={stateChange}
            />)
      )

    return (
      <div className='list'>
        
        <div className='list--todo list-doing'>
          <h2 className='list--title'>예 정</h2>
            { 
              doingList
            }
        </div>
        <div className='list--todo list-done'>
          <h2 className='list--title'>완 료</h2>
            { 
              doneList
            }
        </div>
      </div>
    );
  }
}

export default TodoList;