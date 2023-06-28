import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

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
    const formik: any = useFormik({
        initialValues: {
            name: "",
            email: "",
            contact: "",
            message: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // same shape as initial values
            console.log(JSON.stringify(values));
            //   axios.post("https://app.pragra.io/api/contact", JSON.stringify(values)).then(
            //     (response) => {

            //     },
            //     (error) => {
            //         console.log(error);
            //     }
            // );
        },
    });

    return (
        <div className="lg:py-8 mx-auto 2xl:container font-poppins">
            <div className="flex flex-col md:flex-row py-5 md:py-20 md:px-10">
                <div className="md:w-1/2 h-90 px-4 py-8 lg:px-20 text-white m-auto">
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

                <form className="w-full md:w-1/2  py-8  m-auto flex flex-col gap-5  text-lg">
                    <div className="flex flex-col px-8 md:px-0">
                        {/* <label>Name</label> */}
                        <input
                            className=" px-4 py-3 "
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
                            className="px-4 py-3 "
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            type="email"
                            placeholder="Email Address"
                        />
                        {formik.errors?.email && formik.touched?.email && (
                            <div className="mt-1 text-red-800">
                                {formik.errors?.email}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col px-8 md:px-0">
                        {/* <label>Contact No</label> */}
                        <input
                            className="px-4 py-3 "
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
                        <input
                            className="px-4 py-3 "
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            type="text"
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
                            className="px-4 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
