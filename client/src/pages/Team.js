import React from "react";
import { Table } from "reactstrap"
import Teams from "../components/Teams.json"

function Team(props) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Teamid</th>
                    <th>Img</th>

                    <th>ABRV</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {Teams.map(Teams => (
                    <tr key={Teams.teamId}>
                        <td scope="row">{Teams.teamId}</td>
                        <td>
                            <img src={Teams.img} height="50px" width="50px"></img>

                        </td>
                        <td>{Teams.ABRV}</td>
                        <td>{Teams.city}</td>
                    </tr>
                ))}
            </tbody>

        </Table>
    )

}

export default Team;
