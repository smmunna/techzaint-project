import React from 'react';
import { useContext } from 'react';
import { darkContext } from '../../context/darkmode/DarkContext';

const CustomerReview = () => {
    const { darkmode } = useContext(darkContext);
    return (
        <div>
            <div className={` px-4 lg:px-24 py-12 ${darkmode ? 'dark' : 'light light1'}`}>
                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <h3 className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-500">
                        Customer Review
                    </h3>
                    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                        As a global IT consulting company, we take pride in delivering top-notch services to our clients. We recently had the pleasure of working on a web app project, and we're thrilled to share the feedback we received from our valued customer:

                        Thank you to our wonderful client for these kind words. We look forward to continuing to provide exceptional web solutions to businesses like yours.
                    </p>
                </div>

                {/* Container for the Testimonials */}
                <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
                    {/* First Testimonial */}
                    <div className="mb-12 md:mb-0">
                        <div className="mb-6 flex justify-center">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                                alt="User 1"
                            />
                        </div>
                        <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
                        <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                            Web Developer
                        </h6>
                        <p className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                                />
                            </svg>
                            Working with TechZaint has been an incredible experience. Their expertise in web design and development is unmatched. They transformed our vision into a stunning web application that exceeded our expectations.
                        </p>
                    </div>

                    {/* Second Testimonial */}
                    <div className="mb-12 md:mb-0">
                        <div className="mb-6 flex justify-center">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                                alt="User 2"
                            />
                        </div>
                        <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
                        <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                            Graphic Designer
                        </h6>
                        <p className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                                />
                            </svg>
                            The team's professionalism and commitment to excellence were evident throughout the project. They were attentive to our needs, provided valuable insights, and delivered the project on time and within budget. We couldn't be happier with the results.
                        </p>
                    </div>

                    {/* Third Testimonial */}
                    <div>
                        <div className="mb-6 flex justify-center">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg"
                                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                                alt="User 3"
                            />
                        </div>
                        <h5 className="mb-4 text-xl font-semibold">John Doe</h5>
                        <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                            Product Manager
                        </h6>
                        <p className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.380 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.380 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                                />
                            </svg>
                            If you're looking for a reliable partner for web design, development, or web app creation, I highly recommend TechZaint. Their work speaks for itself, and their dedication to client satisfaction is truly commendable."
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CustomerReview;
