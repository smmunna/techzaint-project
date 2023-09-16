import React from "react";
import Cover from "../../../components/Cover/Cover";
import PageTitle from "../../../components/PageTitle/PageTitle";
import img1 from "../../../assets/banner/banner1.jpg"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CourseList = () => {
    const [courses, setCourses] = useState([])
    const [oneCourse, setOneCourse] = useState([])

    const fetchCourseData = () => {
        axios
            .get(`http://localhost:8000/api/course`) //TODO: change Here with live site;
            .then((res) => {
                setCourses(res.data.course);

            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        // Fetch course data when the component mounts
        fetchCourseData();
    }, []);


    // Deleting the Item;
    const handleDeleteItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/delete/${id}`) //TODO: chage with live site;
                    .then(res => {
                        if (res.data.status == 'deleted') {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Deleted",
                                showConfirmButton: false,
                                timer: 1500,
                            });

                            fetchCourseData();
                        }
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            }
        })

    }

    // Getting course by their Id;
    const handleGetCourse = (id) => {
        axios.get(`http://localhost:8000/api/course/${id}`)  //TODO: change Here with live site;
            .then(res => {
                setOneCourse(res.data.course)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const handleUpdateData = (e) => {
        e.preventDefault()
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const price = form.price.value;
        const status = form.status.value;
        const instructor = form.instructor.value;
        const demo = form.demo.value;
        const total_time = form.total_time.value;
        const description = form.description.value;
        const content_preview = form.content_preview.value;

        const courseData = {
            id,
            title,
            price,
            status,
            instructor,
            demo,
            total_time,
            description,
            content_preview
        }

        axios.put(`http://localhost:8000/api/update-course/${id}`, courseData)  //TODO: change Here with live site;
            .then(res => {

                if (res.data.status == 'ok') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Updated",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset()
                    fetchCourseData();
                }

            })
            .catch((error) => {
                console.error(error); // Handle errors
            });
    }

    // Search query;
    const handleSearchByTitle = (e) =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        
        axios.get(`http://localhost:8000/api/search-course/${title}`)
        .then(res=>{
            setCourses(res.data.course)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <div>
            <PageTitle title={`Courses List`} />
            <Cover title={`List of Courses & Projects`} img={img1} />
            <div className="px-0 lg:px-24 pb-12">
            {/* Search Item */}
                <div className="my-2">
                    <div>
                        <form onSubmit={handleSearchByTitle}>
                            <div>
                                <input
                                    className="input input-bordered input-primary p-2 w-full md:w-[400px]"
                                    type="text"
                                    name="title"
                                    placeholder="Search by title or keep it empty & enter "
                                />
                                <button type="submit" className="btn btn-accent ml-2">Search</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-[350px] md:w-[500px] lg:w-full overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-slate-950 text-white">
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Cover Photo</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Status</th>
                                    <th>Instructor</th>
                                    <th colSpan={2} className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    courses.map((course, index) => <React.Fragment key={index + 1}>
                                        <tr className={`${(index + 1) % 2 == 0 ? 'bg-base-200' : ''}`}>
                                            <th>{index + 1}</th>
                                            <td>{course?.title}</td>
                                            <td>{course?.category}</td>
                                            <td><img className="border-4 border-red-300" src={`http://localhost:8000/images/${course?.thumbnail.replace('photogallery', '')}`} width={80} alt="" /></td> {/* TODO: Change Here with Live site */}
                                            <td>{course?.price} BDT</td>
                                            <td>{course?.discount_price}%</td>
                                            <td>{course?.status}</td>
                                            <td>{course?.instructor}</td>
                                            <td className="flex gap-4 items-center justify-center">
                                                <Link onClick={() => document.getElementById('my_modal_3').showModal()}><button className="btn btn-accent" onClick={() => handleGetCourse(course.id)}>Edit</button></Link>
                                                <Link><button className="btn btn-error" onClick={() => handleDeleteItem(course.id)}>X</button></Link>
                                            </td>
                                        </tr>
                                    </React.Fragment>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>


                {/* Modal */}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <div>
                                <form onSubmit={handleUpdateData}>
                                    <div>
                                        <input
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="id"
                                            defaultValue={oneCourse.id}
                                            hidden
                                        />
                                    </div>
                                    <div>
                                        <p>Title: </p>
                                        <input
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="title"
                                            defaultValue={oneCourse.title}

                                        />
                                    </div>
                                    <div>
                                        <p>Price: </p>
                                        <input
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="price"
                                            defaultValue={oneCourse.price}

                                        />
                                    </div>
                                    <div>
                                        <p>Status: </p>
                                        <input
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="status"
                                            defaultValue={oneCourse.status}

                                        />
                                    </div>
                                    <div>
                                        <p>Instructor: </p>
                                        <input
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="instructor"
                                            defaultValue={oneCourse.instructor}
                                        />
                                    </div>
                                    <div>
                                        <p>Total Time: </p>
                                        <input
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="total_time"
                                            defaultValue={oneCourse.total_time}
                                        />
                                    </div>
                                    <div>
                                        <p>Demo: </p>
                                        <input
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="demo"
                                            defaultValue={oneCourse.demo}
                                        />
                                    </div>
                                    <div>
                                        <p>Description: </p>
                                        <textarea
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="description"
                                            defaultValue={oneCourse.description}
                                        />
                                    </div>
                                    <div>
                                        <p>Content Preview: </p>
                                        <textarea
                                            className="login-input p-2 w-full md:w-[400px]"
                                            type="text"
                                            name="content_preview"
                                            defaultValue={oneCourse.content_preview}
                                        />
                                    </div>
                                    <button type="submit" className="p-4 mt-2 btn btn-accent w-[100px]">
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>



            </div>
        </div>
    );
}

export default CourseList;
