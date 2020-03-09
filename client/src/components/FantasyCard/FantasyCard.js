import React from "react";
import {Card} from "reactstrap";
import "./style.css";


function FantasyCard ({player}) {
    return(
        <Card>
          <div className="card">
              <div className="img-container">
                  <img alt={player.name} src={player.img} />
              </div>
              <div className="content">
                  <ul>
                      <li>
                          <strong>Name:</strong> {player.name}
                      </li>
                      <li>
                          <strong>Team:</strong> {player.team}
                      </li>
                      <li>
                          <strong>Age:</strong> {player.age}
                      </li>
                      <li>
                          <strong>Min:</strong> {player.min}
                      </li>
                      <li>
                          <strong>PTS:</strong> {player.pts}
                      </li>
                      <li>
                          <strong>FGM:</strong> {player.fgm}
                      </li>
                      <li>
                          <strong>FGA:</strong> {player.fga}
                      </li>
                      <li>
                          <strong>FG%:</strong> {player.fg}
                      </li>
                      <li>
                          <strong>3PM:</strong> {player.threepm}
                      </li>
                      <li>
                          <strong>3PA:</strong> {player.threepav}
                      </li>
                      <li>
                          <strong>3P:</strong> {player.threepoint}
                      </li>
                      <li>
                          <strong>FTM:</strong> {player.ftm}
                      </li>
                      <li>
                          <strong>FTA:</strong> {player.fta}
                      </li>
                      <li>
                          <strong>FT:</strong> {player.ft}
                      </li>
                      <li>
                          <strong>OREB:</strong> {player.oreb}
                      </li>
                      <li>
                          <strong>DREB:</strong> {player.dreb}
                      </li>
                      <li>
                          <strong>REB:</strong> {player.reb}
                      </li>
                      <li>
                          <strong>AST:</strong> {player.ast}
                      </li>
                      <li>
                          <strong>TOV:</strong> {player.tov}
                      </li>
                      <li>
                          <strong>STL:</strong> {player.stl}
                      </li>
                      <li>
                          <strong>BLK:</strong> {player.blk}
                      </li>
                      <li>
                          <strong>PF:</strong> {player.pf}
                      </li>
                      <li>
                          <strong>FP:</strong> {player.fp}
                      </li>
                  </ul>
              </div>
          </div>
            
        </Card>
    )
}

export default FantasyCard;