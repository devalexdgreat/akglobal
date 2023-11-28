"use client";
import { useSearchParams } from 'next/navigation'

export default function Createcom({ params }) {
    const { id } = params;


    return (
        <div>
            <h1>ID: {id}</h1>
        </div>
    );
}