import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";

export default function CustomsPage() {
    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
            <div className="w-full">
                <div className="w-full h-72 md:h-screen">
                    <div className="h-5/6 customsBanner">
                        
                    </div>
                </div>

                <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-12 mb-24">
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>Full customs import documentation</li>
                            <li>Import Security Filing (ISF)(10+2)</li>
                            <li>Custom clearance including but not limited to FDA, USDA, FCC, F&W, TIB, T&E</li>
                            <li>C-TPAT certified</li>
                            <li>Ocean Freight</li>
                            <ul className="pl-6">
                                <li>FCL</li>
                                <li>LCL</li>
                                <li>OOG</li>
                                <li>Special equipment</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>International & Domestic Air Freight</li>
                            <ul className="pl-6">
                                <li>Direct</li>
                                <li>consolidated</li>
                            </ul>
                            <li>Nationwide Domestic Trucking</li>
                            <ul className="pl-6">
                                <li>Door to door</li>
                                <li>Trans-load Capabilities</li>
                            </ul>
                            <li>Online tracking, Custom Bonds, 
                            Delivery to final consignee, Customized reports, 
                            Remote filing, Duty drawbacks</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}