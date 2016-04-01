import React from 'react';
import Post from './post.react';

class PostList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var createPostMarkup = function(post) {
            return (
                <div key={post.url}>
                    <Post className='postItem' post={post} onPostClicked={() => this.props.onPostClicked(post.url)}/>
                    <div className='hr'/>
                </div>
            );
        };

        if (this.props.posts.length === 0) {
            return (<div>loading posts</div>);
        }
        else {
            return (
                <div className='postList'>
                    {this.props.posts.map(createPostMarkup, this) }
                </div>
            );
        }
    }
}

PostList.propTypes = {
    posts: React.PropTypes.array.isRequired,
    onPostClicked: React.PropTypes.func.isRequired
}

export default PostList;

