import img from "../../../assets/cover/cover1.jpg"
import PageTitle from "../../../components/PageTitle/PageTitle"
import Cover from "../../../components/Cover/Cover"
import { useState } from "react"
import Axios from "../../../axios/Axios"

const AddCourses = () => {
    const [categoryChange, setCategoryChange] = useState('technology')
    const [ratingChange, setRatingChange] = useState(5)
    const [error, setError] = useState('')

    // working with video links;
    const [videoLinks, setVideoLinks] = useState([{ title: '', link: '' }]);
    const handleAddInput = () => {
        setVideoLinks([...videoLinks, { title: '', link: '' }])
    }

    const handleInputChange = (index, name, value) => {
        const newVideoLinks = [...videoLinks];
        newVideoLinks[index][name] = value;
        setVideoLinks(newVideoLinks);
    };

    const handleRemoveInput = (index) => {
        const newVideoLinks = [...videoLinks];
        newVideoLinks.splice(index, 1);
        setVideoLinks(newVideoLinks);
    };



    // styling the input label;
    const p = {
        fontWeight: 'bold'
    }


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
        const thumbnail = form.thumbnail.files[0]

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

        const reader = new FileReader()
        reader.onload = (event) => {
            const thumbnailData = event.target.result;
            const courseInfo = {
                title,
                category,
                description,
                price,
                discount_price,
                rating,
                instructor,
                demo,
                thumbnail: thumbnailData,
                course_details: [
                    { title: title, link: demo }, // Adding the main course title and link
                    ...videoLinks.map((video) => ({ title: video.title, link: video.link })) //for showing the title and video link as array of object
                ]
            }

            // Sent to the server;
            Axios.post('/courses', { courseInfo }, { headers: { 'Content-Type': 'application/json' } })
                .then((res) => {
                    console.log(res.data); // Check the response data from the server
                })
                .catch((error) => {
                    console.error('Error:', error);
                });


        }
        reader.readAsDataURL(thumbnail)


    }
    return (
        <div>
            <PageTitle title={`Add Courses`} />
            <Cover title={`Add your courses`} img={img} />

            {/* Add Courses with Input box; */}
            <div className="flex justify-center py-4 bgimage">
                <div>
                    {error && <><p className="py-5 text-lg font-bold text-center text-red-600">{error}</p> <hr className="pb-4" /></>}
                    <form onSubmit={handleCourseFormSubmit}>
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
                                    <select className=" login-input h-12 w-full" defaultValue={categoryChange} onChange={(e) => setCategoryChange(e.target.value)}>
                                        <option disabled>Select Status</option>
                                        <option value={`Languages`}>Languages</option>
                                        <option value={`Frontend`}>Frontend</option>
                                        <option value={`Backend`}>Backend</option>
                                        <option value={`Web Design`}>Web Design</option>
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
                                    <p style={p}>Thumbnail: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="file"
                                        accept="image/*"
                                        name="thumbnail"
                                        placeholder="thumbnail of course. "
                                        required
                                    />
                                </div>

                                {/* Video Links From youtube embeded */}
                                <div>
                                    <p style={p}>Video Links:</p>
                                    {videoLinks.map((video, index) => (
                                        <div key={index}>
                                            <input
                                                type="text"
                                                className="login-input mt-2 p-2 w-full md:w-[350px]"
                                                placeholder={`Enter Video title ${index + 1}`}
                                                value={video.title}
                                                onChange={(event) => handleInputChange(index, 'title', event.target.value)}
                                            /> <br />
                                            <input
                                                type="text"
                                                className="login-input mt-2 p-2 w-full md:w-[350px]"
                                                placeholder={`Enter Video link ${index + 1}`}
                                                value={video.link}
                                                onChange={(event) => handleInputChange(index, 'link', event.target.value)}
                                            />
                                            {index === 0 ? (
                                                <button type="button" className="btn ml-2 btn-neutral text-lg font-bold" onClick={handleAddInput}>+</button>
                                            ) : (
                                                <button type="button" className="btn ml-2 btn-error text-lg font-bold w-12" onClick={() => handleRemoveInput(index)}>-</button>
                                            )}
                                        </div>
                                    ))}
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
