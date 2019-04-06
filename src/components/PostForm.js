import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    // Action çağrısı
    this.props.createPost(post);
  }

  reset = () => {
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <div className='container custom-form my-5 bg-light py-4 border border-info rounded shadow'>
        <h3 className='text-info text-center text-uppercase'>Add Post</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className='form-control'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              className='form-control'
              rows='5'
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger btn-block">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: Proptypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);