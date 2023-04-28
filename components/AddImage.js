import React, { useState } from 'react'
import { useRouter } from 'next/router';
function AddImage() {
    const router = useRouter();
    const [url, setUrl] = useState();
    const [desc, setDesc] = useState();
    const [ data , setData] = useState()
    function handleUrl(e) {
        setUrl(e.target.value);
    }
    function handleDesc(e) {
        setDesc(e.target.value);
        console.log(e.target.value)
    }
    const newImage = {
        url, desc
    }
    
    const saveImages = async () => {
        const response = await fetch("/api/images", {
            method: "POST",
            body: JSON.stringify(newImage),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data)
        if(data.response === "ok"){
            router.push('/');
        }else{
            alert("something wrong happen")
        }
        setUrl("");
        setDesc("")
        
    };

    function handleSubmit(e) {
        e.preventDefault();
        saveImages();

    }
    return (
        <div className='container py-2'>
            <form>
                <input type="text" onChange={(e) => {
                    handleUrl(e)
                }} className="form-control my-1" id="customFile" placeholder='Enter image url' />
                <textarea className="form-control my-1 z-depth-1" onChange={(e) => {
                    handleDesc(e)
                }} id="exampleFormControlTextarea6" rows="3" placeholder="Write description..." value={desc}></textarea>
                <button type="button" className="btn btn-primary" onClick={(e) => {
                    handleSubmit(e)
                }}>Save</button>
            </form>
        </div>
    )
}

export default AddImage
