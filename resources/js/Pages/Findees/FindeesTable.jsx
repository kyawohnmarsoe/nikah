import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FindeesTableRow from './FindeesTableRow'

export default function FindeesTable ({ auth, findees })
{
    console.log(findees)
    return (
        <AuthenticatedLayout
            user={ auth.user }
            header={ <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2> }
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-4">
                    <div className=" overflow-hidden sm:rounded-lg">
                        <div className="p-4 text-gray-900">

                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */ }
                                    <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Address</th>
                                            <th>Occupation</th>
                                            <th>Socialmedia</th>
                                            <th>Online Status</th>
                                            <th>Others</th>
                                        </tr>
                                    </thead>

                                    <tbody>


                                        {
                                            findees?.map((findee, index) => <FindeesTableRow findee={ findee } key={ index } />)
                                        }


                                    </tbody>
                                    {/* foot */ }
                                    <tfoot>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Address</th>
                                            <th>Occupation</th>
                                            <th>Socialmedia</th>
                                            <th>Online Status</th>
                                            <th>Others</th>
                                        </tr>
                                    </tfoot>

                                </table>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
