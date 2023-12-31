import React, { useEffect, useState } from "react";
import FindeesList from "./FindeesList";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FindeesCard from "./FindeesCard";
import FilterForm from "./FilterForm";
import PaginatedItems from "@/Components/PaginatedItems"


export default function Findees ({ auth, findees })
{
    const [filterObj, setFilterObj] = useState({})
    const [currentItems, setCurrentItems] = useState(findees)
    useEffect(() =>
    {
        // post(route('findees.search', filterObj));
        console.log('searching...')

    }, [filterObj])



    return (
        <AuthenticatedLayout
            user={ auth.user }
            header={ <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2> }
        >


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-4">
                    <div className=" overflow-hidden sm:rounded-lg">
                        <FilterForm 
                        filterObj={ filterObj } 
                        setFilterObj={ setFilterObj } 
                        />

                        <PaginatedItems 
                        items={ findees } 
                        itemsPerPage={ 10 } 
                        setCurrentItems={ setCurrentItems }
                        />

                        <div className=" text-gray-900 flex flex-wrap ">

                            {
                                currentItems?.map((findee => (
                                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2" key={ findee.id }>
                                        <FindeesCard findee={ findee } key={ findee.id } />
                                    </div>
                                )))
                            }

                        </div>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
