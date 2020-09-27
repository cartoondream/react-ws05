import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    //const logo;
    render() {
        return (
        <div className="ui teal inverted fixed menu">
           
            <a class="item">
               Home
            </a>
            <a class="item">
                Products
            </a>
            <a class="item">
                Contact
            </a>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..."/>
                        <i class="search link icon"></i>
                    </div>
                </div>
                
            </div>
        </div>

        )
    }
}

export default NavBar