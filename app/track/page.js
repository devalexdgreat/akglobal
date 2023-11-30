import AdminNav from "@/components/AdminNav";
import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";
import Navbar from "@/components/Navbar";
import TrackCard from "@/components/TrackCard";
import Link from "next/link";

export default function Track() {
    return (
        <div>
            <HomeNav />
            <CtaButton />
            <TrackCard />
            <Footer />
        </div>
    );
}