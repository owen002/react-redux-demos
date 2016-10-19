import React, {Component,PropTypes} from 'react'
import {constant} from './../constants/constant'

class Footer extends Component {
    render() {
        return (<div>
            <span>Show:</span>
            {' '}
            <span>{this.createTodoDom(constant.VISIBILITY.SHOW_ALL, constant.VISIBILITYNAME.SHOW_ALL)}</span>
            {' '}
            <span>{this.createTodoDom(constant.VISIBILITY.SHOW_COMPLETE, constant.VISIBILITYNAME.SHOW_COMPLETE)}</span>
            {' '}
            <span>{this.createTodoDom(constant.VISIBILITY.SHOW_ACTIVE, constant.VISIBILITYNAME.SHOW_ACTIVE)}</span>
        </div>);
    }

    createTodoDom(filter, filterName) {
        if (filter == this.props.filter) {
            return filterName;
        } else {
            return (<a href="#" onClick={e=>{
            e.preventDefault();
            this.handleFooterClick(filter);
            }}>
                {filterName}
            </a>)
        }
    }

    handleFooterClick(filter) {
        this.props.onFooterClick(filter)
    }
}
Footer.propTypes = {
    onFooterClick:PropTypes.func.isRequired,
    filter:PropTypes.string.isRequired
}
export default Footer;