import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

function userDetailsModal({show, handleClose, singleUserData}) {
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleUserData.firstName} {singleUserData.lastName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={12} className='mb-1'><h5>Personal Details</h5></Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Email:</strong> {singleUserData.email}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Gender:</strong> {singleUserData.gender}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Age:</strong> {singleUserData.age} years</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>University:</strong> {singleUserData.university}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Blood Group:</strong> {singleUserData.bloodGroup}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Eye:</strong> {singleUserData.eyeColor}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Hair:</strong> {singleUserData.hair?.color} ({singleUserData.hair?.type})</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>DOB:</strong> {singleUserData.birthDate}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Phone:</strong> {singleUserData.phone}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Height:</strong> {singleUserData.height}</Col>
            </Row>

            {singleUserData.address &&
            <Row className='mt-4'>
                <Col xs={12}><h5>Address</h5></Col>
                <Col xs={12} lg={6} className='mb-1'><strong>H. No. and Street:</strong> {singleUserData.address.address}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>City:</strong> {singleUserData.address.city}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>State:</strong> {singleUserData.address.state} - {singleUserData.address.stateCode}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Country:</strong> {singleUserData.address.country}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Postal Code:</strong> {singleUserData.address.postalCode}</Col>
            </Row>
            }

            {singleUserData.crypto &&
            <Row className='mt-4'>
                <Col xs={12}><h5>Crypto</h5></Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Coin:</strong> {singleUserData.crypto.coin}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Network:</strong> {singleUserData.crypto.network}</Col>
                <Col xs={12}><strong>Wallet:</strong> {singleUserData.crypto.wallet}</Col>
            </Row>
            }
            
            {singleUserData.company &&
            <Row className='mt-4'>
                <Col xs={12}><h5>Company</h5></Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Name:</strong> {singleUserData.company.name}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Title:</strong> {singleUserData.company.title}</Col>
                <Col xs={12} lg={6} className='mb-1'><strong>Department:</strong> {singleUserData.company.department}</Col>
            </Row>
            }

        </Modal.Body>
      </Modal>
  )
}

export default userDetailsModal
