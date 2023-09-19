import img from "../../../assets/banner/banner2.jpg"
import PageTitle from "../../../components/PageTitle/PageTitle"
import Cover from "../../../components/Cover/Cover"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
const Tuitorials = () => {
    const [getCourse, setGetCourse] = useState([])
    const [contentPreview, setContentPreview] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_LOCAL_SERVER}/get-tuitorial/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        }) //TODO: change with live server;
            .then(res => {
                // console.log(res.data)
                res.data.map(tuitorial => {
                    setGetCourse(tuitorial)
                    setTimeout(() => {
                        const split_description = tuitorial.description.split('\n');
                        setContentPreview(split_description)
                    }, 1000)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const { title, video, note, project } = getCourse;


    return (
        <div>
            <PageTitle title={`Enrolled Items`} />
            <Cover title={`${title}`} img={img} />
            <div className="px-2 lg:px-24 py-6 light1">
                <div className="flex justify-center">
                    <div>
                        {/* Video Showing */}
                        <div>
                            <div className="aspect-w-16 aspect-h-9 border-4 border-red-500">
                                <iframe
                                    src={video}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        {/* Title and Others */}
                        <div>
                            <div className="mt-5">
                                <h3 className="text-3xl font-bold">{title}</h3>
                            </div>
                            <div className="py-4 space-y-4">
                                {
                                    note && <div>
                                        <p><span className="font-bold">Notes: </span> <a className="link-primary underline" href={note}>{note}</a></p>
                                    </div>
                                }
                                {
                                    project && <div>
                                        <p><span className="font-bold">Projects: </span><a className="link-primary underline" href={project}>{project}</a></p>
                                    </div>
                                }
                            </div>
                        </div>

                        {/* Content Preview */}
                        <div className="space-y-5">
                            <div>
                                <h3 className="text-2xl mb-4 font-bold">Playlist Partition</h3>
                                <hr />
                            </div>
                            <div>
                                <ol start="1" className="space-y-2">
                                    {
                                        contentPreview.map((contents, index) => (
                                            <li key={index + 1}> <span className="font-bold">📌Step {index + 1}:</span> ⌚ {contents}</li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tuitorials;
