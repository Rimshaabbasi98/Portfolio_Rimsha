import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const namePattern = /^[A-Za-z\s]+$/;
        const emailStartsWithNumber = /^[0-9]/;


        if (!formData.name) {
            newErrors.name = 'Name is required.';
        } else if (!namePattern.test(formData.name)) {
            newErrors.name = 'Name should not contain numbers.';
        }


        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (emailStartsWithNumber.test(formData.email)) {
            newErrors.email = 'Email should not start with a number.';
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Email is not valid.';
        }

        if (!formData.message) newErrors.message = 'Message is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log('Form submitted:', formData);
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    return (
        <section id="Contact" className="w-full h-auto md:h-screen bg-gray-200 py-12 lg:py-24">
            <div className="container mx-auto w-[80%] px-4">
                {/* Success Message */}
                {successMessage && (
                    <div className="bg-green-400 text-center text-white p-4 rounded-md mb-4">
                        {successMessage}
                    </div>
                )}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Contact Me <span className="block h-1 w-24 bg-sky-400 mt-2 mx-auto rounded"></span>
                </h2>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/5 mx-auto space-y-4">
                    <div>
                        <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            placeholder="Enter your name"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            placeholder="Enter your email"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`border ${errors.message ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            rows="5"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <div className='text-center'>
                        <button
                            type="submit"
                            className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-sky-400 rounded-md hover:bg-sky-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
