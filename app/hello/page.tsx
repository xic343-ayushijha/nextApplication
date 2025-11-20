// "use client";

// import { useEffect, useState } from "react";


export default async function Hello({posts}:any){
    const data= await getData();
    // const [msg,setMsg]=useState("hello world");
    // useEffect(()=>{
    //     setMsg("hello all");
    //     console.log(data);
    // },[]);
    return <>
    <div>{data}</div>
    </>
}

 async function getData(){
    const response= await fetch("https://api.example.com/posts");
    const posts = await response.json();
   return posts;
}