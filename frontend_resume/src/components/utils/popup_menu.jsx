import React, { Component } from 'react'

export default class PopupMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShownImg : false
    }
    
    this.onClickButton = this.onClickButton.bind(this);
    this.onMouseEnter  = this.onMouseEnter.bind(this);
    this.onMouseLeave  = this.onMouseLeave.bind(this);
  }
  
  onClickButton() {
    this.setState({
      isShownImg : !this.state.isShownImg
    });
  }
  
  onMouseEnter() {
    this.setState({
      isShownImg : true
    })
  }
  
  onMouseLeave() {
    this.setState({
      isShownImg : false
    })
  }

  render() {
    return( 
        <div>            
            <a className="subheading" type="button" 
                onClick={this.onClickButton}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                href={this.props.addr}>{this.props.title}</a>
            <div style={{display: this.state.isShownImg ? 'block' : 'none'}} >
                {this.props.children}
            </div>                   
        </div>
    );
  }
}