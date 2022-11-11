import React from 'react';

class Link extends React.Component{
    render(){
        return(
            <div className='link-item'>
                <img className='link-image' src={this.props.image}></img>
                <p className='link-name'>{this.props.name}</p>
            </div>
        );
    }
}

export default Link;