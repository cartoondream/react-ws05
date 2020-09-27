import React, { Component } from 'react'
import { Button, Grid, Menu } from 'semantic-ui-react'

import shirtImgWh from '../images/white.jpg'
import shirtImgBk from '../images/black.jpg'
import shirtImgBl from '../images/blue.jpg'
const color = 'blue'


class Tools extends Component {
    
    state = {
        showShirt: true,
        showPritable: true,
        activeItem: 'white',
        activeSize: 'S',
        shirtImg: shirtImgWh,
        price:100
    }

    handleShowShirt = (e, { name ,imgSrc}) => {
        this.setState({
            activeItem: name,
            shirtImg: imgSrc
        })

       
        console.log(this.state.shirtImg)
        console.log(name)
    }

    handleShowPrintable = () => {
        this.setState({
            showPritable: !this.state.showPritable
        })
    }
    handleSizeClick = (e, { size ,price}) => {
        this.setState({ 
            activeSize: size,
            price: price
           
        })
        
        console.log(size)
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
            },

        }
        const { activeItem } = this.state
        const { activeSize } = this.state
        const { shirtImg } = this.state
        const { price } = this.state
  
        return (
            <div className="canvas-container">
                <Grid> 
                    <Grid.Column width={9}>
                    <Grid.Row>
                   
                     
                            <img src={shirtImg} alt=""/>
                      
                        
                         
                    </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Grid.Row>
                        <h2>Choose color</h2>
                        <Menu color={color}  widths={3}>
                            <Menu.Item name='white' imgSrc={shirtImgWh} onClick={this.handleShowShirt} active={activeItem === 'white'}>
                                white
                            </Menu.Item>
                            <Menu.Item name='black'  imgSrc={shirtImgBk}  onClick={this.handleShowShirt} active={activeItem === 'black'}>
                                black
                            </Menu.Item>
                            <Menu.Item  name='blue'  imgSrc={shirtImgBl} onClick={this.handleShowShirt} active={activeItem === 'blue'}>
                                blue
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                    
                    <Grid.Row>
                        <br></br><br></br>
                        <h2>Choose size</h2>
                        <Menu color={color}  widths={3}>
                            <Menu.Item size='S' price='100' onClick={this.handleSizeClick} active={activeSize === 'S'}>
                                  S
                            </Menu.Item>
                            <Menu.Item size='M' price='150' onClick={this.handleSizeClick} active={activeSize === 'M'}>
                                  M 
                            </Menu.Item>
                            <Menu.Item  size='L' price='200' onClick={this.handleSizeClick} active={activeSize === 'L'}>
                                L
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                    <Grid.Row>
                        
                        <div className="price">
                        <br></br>
                          <p><h2>Price: {price}฿</h2>ฺ <Button basic color='teal' content='Check out' /></p>  
                        </div>
                    </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Tools