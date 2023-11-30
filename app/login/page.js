import LoginForm from '@/components/LoginForm';
import emailIcon from '@/public/email.png';
import pswdIcon from '@/public/pswd.png';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import HomeNav from '@/components/HomeNav';

export default async function Login() {
    const session = await getServerSession(authOptions);

    if(session) redirect("/admin");

    return(
        <>
        <HomeNav />
        <div className="w-full login-wrap flex items-center">
            <LoginForm />
        </div>
        </>
    );
}