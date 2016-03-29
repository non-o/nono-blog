import React from 'react';

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let currentPost = this.props.post;
        return (
            <div className="row">
                <h2><a href={currentPost.url}>{currentPost.title}</a></h2>
                <h4>Author: {currentPost.author}</h4>
                <span className="glyphicon glyphicon-time"> </span> {currentPost.date}
                <p>
                    {currentPost.body}
                </p>
                <hr/>
            </div>
        );
    }
}

Post.propTypes = {
    post : React.PropTypes.object.isRequired
}

export default Post;

