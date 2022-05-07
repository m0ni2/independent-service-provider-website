import { useEffect, useState } from "react";


const useFetch = fileName => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(fileName + '.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return data;

}

export default useFetch;