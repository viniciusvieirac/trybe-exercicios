import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonCards extends Component {
    render() {
        const { person: {name, email, age, image}} = this.props;
        return (
            <div>
                <p>{ name }</p>
                <p>{ email }</p>
                <p>{ age }</p>
                <img src={ image } alt={ name } />
            </div>
        );
    }
}

PersonCards.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
}

export default PersonCards;