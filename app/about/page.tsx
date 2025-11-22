// app/about/page.js file
"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function About() {
    const [name,setName]=useState({});
    useEffect(()=>{
        fetch('/api/hello').then(res=>res.json()).then(data=>{
            console.log(data);
            setName(data);
    });
    },[]);

    const modifyName = () =>{
        setName({...name,name:'dylan murphy 2'})
    }

    const modifyNameOnServer = () =>{
        const body = {
            name:"jane doe",
            phoneNo:9089679088,
            address:"new york",
            company:"alpha",
            country:"britain"
        }
        fetch("/api/hello",{
            method:'post',
            body:JSON.stringify(body),
            headers:{"Content-Type":"application/json"}
        }).then(res=>res.json()).then(data=>console.log(data));
    }

    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to the about page!</p>
            {
                name && 
                <ul>
               <li>name</li>
                    
                </ul>
            }
            <button onClick={modifyNameOnServer}>change name user</button>
        </div>
    );
}