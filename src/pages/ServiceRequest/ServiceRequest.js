import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'; // Assuming you're using Reactstrap
import './ServiceRequestForm.css'; // Custom styles if needed

const ServiceRequestForm = () => {
    const [formData, setFormData] = useState({
        serviceType: '',
        clientType: '',
        companyName: '',
        firstName: '',
        lastName: '',
        role: '',
        phoneNumber: '',
        bestTime: '',
        email: '',
        serviceLocation: '',
        scopeOfWork: '',
        keyDates: '',
        otherNotes: '',
        representative: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        for (const key in formData) {
            if (!formData[key] && key !== 'keyDates' && key !== 'otherNotes' && key !== 'representative') {
                newErrors[key] = 'This field is required';
            }
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setSuccessMessage('Service request submitted successfully!');
            // Reset the form after submission
            setFormData({
                serviceType: '',
                clientType: '',
                companyName: '',
                firstName: '',
                lastName: '',
                role: '',
                phoneNumber: '',
                bestTime: '',
                email: '',
                serviceLocation: '',
                scopeOfWork: '',
                keyDates: '',
                otherNotes: '',
                representative: '',
            });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="service-request-form" style={{ marginTop: 120 }}>
            <h2>New Service Request</h2>
            <div className='content'>
                        Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve.
                    </div>
            <p className="required-fields">Fields marked with an * are required</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="serviceType">1. Type of Service Needed:</Label>
                    <Input type="select" name="serviceType" id="serviceType" value={formData.serviceType} onChange={handleChange} required>
                        <option value="">Select a service</option>
                        <option value="Janitorial">Janitorial</option>
                        <option value="Maintenance & Repair">Maintenance & Repair</option>
                        <option value="Exterior Services">Exterior Services</option>
                    </Input>
                    {errors.serviceType && <Alert color="danger">{errors.serviceType}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="clientType">2. Type of Client *</Label>
                    <Input type="select" name="clientType" id="clientType" value={formData.clientType} onChange={handleChange} required>
                        <option value="">Select client type</option>
                        <option value="New">New</option>
                        <option value="Existing">Existing</option>
                    </Input>
                    {errors.clientType && <Alert color="danger">{errors.clientType}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="companyName">3. Name of Company Requesting Services *</Label>
                    <Input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} required />
                    {errors.companyName && <Alert color="danger">{errors.companyName}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="firstName">4. First Name of Contact Person *</Label>
                    <Input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />
                    {errors.firstName && <Alert color="danger">{errors.firstName}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">5. Last Name of Contact Person *</Label>
                    <Input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />
                    {errors.lastName && <Alert color="danger">{errors.lastName}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="role">6. Role of Contact Person *</Label>
                    <Input type="text" name="role" id="role" value={formData.role} onChange={handleChange} required />
                    {errors.role && <Alert color="danger">{errors.role}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="phoneNumber">7. Best Phone Number To Reach You *</Label>
                    <Input type="text" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    {errors.phoneNumber && <Alert color="danger">{errors.phoneNumber}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="bestTime">8. Best Time to Reach You *</Label>
                    <Input type="text" name="bestTime" id="bestTime" value={formData.bestTime} onChange={handleChange} required />
                    {errors.bestTime && <Alert color="danger">{errors.bestTime}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="email">9. Email Address *</Label>
                    <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <Alert color="danger">{errors.email}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="serviceLocation">10. Service Location Address or Addresses *</Label>
                    <Input type="textarea" name="serviceLocation" id="serviceLocation" value={formData.serviceLocation} onChange={handleChange} required />
                    {errors.serviceLocation && <Alert color="danger">{errors.serviceLocation}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="scopeOfWork">11. Scope of Work. To better serve you, please provide a detailed description and photos. *</Label>
                    <Input type="textarea" name="scopeOfWork" id="scopeOfWork" value={formData.scopeOfWork} onChange={handleChange} required />
                    <br/>
                    <Input id="exampleFile" name="file" type="file"/>
                    {errors.scopeOfWork && <Alert color="danger">{errors.scopeOfWork}</Alert>}
                </FormGroup>

                <FormGroup>
                    <Label for="keyDates">12. Key dates or Timelines/ Anticipated Start Date</Label>
                    <Input type="text" name="keyDates" id="keyDates" value={formData.keyDates} onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="otherNotes">13. Other Notes</Label>
                    <Input type="textarea" name="otherNotes" id="otherNotes" value={formData.otherNotes} onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="representative">14. SDA Representative, if applicable</Label>
                    <Input type="text" name="representative" id="representative" value={formData.representative} onChange={handleChange} />
                </FormGroup>
                <div style={{textAlign:'center'}}>
                <Button color="primary" type="submit" outline className="primary-btn" style={{margin:'0 auto', padding:'8px 48px'}}>
                    Submit
                </Button>
                </div>
                <br />
                {successMessage && <Alert color="success">{successMessage}</Alert>}
            </Form>
        </div>
    );
};

export default ServiceRequestForm;
