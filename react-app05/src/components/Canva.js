import React, { Component } from 'react';
import Shirt from './Shirt';
import Tools from './Tools';

class Canva extends Component {
    //const logo;
    render() {
        return (
        <div className="canva">
           
           <div class="row canva">
                
                <div class="col-10">
                <Tools></Tools>
                </div>
            </div>
        </div>

        )
    }
}

export default Canva