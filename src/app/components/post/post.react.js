import React from 'react';
import ReactMarkdown  from 'react-markdown';

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let currentPost = this.props.post;
        return (
            <div className='post' key={currentPost.url}>
                <div className='title' onClick={this.props.onPostClicked}>{currentPost.title}</div>
                <div className='author'>Author: {currentPost.author}</div>
                <div className='date'> {currentPost.date}</div>
                <div className='contentSeparator'> </div>
                <ReactMarkdown className='content' source={currentPost.body}/>
            </div>
        );
    }
}

Post.propTypes = {
    post : React.PropTypes.object.isRequired,
    onPostClicked: React.PropTypes.func.isRequired
}

export default Post;

