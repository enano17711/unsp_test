import {useEffect, useState} from 'react';

export const UseFetch = () => {
    const [img, setImg] = useState("");
    const [res, setRes] = useState([]);

    const fetchRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${import.meta.env.VITE_API_KEY}`,
            {
                method: "GET",
            }
        )
            .then(res => res.json())
            .catch(err => console.log('this is errror', err));

        setRes(data);
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    return {
        img,
        setImg,
        res,
        setRes,
        fetchRequest
    };
};