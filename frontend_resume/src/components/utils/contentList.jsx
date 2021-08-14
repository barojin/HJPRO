import React, { Component } from 'react'

class ListItem extends React.PureComponent {
    render(){
        return <li>{this.props.value}</li>;
    }
}

export default class ContentList extends React.Component {    
    render(){
        if (!this.props.show){
            return null;
        }
        return (
            <ul>
                {this.props.contents.map((content) => <ListItem key={content.toString()} value={content} />)}
            </ul>
        );
    }
}