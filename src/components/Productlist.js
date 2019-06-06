import React, { Component } from 'react';

import { deleteProduct } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Productlist extends Component {

    deleteProduct = index => {
        this.props.deleteProduct(index);
    }

    render() {
        return (
            <div className="col">
                <h1>
                    Product list...
                </h1>
                <div>
                    {this.props.products.length === 0
                        ? <h3>No Product Listed...</h3>
                        : this.props.products.map(
                            (product, index) => {
                                return (
                                    <div key={index}>
                                        <li>
                                            {product.product}
                                            <button className="btn-sm" onClick={() => this.deleteProduct(index)}>
                                                delete
                                            </button>
                                        </li>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return ({
        products: state.products
    })
}

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        deleteProduct
    },
        dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(Productlist);