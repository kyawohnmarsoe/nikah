import React from "react";

export default function FindeesTableRow ({ findee })
{
    return (
        <tr>

            <td>{ findee?.id }</td>

            <td>{ findee?.fullName }</td>

        </tr>
    )
}
