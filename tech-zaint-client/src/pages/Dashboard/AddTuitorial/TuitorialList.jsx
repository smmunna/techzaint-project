import React, { useState } from 'react';
import PageTitle from "../../../components/PageTitle/PageTitle"
import Cover from "../../../components/Cover/Cover"
import axios from 'axios';
import { useEffect } from 'react';
import Spinner1 from '../../../components/Spinner/Spinner1';
import moment from 'moment';
import Swal from 'sweetalert2';

const TuitorialList = () => {
    const [tuitorial, setTuitorial] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)
    const [newTuitorial, setNewTuitorial] = useState([])
    const [updateId, setupdateId] = useState('');

    const getTuitorial = () => {
        axios.get(`${import.meta.env.VITE_LOCAL_SERVER}/tuitorial`, {  //TODO: change here with live site;
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                setTuitorial(res.data)
                setHasLoaded(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTuitorial()
    }, [])

    const handleUpdateTuitorial = (id) => {
        // console.log(id)
        axios.get(`${import.meta.env.VITE_LOCAL_SERVER}/tuitorial/${id}`) //TODO: change here with live
            .then(res => {
                setNewTuitorial(res.data)
                setupdateId(res.data.id)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        handleUpdateTuitorial()
    }, [])

    const { id, video, project, note, description } = newTuitorial;

    // Form submission for updating;
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const video = form.video.value;
        const project = form.project.value;
        const note = form.note.value;
        const description = form.description.value;

        const updateInfo = {
            title,
            video,
            project,
            note,
            description
        }
        //console.log(updateInfo)
        axios.put(`${import.meta.env.VITE_LOCAL_SERVER}/update-tuitorial/${id}`, updateInfo) //TODO: change here with live site;
            .then(res => {
                // console.log(res.data)
                if (res.data.status == 'ok') {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Tuitorial has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                    getTuitorial()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    // HandleDelete;
    const handleDelete = (id) => {
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
                axios.delete(`${import.meta.env.VITE_LOCAL_SERVER}/delete-tuitorial/${id}`) //TODO: chage with live site;
                    .then(res => {
                        if (res.data.status == 'deleted') {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Deleted",
                                showConfirmButton: false,
                                timer: 1500,
                            });

                            getTuitorial();
                        }
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            }
        })
    }

    
    return (
        <div>
            <PageTitle title={`Tuitorial List`} />
            <Cover title={`Tuitorial List`} />
            <div className={`px-0 lg:px-24 pb-12`}>
                <div className="flex justify-center">

                    {
                        !hasLoaded ? <>
                            <div className='py-16'>
                                <Spinner1 />
                            </div>
                        </> :

                            tuitorial.length > 0 ?
                                <>
                                    <div className="w-[350px] md:w-[650px] lg:w-full overflow-x-auto">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr className="bg-slate-950 text-white text-center">
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Updated Time</th>
                                                    <th colSpan={2}>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tuitorial.map((order, index) => <React.Fragment key={index + 1}>
                                                        <tr className='text-center'>
                                                            <td>{index + 1}</td>
                                                            <td>{order?.title}</td>
                                                            <td>{moment(order?.updated_at).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                                            <td className='flex gap-3 justify-center'>
                                                                <button className='btn btn-accent' onClick={() => { document.getElementById('my_modal_3').showModal(), handleUpdateTuitorial(order.id) }}>Edit</button>
                                                                <button className='btn btn-error' onClick={() => handleDelete(order.id)}>X</button>
                                                            </td>

                                                        </tr>
                                                    </React.Fragment>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                                :
                                <>
                                    <div>
                                        <h3 className='text-2xl font-semibold font-serif text-red-600 py-16'>No order hasbeen Found..!</h3>
                                    </div>
                                </>
                    }
                </div>
            </div>


            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg py-2">Update the Info correctly..</h3>
                    <hr />
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <div>

                                <div className="mb-2">
                                    <p>Title: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="title"
                                        defaultValue={newTuitorial?.title}
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <p>Video Link: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="video"
                                        defaultValue={video}
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <p>Project Link: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="project"
                                        defaultValue={project}
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <p>Note Link: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="note"
                                        defaultValue={note}
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <p>Description: </p>
                                    <textarea rows={3}
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="description"
                                        defaultValue={description}
                                        required
                                    />
                                </div>


                                <div>
                                    <button className='btn btn-accent' type='submit'>Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
}

export default TuitorialList;
