import React from "react";

export default function FindeesCard ({ findee })
{
   

    const imgPath = `/storage/${ findee?.fullImage }`

    return (
        <div className="card w-full bg-base-100 shadow-xl mx-0 mb-3">
            <figure><img src={ imgPath } alt="Profile" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    { findee?.fullName } ({findee?.age})
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
