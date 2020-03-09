import React from "react";
import FantasyCard from "../components/FantasyCard/FantasyCard";



function Fantasy({fantasyPlayers}) {
    return (
        <div>
            
        
            {fantasyPlayers.map(player => (
                <FantasyCard player={player}/>
                ))}
        </div>



    )
}

export default Fantasy;