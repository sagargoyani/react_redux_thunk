import React, { Component } from 'react';
import { newProduct } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Newproduct extends Component {
    state = {
        newProduct: ''
    }

    inputChangeHandler = e => {
        const { value } = e.target;
        this.setState({
            newProduct: value
        })
    }

    addProduct = () => {
        this.props.addProduct(this.state.newProduct)
    }

    render() {
        // debugger
        return (
            <div className="col">
                <h1>new product...</h1>
                <div>
                    <div>current User : {this.props.user && this.props.user.name ? this.props.user.name : "guest user"}</div>
                    <div>total products : {this.props.products.length}</div>
                    <input value={this.state.newProduct} onChange={this.inputChangeHandler} />
                    <button onClick={this.addProduct}>Add</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return ({
        user: state.user,
        products: state.products
    });
}
const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        addProduct: newProduct
    },
        dispatch)
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Newproduct);

    // mapStateToProps,
    // mapActionsToProps