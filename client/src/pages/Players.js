import React from "react";
import PlayerCard from "../components/PlayerCard/PlayerCard";

function Players ({players}) {
    return(
        <div>
            {players.map(player => (
                <PlayerCard player={player}/>
            ))}
        </div>
    )
}

export default Players;
