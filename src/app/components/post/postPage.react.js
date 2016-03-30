import React from 'react';
import PostList from './postList.react';
import BlogApi from '../../api/blogApi';

class PostPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        BlogApi.getAllPosts( function(data) {
            this.setState({ posts: data });
        }.bind(this));
    }

    render() {
        return (
            <PostList posts={this.state.posts}/>
        );
    }
}

export default PostPage;

