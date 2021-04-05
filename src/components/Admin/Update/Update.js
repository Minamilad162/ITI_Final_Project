import react, { useState } from 'react';
import { useParams } from 'react-router';
import API from '../../../API';

export default function UpdateUser() {
    const [data, setData] = useState({});
    const {id} = useParams();

    function handleChange(e) {
        const newData = {
            [e.target.name]: e.target.value,
        };

        setData({ ...data, ...newData });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await API.update('users', id, data);
        console.log(response);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} />
                <input type="text" name="job" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
