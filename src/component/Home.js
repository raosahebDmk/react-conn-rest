import React from 'react'
import axios from 'axios';


export default class Home extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount()
    {
        axios.get(            
            'http://localhost:9092/hotels')
              .then(res => {
                console.log(res.data);
              });
    }


    render() {
        return (
            <div>
                <ul>
                    <h2>Name : {this.state.users.name}</h2>
                </ul>
            </div>
    
    )
    }
    
}
