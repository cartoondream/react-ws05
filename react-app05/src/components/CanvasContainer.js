import React, { Component } from 'react'
import { Button, Grid, Menu } from 'semantic-ui-react'

import shirtImg from '../images/shirt.jpg'

class CanvasContainer extends Component {
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
                width: '250px',
                height: '250px',
                border: "1px solid #000",
                left: '15em',
                top: '15em'
            }
        }
        return (
            <div className="canvas-container">
                <Grid>
                    <Grid.Row centered={true}>
                        <Menu>
                            <Menu.Item>
                                <Button onClick={this.handleShowShirt}>
                                    {this.state.showShirt ? "Hide Shirt" : "Show Shirt"}
                                </Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button onClick={this.handleShowPrintable}>
                                    {this.state.handleShowPrintable ? "Hide Printable Area" : "Show Printable Area"}
                                </Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button>
                                    Reset
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
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

export default CanvasContainer