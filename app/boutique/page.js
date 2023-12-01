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
                    <div className="h-5/6 boutiqueBanner">
                        
                    </div>
                </div>

                <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-8 mb-24">
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>Storage</li>
                            <li>Container Stuffing</li>
                            <li>Multiple Loading Docks /Ground Level Loading Dock</li>
                            <li>High Value Security Area</li>
                            <li>Our Staff / Our Equipment</li>
                            <li>24/7 Video Surveillance</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>Zero Error Tolerance with Quality Control System</li>
                            <li>100% Performance Guarantee</li>
                            <li>Specialized Labeling (EAC, FedEx, UPS, etc.)</li>
                            <li>Registered FDA Warehouse</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}