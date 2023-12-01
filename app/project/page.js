import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";

export default function ProjectPage() {
    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
            <div className="w-full">
                <div className="w-full h-72 md:h-screen">
                    <div className="h-5/6 pjxBanner">
                        
                    </div>
                </div>

                <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-8 mb-24">
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>Full/Part Chartering</li>
                            <li>RORO/Mafi</li>
                            <li>OOG Flat Racks /Open Tops</li>
                            <li>OOG Truck</li>
                            <li>Barge</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>Rail</li>
                            <li>Liner Break Bulk</li>
                            <li>Port Side/Transloading</li>
                            <li>Export Packaging/Crating</li>
                            <li>Customs Clearance</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}