import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../services/auth';

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Spinner from '../components/spinner';
import { setUserName, toggleAuth } from '../store/atuh';
import { useNavigate } from 'react-router-dom';

export interface LoginForm {
    userName: string;
    password: string;
}

const FormSchema = Yup.object().shape({
    userName: Yup.string()
        .min(5, 'Too Short!')
        .required('Required'),
    password: Yup.string()
        .min(4, 'Too Short!')
        .required('Required')
});

function Login() {
    const { isLoggedIn } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (isLoggedIn) navigate("/dashboard");
    }, [isLoggedIn])


    const handleSubmit = async (values: LoginForm, { setSubmitting }: FormikHelpers<LoginForm>) => {
        setSubmitting(true)
        try {
            const {userName} = await login(values);
            localStorage.setItem("auth", JSON.stringify({ isLoggedIn: true, userName }));
            dispatch(toggleAuth(true));
            dispatch(setUserName(userName));
            // navigate("/dashboard");
        }
        catch (error: any) {
            console.error(error)
        }
        finally {
            setSubmitting(false)
        }
    }

    return (
        <div className='bg-eth bg-center md:bg-cover'>
            <div className='bg-black bg-opacity-60'>
                <div className="min-h-screen flex justify-center items-center flex-col gap-10">
                    <h1 className='font-bold text-4xl text-white mx-2 sm:mx-0'>Login</h1>
                    <div className="w-[450px] rounded overflow-hidden shadow-lg bg-white mx-2 sm:mx-0">
                        <div className="px-6 py-4">
                            <Formik
                                initialValues={{ userName: "", password: "" }}
                                onSubmit={handleSubmit}
                                validationSchema={FormSchema}
                            >
                                {({
                                    isSubmitting,
                                    isValid,
                                    errors
                                }) => (
                                    <Form className='flex flex-col gap-4'>
                                        <div>
                                            <label htmlFor="userName" className='font-semibold inline-block mb-2'>User Name</label>
                                            <Field
                                                type="text"
                                                name="userName"
                                                id='userName'
                                                className={`app-input ${errors.userName ? 'border-red-600' : ''}`}
                                                placeholder="Enter your User Name"
                                            />
                                            <ErrorMessage name="userName" component="div" className='w-full inline-block text-red-600 pl-2' />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className='font-semibold inline-block mb-2'>Password</label>
                                            <Field
                                                type="password"
                                                name="password"
                                                id='password'
                                                className={`app-input ${errors.password ? 'border-red-600' : ''}`}
                                                placeholder="Password"
                                            />
                                            <ErrorMessage name="password" component="div" className='w-full inline-block text-red-600 pl-2' />
                                        </div>

                                        <div>
                                            <button
                                                disabled={isSubmitting || !isValid}
                                                type="submit"
                                                className='button'
                                            >
                                                {isSubmitting ? <><Spinner /> Connecting..</> : <span>Connect</span>}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
