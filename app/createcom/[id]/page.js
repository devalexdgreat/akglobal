import AdminNav from '@/components/AdminNav';
import CommentForm from '@/components/CommentForm';

export default function Createcom({ params }) {
    const { id } = params;
    
    return (
        <div className='w-full'>
            <AdminNav />
            <div className='w-11/12 mx-auto'>
                <h1 className='text-xl font-bold'>Create New Shipping Log</h1>
                <CommentForm useId={id}/>
            </div>
        </div>
    );
}