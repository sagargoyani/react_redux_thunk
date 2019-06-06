import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateUser } from '../actions'


class User extends Component {

    state = {
        user: this.props.user && this.props.user.name && this.props.user.name
    }
    inputChangeHandler = (e) => {
        const { value } = e.target
        this.setState({
            user: value
        }, () => {
            this.props.updateUser(this.state.user)
        }
        )
    }
    render() {
        return (
            <div className="col">
                <div className="border">update user</div>
                <div>
                    <input type="text" onChange={this.inputChangeHandler} value={this.state.user} />
                </div>
                <div>{this.props.user && this.props.user.name && this.props.user.name}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return ({
        user: state.user
    })
}

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        updateUser
    },
        dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(User);
