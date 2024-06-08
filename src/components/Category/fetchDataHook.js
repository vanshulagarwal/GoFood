import { useState, useEffect } from "react";
import axios from 'axios';

const makeRequest = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

const fetchDataHook = (category) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const res = await makeRequest.get(`/filter.php?c=${category}`);
                setData(res.data.meals);
            } catch (err) {
                setError(true);
                console.log(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    return { data, loading, error };
}

export default fetchDataHook;