import React from "react";
import FantasyCard from "../components/FantasyCard/FantasyCard";



function Fantasy({fantasyPlayers, handleDelete}) {
    return (
        <div>
            
        
            {fantasyPlayers.map(player => (
                <FantasyCard handleDelete={handleDelete} player={player}/>
                ))}
        </div>



    )
}

export default Fantasy;