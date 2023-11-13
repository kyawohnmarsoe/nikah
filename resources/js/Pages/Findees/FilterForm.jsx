import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import Select from '@/Components/Select';

export default function FilterForm ({ address, race, religion, filterObj, setFilterObj })
{

    // const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        age: '',
        gender: '',
        currentAddress: '',
        race: '',
        religion: '',
    });

    const submit = (e) =>
    {
        e.preventDefault();

        // patch(route('profile.update'));
    };

    const changeHandler = (e) =>
    {
        e.preventDefault();
        const key = e.target.id
        const value = e.target.value

        setData(key, value)
        setFilterObj(data)

    }

    return (
        <div className='mb-5'>
            <form onSubmit={ submit } className="mt-6 space-y-6">
                <div className=" text-gray-900 flex flex-wrap ">
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2'>
                        <InputLabel htmlFor="age" value="Age" />

                        <Select
                            id="age"
                            type="age"
                            className="mt-1 block w-full"
                            value={ data.age }
                            // onChange={ (e) => setData('age', e.target.value) }
                            onChange={ (e) => changeHandler(e) }
                            required
                            autoComplete="age"
                        >
                            <option value='All'>All</option>
                            <option value='25'>Below 25</option>
                            <option value='30'>Below 30</option>
                            <option value='35'>Below 35</option>
                            <option value='40'>Below 40</option>
                            <option value='45'>Below 45</option>
                        </Select>

                        <InputError className="mt-2" message={ errors.age } />
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2'>
                        <InputLabel htmlFor="gender" value="Gender" />

                        <Select
                            id="gender"
                            type="gender"
                            className="mt-1 block w-full"
                            value={ data.gender }
                            onChange={ (e) => changeHandler(e) }
                            required
                            autoComplete="gender"
                        >
                            <option value='All'>All</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </Select>

                        <InputError className="mt-2" message={ errors.gender } />
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2'>
                        <InputLabel htmlFor="currentAddress" value="Address" />

                        <Select
                            id="currentAddress"
                            type="currentAddress"
                            className="mt-1 block w-full"
                            value={ data.currentAddress }
                            onChange={ (e) => changeHandler(e) }
                            required
                            autoComplete="currentAddress"
                        >
                            <option value='All'>All</option>
                        </Select>

                        <InputError className="mt-2" message={ errors.email } />
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2'>
                        <InputLabel htmlFor="race" value="Race" />

                        <Select
                            id="race"
                            type="race"
                            className="mt-1 block w-full"
                            value={ data.race }
                            onChange={ (e) => changeHandler(e) }
                            required
                            autoComplete="race"
                        >
                            <option value='All'>All</option>
                        </Select>

                        <InputError className="mt-2" message={ errors.email } />
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2'>
                        <InputLabel htmlFor="religion" value="Religion" />

                        <Select
                            id="religion"
                            type="religion"
                            className="mt-1 block w-full"
                            value={ data.religion }
                            onChange={ (e) => changeHandler(e) }
                            required
                            autoComplete="religion"
                        >
                            <option value='All'>All</option>
                        </Select>

                        <InputError className="mt-2" message={ errors.email } />
                    </div>
                </div>




                {/* <div className="flex items-center gap-4">
                    <PrimaryButton disabled={ processing }>Save</PrimaryButton>

                    <Transition
                        show={ recentlySuccessful }
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div> */}
            </form>
        </div>
    )
}
