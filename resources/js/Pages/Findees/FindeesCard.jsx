import React from "react";

export default function FindeesCard ({ findee })
{
    const age = () =>
    {
        // Get the date of birth from the user or a database
        const dob = new Date(findee?.dateOfBirth); // Replace this with the actual date of birth

        // Get the current date
        const currentDate = new Date();

        // Calculate the difference in years
        let age = currentDate.getFullYear() - dob.getFullYear();

        // Check if the birthday for this year has occurred or not
        // If the birthday for this year has not occurred yet, subtract 1 from the age
        if (
            currentDate.getMonth() < dob.getMonth() ||
            (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
        )
        {
            age--;
        }

        return age;
    }

    const imgPath = `/storage/${ findee?.fullImage }`

    return (
        <div className="card w-full bg-base-100 shadow-xl mx-0 mb-3">
            <figure><img src={ imgPath } alt="Profile" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    { findee?.fullName } ({ age() })
                    {/* <div className="badge badge-secondary">NEW</div> */ }
                </h2>
                {/* <p>{ findee?.currentAddress } </p> */ }
                <ul>
                    <li>{ findee?.occupation }</li>
                    <li>{ findee?.currentAddress }</li>
                    <li>{ findee?.weight } | { findee?.height }</li>
                    <li>{ findee?.race } | { findee?.religion }</li>
                </ul>
                {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">{ findee?.race }</div>
                    <div className="badge badge-outline">{ findee?.religion }</div>
                </div> */}
            </div>
        </div>
    )
}
