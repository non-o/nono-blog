import React from 'react';
import Post from './post.react';

class PostList extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        var createPostMarkup = function(post){
            return(
                <Post key={post.url} post={post}/>
            );
        };
        
        return (
            <div className="container-fluid">
                {this.props.posts.map(createPostMarkup, this)}
            </div>
        );
    }
}

PostList.propTypes={
    posts : React.PropTypes.array.isRequired
}

export default PostList;

