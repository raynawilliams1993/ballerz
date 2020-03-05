import React from "react";
import {Card} from "reactstrap";


function PlayerCard ({player}) {
    return(
        <Card>
            <ul>
                {Object.entries(player).map(([key, value]) => (
                    <li>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default PlayerCard;