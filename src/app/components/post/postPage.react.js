import React from 'react';
import PostApi from '../../api/postApi';
import PostList from './postList.react';

class PostPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: PostApi.getAllPosts() });
    }

    render() {
        return (
            <PostList posts={this.state.posts}/>
        );
    }
}

export default PostPage;

