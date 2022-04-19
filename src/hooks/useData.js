import { useEffect, useState } from "react";


const useData = fileName => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(fileName + '.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    console.log(data);
    return data;

}

export default useData;