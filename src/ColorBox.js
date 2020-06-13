import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, withRouter } from 'react-router-dom';
import chroma from 'chroma-js';
// styles
import { withStyles } from '@material-ui/styles';
import "./ColorBox.css";

const styles = {
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.1 ? "black" :"white"
    }
    

}

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({
            copied: true
        }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });

    }
    render() {
        const { name, background, paletteId, id, moreUrl, showLink, classes } = this.props;
        const copied = this.state.copied;

        const isDarkColor = chroma(background).luminance() <= 0.1;
        const isLightColor = chroma(background).luminance() >= 0.1;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div className={`copy-overlay ${copied && "show"}`} style={{ background }} />



                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied</h1>
                        <p className={classes.copyText}>{background}</p>

                    </div>


                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.copyText}>{name} </span>


                        </div>

                        <button className={`copy-btn ${isLightColor ? "dark-bg" : "light-bg"}`}>Copy </button>
                        {showLink &&
                            <Link
                                // to={`/palette/${paletteId}/${id}`}
                                to={moreUrl}
                                onClick={e => e.stopPropagation}>
                                <span className={`see-more ${isLightColor ? "dark-bg" : "light-bg"}`}>More</span>
                            </Link>
                        }
                    </div>


                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);