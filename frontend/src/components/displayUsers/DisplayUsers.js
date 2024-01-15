import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserService from '../../services/UserService';

const DisplayUsers = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);

      try {

        const respone = await UserService.getUsers();
        setUsers(respone.data);

      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    fetchData();
  }, [])


  return (
    <div className="container mx-auto my-8 ">
      <div className="h-12">
        <button onClick={() => navigate("/addUser")} className="text-white rounded bg-slate-600 px-6 py-2 font-semibold ">Add Employee</button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">First Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Email ID</th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="text-left px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">{user.firstName}</div></td>
                  <td className="text-left px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">{user.lastName}</div></td>
                  <td className="text-left px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">{user.emailId}</div></td>
                  <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                    <a className="text-indigo-600 hover:text-indigo-800 px-4" href="#">Edit</a>
                    <a className="text-indigo-600 hover:text-indigo-800 " href="#">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default DisplayUsers