import { useEffect, useState } from "react";


const getData = fileName => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(fileName + '.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return data;

}

export default getData;