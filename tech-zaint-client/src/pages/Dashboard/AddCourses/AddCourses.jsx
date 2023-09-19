import img from "../../../assets/cover/cover1.jpg"
import PageTitle from "../../../components/PageTitle/PageTitle"
import Cover from "../../../components/Cover/Cover"
import { useState } from "react"
import Axios from "../../../axios/Axios"
import Swal from "sweetalert2";

const AddCourses = () => {
    const [categoryChange, setCategoryChange] = useState('')
    const [ratingChange, setRatingChange] = useState(5)
    const [error, setError] = useState('')
    const [photo, setPhoto] = useState("");

    // styling the input label;
    const p = {
        fontWeight: 'bold'
    }

    const handleCategoryChange = (e) => {
        setCategoryChange(e.target.value)
    }

    // photo upload
    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };


    const handleCourseFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const category = categoryChange;
        const description = form.description.value;
        const price = form.price.value;
        const discount_price = form.discount_price.value;
        const rating = ratingChange;
        const instructor = form.instructor.value;
        const demo = form.demo.value;
        const total_time = form.total_time.value;
        const content_preview = form.content_preview.value;
        const thumbnail = photo;

        if (isNaN(price)) {
            setError('Price must be  Number eg. 50')
            return
        }
        if (isNaN(discount_price)) {
            setError('Price must be Number eg. 50')
            return
        }
        else if (Math.round((thumbnail.size / 1024)) > 150) {
            setError('Image can not be more than 150Kb')
            return
        }
        else {
            setError('')
        }

        const courseInfo = {
            title,
            category,
            description,
            price,
            discount_price,
            rating,
            instructor,
            demo,
            total_time,
            content_preview,
            thumbnail
        }

        // console.log(courseInfo)

        const formData = new FormData()
        formData.append('title', title)
        formData.append('category', category)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('discount_price', discount_price)
        formData.append('rating', rating)
        formData.append('instructor', instructor)
        formData.append('demo', demo)
        formData.append('total_time', total_time)
        formData.append('content_preview', content_preview)
        formData.append('thumbnail', thumbnail)

        fetch(`https://app1.techzaint.com/api/add-course`, { //TODO: change url with live site;
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.status == 'ok') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Course added successfully..",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset()
                }
            })




    }
    return (
        <div>
            <PageTitle title={`Add Courses`} />
            <Cover title={`Add your courses`} img={img} />

            {/* Add Courses with Input box; */}
            <div className="flex justify-center py-4 bgimage">
                <div>
                    {error && <><p className="py-5 text-lg font-bold text-center text-red-600">{error}</p> <hr className="pb-4" /></>}
                    <form onSubmit={handleCourseFormSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div>
                                    <p style={p}>Course Title: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="title"
                                        placeholder="Enter your course name"
                                        required
                                    />
                                </div>

                                <div>
                                    <p style={p}>Category: </p>
                                    <select className=" login-input h-12 w-full" value={categoryChange} onChange={handleCategoryChange}>
                                        <option>Select Status</option>
                                        <option value={`languages`}>Languages</option>
                                        <option value={`frontend`}>Frontend</option>
                                        <option value={`backend`}>Backend</option>
                                        <option value={`projects`}>Projects</option>
                                    </select>
                                </div>

                                <div>
                                    <p style={p}>Description: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="description"
                                        placeholder="write the description "
                                        required
                                    />
                                </div>
                                <div>
                                    <p style={p}>Price: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="price"
                                        placeholder="Price in decimal"
                                        required
                                    />
                                </div>
                                <div>
                                    <p style={p}>Discounted Price Percentange: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="discount_price"
                                        placeholder="write the discounted price eg. 12 "
                                        required
                                    />
                                </div>
                                <div>
                                    <p style={p}>Rating: </p>
                                    <select className="login-input h-12 w-full" defaultValue={ratingChange} onClick={(e) => setRatingChange(e.target.value)}>
                                        <option disabled>Select Rating</option>
                                        <option value={5}>5</option>
                                        <option value={4}>4</option>
                                        <option value={3}>3</option>
                                        <option value={2}>2</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">

                                <div>
                                    <p style={p}>Instructor: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="instructor"
                                        placeholder="Instructor name. "
                                        required
                                    />
                                </div>
                                <div>
                                    <p style={p}>Total time: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="total_time"
                                        placeholder="time in hours or minutes eg. 5 hours "
                                        required
                                    />
                                </div>
                                <div>
                                    <p style={p}>Demo Url: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="demo"
                                        placeholder="Youtube embeded URL, go to share>embed url"
                                        required
                                    />
                                </div>
                                <div>
                                    <p style={p}>Profile Photo: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="file"
                                        name="thumbnail"
                                        onChange={handlePhotoChange}
                                    />
                                </div>

                                <div>
                                    <p style={p}>Content Preview: </p>
                                    <textarea rows={5}
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="content_preview"
                                        placeholder="Write your preview"
                                        required
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Button change */}
                        <div className="flex justify-center mt-4">
                            <div>
                                <button type="submit" className="btn btn-secondary w-[300px]">Add Course</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default AddCourses;
