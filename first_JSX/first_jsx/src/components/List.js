import React, { Component } from 'react';

class List extends Component{
    render () {
        return(
            <div>
                <h3>Things I Must Do:</h3>
                <ul>
                    <li>Learn All About React</li>
                    <li>Paint Epic Miniatures</li>
                    <li>Exercise / Eat Healthy</li>
                    <li>Make My First Million</li>
                    <li>Help People Create</li>
                </ul>
            </div>
        )
    }
}

export default List;