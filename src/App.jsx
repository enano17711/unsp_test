import {useFormik} from "formik";
import Card from "./components/Card.jsx";
import {useState} from "react";

function App() {
    const [res, setRes] = useState([]);

    const formikData = useFormik({
        initialValues: {
            animal: '',
        },
        onSubmit: async (values) => {
            const data = await fetch(
                `https://api.unsplash.com/search/photos?page=1&query=${values.animal}&client_id=${import.meta.env.VITE_API_KEY}`,
                {
                    method: "GET",
                }
            )
                .then(res => res.json())
                .catch(err => console.log('this is errror', err));

            setRes(data);
        },
        validate: values => {
            const errors = {};
            const animalValue = values.animal.trim()

            if (!animalValue || animalValue === '' || animalValue.length <= 0) {
                errors.animal = 'Required';
            }

            return errors;
        }
    })

    /*    const {img, setImg, res, setRes, fetchRequest} = UseFetch()

        const Submit = () => {
            fetchRequest();
            setImg("");
        };*/

    return (
        <div className="container pb-10">
            <form className="flex justify-center justify-content-center mt-5 w-96" onSubmit={formikData.handleSubmit}>
                <input
                    id="animal"
                    name="animal"
                    type="text"
                    onChange={formikData.handleChange}
                    value={formikData.values.animal}
                    className="p-2 rounded border-2 border-gray-400"
                />
                <button type="submit" className="bg-teal-300 text-white p-2 ml-2 rounded">Submit</button>
            </form>

            <div className="flex justify-center mt-5 w-full gap-3 flex-wrap">
                {res.errors || res.results?.length === 0 || formikData.errors.animal
                    ? <p>Not images to show</p>
                    : res.results?.map((val) => {
                        return (
                            <Card key={val.id} image={val.urls.small} desc={val.alt_description}/>
                        );
                    })}
            </div>

            {/*            <div className="flex justify-content-center mt-5 w-100 mx-auto">
                <input
                    className="w-1/3 p-2 rounded border-2"
                    type="text"
                    placeholder="Search Anything..."
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />

                <button
                    className="bg-teal-300 text-white p-2 ml-2 rounded"
                    onClick={Submit}
                >
                    Search
                </button>
            </div>

            <div className="flex justify-content-center mt-5 w-100 gap-3 flex-wrap mx-auto">
                {res ? res.results?.map((val) => {
                        return (
                            <Card image={val.urls.small} desc={val.alt_description}/>
                        );
                    })
                    : <p>Not images to show</p>}
            </div>*/}
        </div>
    )
}

export default App
