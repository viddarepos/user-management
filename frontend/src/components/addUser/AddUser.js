import React, { useState } from 'react'
import UserService from '../../services/UserService';

const AddUser = () => {

    const [user, setUser] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value })
    }

    const saveUser = (e) => {
        e.preventDefault();
        
        UserService.saveUser(user)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New User</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">First Name</label>
                    <input className="h-10 w-96 border mt-2 px-2 py-2" name="firstName" value={user.firstName} onChange={(e) => handleChange(e)} type='text' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                    <input className="h-10 w-96 border mt-2 px-2 py-2" name="lastName" value={user.lastName} onChange={(e) => handleChange(e)} type='text' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Email</label>
                    <input className="h-10 w-96 border mt-2 px-2 py-2" name="emailId" value={user.emailId} onChange={(e) => handleChange(e)} type='email' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-6" onClick={saveUser}>Save</button>
                    <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-2 px-6">Clear</button>
                </div>

            </div>
        </div>
    )
}

export default AddUser