import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';


const styles = {
    root: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        border: "1px solid #333",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        display:"flex",
        flexWrap:"wrap",
        width:"100%",
height:"150px",
borderRadius:"5px",
overflow:"hidden"
    },
    title: {
        display: "flex",
        margin: "0",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "0.5rem",
        position: "relative",

    },
    emoji: {

    },
    miniColor: {
width:"20%",
height:"25%",
display:"inline-block",
margin:"auto"

    }


}

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors } = props;
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} style={{ backgroundColor: color.color }}></div>
    ))
    return (

        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}> {emoji}</span></h5>


        </div>
    )
}
export default withStyles(styles)(MiniPalette);