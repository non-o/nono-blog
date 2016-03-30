"use strict";
import React from 'react';
import BlogApi from '../../api/blogApi';
import ReactMarkdown  from 'react-markdown';


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: '' };
    }

    componentDidMount() {
        this.loadSource(this.props.params);
    }

    componentWillReceiveProps(nextProps) {
        this.loadSource(nextProps.params);
    }

    loadSource(params) {
        let pageName = params.pageName || 'home.md';

        BlogApi.getPage(pageName, function(data) {
            this.setState({ content: data });
        }.bind(this));
    }

    myTransformLinkUri(uri) {
        //there is a bug here as the react-markdown module does not change the url for images.
        // wait to be fixed.
        return uri;
    }

    render() {
        return (
            <ReactMarkdown transformLinkUri={this.myTransformLinkUri} source={this.state.content}/>
        );
    }
}


export default Page;

