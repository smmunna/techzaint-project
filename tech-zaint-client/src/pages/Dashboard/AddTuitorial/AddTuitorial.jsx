import React from "react"
import img from "../../../assets/cover/cover3.jpg"
import PageTitle from "../../../components/PageTitle/PageTitle"
import Cover from "../../../components/Cover/Cover"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"
const AddTuitorial = () => {
    const [courseList, setCourseList] = useState([])
    const [courseIdChange, setCourseIdChange] = useState('')

    const getCourses = () => {
        axios.get(`${import.meta.env.VITE_LOCAL_SERVER}/course`)  //TODO: change here with live site;
            .then(res => {
                setCourseList(res.data.course)
            })
    }
    useEffect(() => {
        getCourses()
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const course_id = courseIdChange;
        const title = form.title.value;
        const project = form.project.value;
        const note = form.note.value;
        const video = form.video.value;
        const description = form.description.value;

        const tuitorial = {
            course_id,
            title,
            video,
            project,
            note,
            description
        }
        // console.log(tuitorial)
        axios.post(`${import.meta.env.VITE_LOCAL_SERVER}/add-tuitorial`,tuitorial)  //TODO: change Here with live site;
        .then(res=>{
            if(res.data.status == 'ok'){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Tuitorial has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
        <div>
            <PageTitle title={`Add Tuitorials`} />
            <Cover title={`Add Details of Tuitorials`} img={img} />
            <div className="px-2 lg:px-24 py-12">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                        <div className="space-y-2">
                            <h3 className="font-bold"> Course List</h3>
                            <hr />
                            {
                                courseList.map((course, index) => <React.Fragment key={index + 1}>
                                    <div>
                                        <h3><span className="font-bold">[{index+1}] </span> {course.title}</h3>
                                    </div>
                                </React.Fragment>)
                            }
                        </div>
                        <div>
                            <div className="space-y-2">
                                <h3 className="font-bold">Upload Your Tuitorials</h3>
                                <hr />
                                <div>
                                    <button className="btn  btn-accent" onClick={() => document.getElementById('my_modal_3').showModal()}>Click Here</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal Component */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg pb-3">Fill up the form correctly</h3>
                    <hr />
                    <div className="py-4">
                        <form onSubmit={handleFormSubmit}>

                            <div className="mb-2">
                                <select className="select select-bordered w-full md:w-[400px]" defaultValue={courseIdChange} onChange={(e)=>setCourseIdChange(e.target.value)}>
                                    <option>Course Course</option>
                                    {
                                        courseList.map((course, index) => <React.Fragment key={index + 1}>
                                            <option value={course.id}>{course.title}</option>
                                        </React.Fragment>)
                                    }
                                </select>
                            </div>

                            {/* <div className="mb-2">
                                <select className="select select-bordered w-full md:w-[400px]" defaultValue={courseTitleChange} onChange={(e)=>setCourseTitleChange(e.target.value)}>
                                    <option>Course Title</option>
                                    {
                                        courseList.map((course, index) => <React.Fragment key={index + 1}>
                                            <option value={course.title}>{course.id}. {course.title}</option>
                                        </React.Fragment>)
                                    }
                                </select>
                            </div> */}



                            <div className="mb-2">
                                <p>Title: </p>
                                <input
                                    className="login-input p-2 w-full md:w-[400px]"
                                    type="text"
                                    name="title"
                                    placeholder="Enter course Title..."
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <p>Video: </p>
                                <input
                                    className="login-input p-2 w-full md:w-[400px]"
                                    type="text"
                                    name="video"
                                    placeholder="Enter youtube embeded video..."
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <p>Project: </p>
                                <input
                                    className="login-input p-2 w-full md:w-[400px]"
                                    type="text"
                                    name="project"
                                    placeholder="Enter Project URL..."

                                />
                            </div>
                            <div className="mb-2">
                                <p>Note: </p>
                                <input
                                    className="login-input p-2 w-full md:w-[400px]"
                                    type="text"
                                    name="note"
                                    placeholder="Enter Note URL..."

                                />
                            </div>

                            <div className="mb-2">
                                <p>Description: </p>
                                <textarea rows={3}
                                    className="login-input p-2 w-full md:w-[400px]"
                                    type="text"
                                    name="description"
                                    placeholder="Enter description line by line..."

                                />
                            </div>
                            <div>
                                <button className="btn btn-accent" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>



        </div>
    );
}

export default AddTuitorial;
