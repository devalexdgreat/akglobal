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

                <div className="w-11/12 md:w-full mx-auto flex flex-col md:flex-row justify-between mb-24 gap-8 
                md:gap-0">
                    <div className="w-full md:w-6/12 flex items-start md:items-end justify-start 
                    md:justify-end">
                        <ul className="ml-8 md:ml-0 mr-0 md:mr-12 w-8/12 list-disc flex flex-col font-medium">
                            <l1>Storage</l1>
                            <l1>Container Stuffing</l1>
                            <l1>Multiple Loading Docks /Ground Level Loading Dock</l1>
                            <l1>High Value Security Area</l1>
                            <l1>Our Staff / Our Equipment</l1>
                            <l1>24/7 Video Surveillance</l1>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="ml-8 md:ml-0 w-8/12 list-disc flex flex-col font-medium">
                            <l1>Zero Error Tolerance with Quality Control System</l1>
                            <l1>100% Performance Guarantee</l1>
                            <l1>Specialized Labeling (EAC, FedEx, UPS, etc.)</l1>
                            <l1>Registered FDA Warehouse</l1>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}