import AdminNav from "@/components/AdminNav";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";
import Navbar from "@/components/Navbar";
import TrackCard from "@/components/TrackCard";
import Link from "next/link";

export default function Track() {
    return (
        <div>
            <HomeNav />
            <TrackCard />
            <Footer />
        </div>
    );
}