import React from 'react';
import ReactMarkdown  from 'react-markdown';

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let currentPost = this.props.post;
        return (
            <div key={currentPost.url} className="row">
                <h2><a href={currentPost.url}>{currentPost.title}</a></h2>
                <h4>Author: {currentPost.author}</h4>
                <span className="glyphicon glyphicon-time"> </span> {currentPost.date}
                <ReactMarkdown source={currentPost.body}/>
                <hr/>
            </div>
        );
    }
}

Post.propTypes = {
    post : React.PropTypes.object.isRequired
}

export default Post;

