import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

import UserDetailsModal from "./userDetailsModal";

function UsersTableData({ role }) {

    const getAllUsersData = useSelector(state => state.users);
    
    const [usersData, setUsersData] = useState([]);
    const [show, setShow] = useState(false);
    const [singleUserData, setSingleUserData] = useState({});

    const handleClose = () => {
        setShow(false);
        setSingleUserData({})
    };

    const handleShow = (data) => {
        setShow(true);
        setSingleUserData(data)
    };

    useEffect(() => {
        if(Object.keys(getAllUsersData).length > 0){
            const user = getAllUsersData.users.filter(user => user.role === role);
            setUsersData(user);
        }
    },[getAllUsersData, role])


  function addressFn(obj){
    return `${obj.address}, ${obj.city}, ${obj.state}, ${obj.postalCode}`
  }

  return (
    <>
    <Table striped bordered hover responsive>
        <thead>
        <tr>
            <th className='text-center'>#</th>
            <th>Name</th>
            <th className='text-center'>Blood</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
            {usersData.length > 0 ? 
                usersData?.map((user,index) => 
                    <tr key={user.id} onClick={() => handleShow(user)} role="button">
                        <td className='text-center'>{index + 1}</td>
                        <td width="250">{user.firstName} {user.lastName}</td>
                        <td className='text-center'>{user.bloodGroup}</td>
                        <td>{user.email}</td>
                        <td>{addressFn(user.address)}</td>
                    </tr>
            ) : <tr><td colSpan={6} className='text-center'>No Record Found</td></tr>}
        </tbody>
    </Table>
    <UserDetailsModal show={show} handleClose={handleClose} singleUserData={singleUserData} />
    </>
  )
}

export default UsersTableData
