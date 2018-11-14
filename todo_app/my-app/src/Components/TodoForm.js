import React, { Component } from 'react';


class TodoForm extends Component {

  state = {
    content:''
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleCreate = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      content: ''
    })
    e.target.content.value = '';
    e.target.content.focus();
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleCreate}>
        <input 
          type='text'
          name='content'
          className='form--input'
          onChange={this.handleChange}
          value={this.state.content}
        />
        <button
          type='submit'
          className='form--button'
        >할일등록</button>
      </form>
    );
  }
}

export default TodoForm;