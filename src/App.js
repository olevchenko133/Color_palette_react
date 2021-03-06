import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";
import {Route, Switch} from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';



class App extends Component {

  findPalette(id){
   return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render() {
    // console.log(generatePalette(seedColors[4]));
    return (
<Switch>
{/* Display all palettes */}
<Route exact path="/" render={routeProps => <PaletteList  palettes={seedColors} {...routeProps}/>}/>
{/* Display ONE PALETTE page */}
<Route exact path="/palette/:id" render={routeProps => 
<Palette 
palette={generatePalette(this.findPalette(routeProps.match.params.id))}/> } />
{/* Display ONE COLOR page */}
<Route  path="/palette/:paletteId/:colorId" render={routeProps => 
<SingleColorPalette 
colorId={routeProps.match.params.colorId}
palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}/> } />

</Switch>

    );
  }
}


export default App;
