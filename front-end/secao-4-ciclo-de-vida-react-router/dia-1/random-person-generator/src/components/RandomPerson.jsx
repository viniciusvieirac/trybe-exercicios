import React, { Component } from 'react';
import Loading from './Loading';
import PersonCards from './PersonCards';

class RandomPerson extends Component {
    constructor() {
        super();
    
        this.state = {
          loading: true,
          person: [],
        };
      }
    
      componentDidMount() {
        const url = 'https://api.randomuser.me/';
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              person: data.results,
              loading: false,
            });
          });
      }

      getUsersInfos(user) {
        return {
          name: `${user.name.fisrt}${user.name.last}`,
          email: `${user.email}`,
          age: `${user.dob.age}`,
          image: `${user.picture.thumbnail}`,
        }
      }
    render() {
        const { loading, person } = this.state;
        if (loading === true) return <Loading />
        return (
            <div>
                <PersonCards person={this.getUsersInfos(person[0])}/>
            </div>
        );
    }
}

export default RandomPerson;