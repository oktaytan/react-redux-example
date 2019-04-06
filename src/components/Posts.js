import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3 className='text-capitalize lead text-info'><span>{post.id}</span> - {post.title}</h3>
        <blockquote className='blockquote'>
          <p>{post.body}</p>
        </blockquote>
        <hr />
      </div>
    ));

    return (
      <div className='container mt-4'>
        <h1 className='text-info'>Posts</h1>
        <hr />
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired,
  newPost: Proptypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);