import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "lightblue",
        alignItems:"center",
        display:"flex",
        height:"100vh",
        justifyContent:"center"
    },
    container: {
        height: "auto",
        alignItems:"center",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"


    },
    palettes:{
        boxSizing:"border-box",
        width: "100%",
        display:'grid',
        gridTemplateColumns:"repeat(3, 30%)",
        gridGap:"5%"


    },
    nav:{
        display:"flex",
        justifyContent:"space-between",
        flexWrap:"wrap"


    }
}

class PaletteList extends Component {


    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>

                    </nav>
                    <div className={classes.palettes}>

                        {palettes.map(palette => (
                            // <p> 
 <MiniPalette {...palette}  handleClick={()=>this.goToPalette(palette.id)}/>
                            // </p>

                          
                        ))}
                    </div>
                </div>
            </div>

        )

    }
}
export default withStyles(styles)(PaletteList);