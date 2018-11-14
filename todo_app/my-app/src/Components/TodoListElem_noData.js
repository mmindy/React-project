import React, { Component } from 'react';

class TodoListElem_noData extends Component {
  render() {
    return (
      <li className='list--row list--row-noDatas'>
        할일이 없습니다!
      </li>
    );
  }
}

export default TodoListElem_noData;