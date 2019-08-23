import React from 'react'
import './stylesheet.css'


export default class Box extends React.Component {
    constructor() {
        super();
        this.selectBox = this.selectBox.bind(this)
    }
    selectBox() {
        this.props.selectBox(this.props.row, this.props.col)
    }
    render() {
        return (
            <div
                className={this.props.boxClass}
                id={this.props.id}
                onClick={this.selectBox}
            />

        )
    }
}
