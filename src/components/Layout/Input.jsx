import React, { Component } from 'react';

class Input extends Component {
    render() {
        // console.log(this.props)
		let input = null;
		if (this.props.textFieldType === 'text') {
			input = <input type='text' value={this.props.value} name={this.props.name} style={this.props.inputStyled} onChange={this.props.changed} />;
		} else if (this.props.textFieldType === 'date') {
			input = <input type='date' value={this.props.value} name={this.props.name} style={this.props.inputStyled} onChange={this.props.changed} />;
        }else if (this.props.textFieldType === 'number') {
			input = <input type='number' value={this.props.value} name={this.props.name} style={this.props.inputStyled} onChange={this.props.changed} />;
		}
		return <div>
            { input }
        </div>;
	}
}
export default Input;