import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom';



class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);

        this.state = {
            format: "hex"
        };
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(palette, colorToFilterBy) {
        // return all shades of given color
        let shades = [];
        let AllColors = palette.colors;
        for (let key in AllColors) {
            shades = shades.concat(
                AllColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    }
    changeFormat(val) {
        this.setState({ format: val });
    }

    render() {
        const { paletteName, emoji, id } = this.props.palette;
        const { format } = this.state;
        const colorBoxes = this._shades.map(color => (
            <ColorBox name={color.name} key={color.name} background={color[format]} showLink={false} />
        ));

        return (
            <div>
                <Navbar handleChange={this.changeFormat}
                    showingAllColors={false}
                />

                <div className="SingleColorPalette Palette">
                    <div className="Palette-colors">
                        
                        {colorBoxes}
                        <div className="ColorBox go-back">
                            <Link to={`/palette/${id}`} className="back-btn"> Go Back!</Link>
                        </div>
                        </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>)

    }
}


export default SingleColorPalette;