import Image from "next/image";
import addIcon from '@/public/plus.png';
import Link from "next/link";

export default function AddNewComment() {
    return (
        <Link href={"/createcomment"} className="flex items-center justify-center gap-2 hover:bg-slate-100 rounded-lg
        py-2">
            <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-500 hover:bg-blue-600">
                <Image src={addIcon} className="h-5/6 w-10/12" alt="" />
            </div>
            <span className="font-medium">Add New comment</span>
        </Link>
    );
}