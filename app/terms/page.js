import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";

export default function Team() {
    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
            <div className="w-full h-screen">
                <div className="w-full h-5/6 termsBanner">

                </div>
            </div>
            <div className="w-full">
                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5">
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}