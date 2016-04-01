import React from 'react';
import ReactMarkdown  from 'react-markdown';

let PropTypes = React.PropTypes;

class PageContent extends React.Component {

    constructor(props) {
        super(props);
    }
    
    myTransformLinkUri(uri) {
        //there is a bug here as the react-markdown module does not change the url for images.
        // wait to be fixed.
        return uri;
    }

    render() {
        return (
            <ReactMarkdown source={this.props.page.content} transformLinkUri={this.myTransformLinkUri}/>
        );
    }
}


PageContent.propTypes = {
   page: PropTypes.object.isRequired,
}

export default PageContent;

