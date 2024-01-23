import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import "./index.scss"
import { Helmet } from 'react-helmet-async';
import UseFetchData from '../../hooks/UseFetchData';

const Admin = () => {
    const {data, setData} = UseFetchData()
    const url = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:7000/${productId}`);
            setData((prevData) => prevData.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

  return (
    <div>
        <Helmet>
            <title>Admin</title>
        </Helmet>
        <Formik
        initialValues={{ name: '', price: '', image: '' }}
        validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            price: Yup.number().min(1).required('Required'),
            image: Yup.string().matches(url).required('Required'),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
            setTimeout(async () => {
              try {
                await axios.post("http://localhost:7000", values);
                setData([...data, values]);
                resetForm();
              } catch (error) {
                console.log(error);
              } finally {
                setSubmitting(false);
              }
            }, 400);
          }}
        >
        <Form>
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" />

            <Field name="price" type="text" placeholder="Price" />
            <ErrorMessage name="price" />

            <Field name="image" type="text" placeholder="Image" />
            <ErrorMessage name="image" />

            <button type="submit">Submit</button>
        </Form>
        </Formik>
        <table>
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((item) => (
                        <tr key={item._id}>
                            <td className='image'><img src={item.image} alt="" /></td>
                            <td><p>{item.name}</p></td>
                            <td><span>${item.price}</span></td>
                            <td><button id="delete" onClick={() =>handleDeleteProduct(item._id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  );
};

export default Admin