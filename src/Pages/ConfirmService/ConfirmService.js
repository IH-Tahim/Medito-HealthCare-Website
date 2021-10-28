import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const ConfirmService = () => {
    const [complete, setComplete] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setComplete('Success! You will soon receive a email with details.');
    console.log(errors);

    const { serviceId } = useParams();
    const { user } = useAuth();


    return (
        <div>
            <Container>
                <h2 className="text-center mt-4 mb-3">Enter Your Details And Confirm Service</h2>
                <Row className="w-75 m-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                        <div className="mb-3">
                            <label className="form-label">Name: *</label>
                            <input type="text" value={user.displayName} placeholder="Full Name" className="form-control" {...register("Full Name", { required: true, maxLength: 80 })} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email: *</label>
                            <input type="text" className="form-control" value={user.email} placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number: *</label>
                            <input type="tel" className="form-control" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 1, maxLength: 12 })} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Service ID:</label>
                            <fieldset disabled>
                                <input className="form-control" type="text" value={serviceId} {...register("Service Name", { required: true })} />
                            </fieldset>


                        </div>


                        <select className="form-select mb-3" {...register("gender")}>
                            <option defaultValue>Select Your Gender</option>
                            <option value="female">Male</option>
                            <option value="male">Female</option>
                            <option value="other">Other</option>
                        </select>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Need Emergency Service?
                            </label>
                        </div>


                        <input type="submit" className="btn btn-primary" />
                        <h3 className="text-success my-2">{complete}</h3>
                    </form>
                </Row>
            </Container>



        </div>
    );
};

export default ConfirmService;