import React, { Component } from 'react'
import { Button, Grid, Menu } from 'semantic-ui-react'

import shirtImg from '../images/white.jpg'

class Shirt extends Component {
    state = {
        showShirt: true,
        showPritable: true
    }

    handleShowShirt = () => {
        this.setState({
            showShirt: !this.state.showShirt
        })
    }

    handleShowPrintable = () => {
        this.setState({
            showPritable: !this.state.showPritable
        })
    }

    render() {
        const style = {
            printable: {
                position: 'absolute',
                width: '200px',
                height: '200px',
                border: "1px solid #000",
                left: '10.6em',
                top: '10em'
            }
        }
        return (
            <div className="canvas-container">
                <Grid>
                    <Grid.Row>
                        {this.state.showShirt ? 
                            <img src={shirtImg} alt=""/> : <h1>No Shirt</h1>
                        }
                        
                        { this.state.showPritable ?
                            <div className="printable-area" style={style.printable}></div> :
                            <div></div>
                        }
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Shirt