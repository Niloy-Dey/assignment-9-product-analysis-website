import { useEffect, useState } from "react"

const useReview = () =>{
    const [hook , setHook] = useState([]);

    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setHook(data));
    }, []);
    return [hook, setHook];

}
export default useReview;