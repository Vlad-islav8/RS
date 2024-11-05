import React from "react";
import Userithem from "./UserIthem/UserIthem";

function Dialogusers(props) {

    let newUsers = props.users.map((el) => {
        return (
            <Userithem ava={el.ava} name={el.name}/>

        )
    })

    return (
        <div>
            {newUsers}

        </div>

    )
}

export default Dialogusers;