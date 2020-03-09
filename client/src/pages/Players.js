import React from "react";
import { Link } from "react-router-dom";
import PlayerCard from "../components/PlayerCard/PlayerCard";




function Players ({players, handleClick}) {
    return(
        <div>
            <Link to="/Fantasy">Fantasy Players</Link>
            {players.map(player => (
                <PlayerCard player={player} handleClick={handleClick}/>
                ))}
        </div>
        

    )
}

export default Players;
