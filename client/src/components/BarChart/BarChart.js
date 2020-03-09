import React from 'react';
import Plot from 'react-plotly.js';


function BarChart ({player}) {
    // let player = Object.assign(c)
    // delete player.id
    // delete player.age
    // delete player.img
    // delete player.team
    // delete player.name

    console.log(player)
 
    return (
      <Plot
        data={[
         
          {type: 'bar', x: Object.keys(player), y: Object.values(player)},
        ]}
        // layout={ {width: 320, height: 240, } }
      />
    );
  }
export default BarChart;


