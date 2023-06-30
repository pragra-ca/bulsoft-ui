import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {sendContactForm} from "@/lib/api"
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/router";


const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    contact: Yup.string()
        .matches(phoneRegex, "Invalid phone")
        .required("Phone is required"),
    message: Yup.string()
        .min(30, "Message length should be atleast 30 characters")
        .required("Message is required"),
});

const ContactForm = () => {

    const router = useRouter()

    const notifySuccess = () => toast.success('Message Sent');
    const notifyLoading = () => toast.loading('Sending for you');
    const notifyError = () => toast.error('Error Occured');


    const formik: any = useFormik({
        initialValues: {
            name: "",
            email: "",
            contact: "",
            message: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values,{setSubmitting}) => {
            // same shape as initial values
            notifyLoading()
            // console.log(JSON.stringify(values));
            
            sendContactForm(values).then((res)=> {
                    // console.log(res)
                    if(res.ok) {
                        notifySuccess()
                        router.push("/")
                    }
                    else {
                        notifyError()
 
                    }
                  
                    
            }).catch((err) => {
                notifyError()
                console.log(err)
            })
        },
    });

    return (
        <div className="lg:py-8 mx-auto max-w-7xl 2xl:container font-poppins">
            <div className="flex flex-col lg:flex-row py-4 md:py-20 md:px-6">
                <div className="lg:w-1/2 px-8 md:px-4 py-5 text-white m-auto">
                <Toaster 
                toastOptions={{
                    success: {
                        duration: 3000,
                      },
                      loading: {
                        duration: 3000
                      },
                      error: {
                        duration: 3000
                      }
                }}
                />
                    <p className="text-sm"> WHY CHOOSE US</p>
                    <h1 className="text-4xl font-bold md:text-6xl py-4">
                        Because we provide the most premium services.
                    </h1>
                    <p className="mt-4 lg:mt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora possimus non pariatur, distinctio nostrum
                        reiciendis aliquam. Officiis dolor magni vel est eum,
                        repellendus doloribus quae ducimus. Animi amet excepturi
                        dicta.
                    </p>
                </div>

                <div className="lg:w-1/2 px-2">
                <form className="w-full lg:96 mx-auto md:px-20 lg:px-15  py-5  m-auto flex flex-col gap-5  text-lg">
                    <div className="flex flex-col px-8 md:px-0">
                        {/* <label>Name</label> */}
                        <input
                            className=" px-4 py-3 bg-gray-700 text-white"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            type="text"
                            placeholder="Name"
                        />
                        {formik.errors?.name && formik.touched?.name && (
                            <div className="mt-1 text-red-800">
                                {formik.errors?.name}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col px-8 md:px-0">
                        {/* <label>Email Address</label> */}
                        <input
                            className="px-4 py-3  bg-gray-700 text-white"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            type="email"
                            placeholder="Email Address"
                        />
                        {formik.errors?.email && formik.touched?.email && (
                            <div className="mt-1 text-red-800 ">
                                {formik.errors?.email}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col px-8 md:px-0">
                        {/* <label>Contact No</label> */}
                        <input
                            className="px-4 py-3  bg-gray-700 text-white"
                            name="contact"
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                            type="text"
                            placeholder="Contact No"
                        />
                        {formik.errors?.contact && formik.touched?.contact && (
                            <div className="mt-1 text-red-800">
                                {formik.errors?.contact}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col px-8 md:px-0">
                        {/* <label>Message</label> */}
                        <textarea
                            className="px-4 py-3 h-24 md:h-40 bg-gray-700 text-white relative top-0"
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            
                            placeholder="Message"
                        />
                        {formik.errors?.message && formik.touched?.message && (
                            <div className="mt-1 text-red-800">
                                {formik.errors?.message}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col px-8 md:px-0">
                        <button
                            type="submit"
                            onClick={formik.handleSubmit}
                            className="px-4 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>  
                    </div>          
            </div>
        </div>
    );
};

export default ContactForm;
