
"use client"
import { useParams } from 'next/navigation';

export default function Employee(){

    const { id } = useParams();
    return <>
    <h1>hello employee {id} </h1>
    </>
}