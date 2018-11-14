import React, { Component } from 'react';

class TodoListElem extends Component {
  state = {
    editing : false,
    content : '',
    state : ''
  }

  handleStateChange = _ => {
    const { info,stateChange } = this.props;
    stateChange(info.id);
  }

  handleToggleEdit = e => {
    // const { }
  }

  render() {
    const { content, state } = this.props.info;
    return (
      <div className='list--row'>
        <button 
          className={state?'listRow--state listRow--done':'listRow--state listRow--doing'}
          onClick={this.handleStateChange}
        >{state?'완료':'예정'}</button>
        <span className='listRow--con'>{content}</span>
        <button className='listRow--btn_style listRow--btn_del'>삭제</button>
      </div>
    );
  }
}

export default TodoListElem;