"use client";
import CommentForm from '@/components/CommentForm';
import { useSearchParams } from 'next/navigation'

export default function Createcom({ params }) {
    const { id } = params;
    
    return (
        <div>
            <h1 className='text-xl font-bold'>Create New Comment</h1>
            <CommentForm useId={id}/>
        </div>
    );
}