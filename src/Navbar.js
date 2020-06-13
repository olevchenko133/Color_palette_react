import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Select, MenuItem, Snackbar } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';


import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.CloseSnackbar = this.CloseSnackbar.bind(this);
    }

    handleFormatChange(e) {
        this.setState({
            format: e.target.value,
            open: true
        });
        this.props.handleChange(e.target.value);
    }
    CloseSnackbar() {
        this.setState({
            open: false
        });
    }


    render() {
        const { level, changeLevel, handleChange, showingAllColors } = this.props;
        const { format } = this.state.format;
        return (
            <header className="Navbar">

                <div className="logo">

                    <Link className="logo-link" to="/">  ReactColors</Link>
                </div>
                {showingAllColors && <div className="slider-container">
                    <span>level: {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                    </div>
                </div>
    }
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX- #FFFFFF </MenuItem>
                        <MenuItem value="rgb">RGB- rgb(255,255,255) </MenuItem>
                        <MenuItem value="rgba">RGBA- rgba(255,255,255, 0.1) </MenuItem>

                    </Select>

                </div>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span>Format Changed to: {this.state.format}</span>}
                    onClose={this.CloseSnackbar}
                    action={[
                        <IconButton onClick={this.CloseSnackbar} color="inherit" key="close">
                            <CloseIcon />
                        </IconButton>
                    ]}

                />

            </header>
        )
    }
}
export default Navbar;