import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";

export default function OceanPage() {
    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
            <div className="w-full">
                <div className="w-full h-72 md:h-screen">
                    <div className="h-5/6 oceanBanner">
                        
                    </div>
                </div>

                <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-8 mb-24">
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>FMC/OTI License</li>
                            <li>Contracts with All Ocean Carriers</li>
                            <li>FCL – Export /Import</li>
                            <li>LCL – Export /Imports</li>
                            <li>Transloading</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>Break Bulk</li>
                            <li>Special Equipment</li>
                            <li>Consolidation</li>
                            <li>Customs Clearance</li>
                            <li>C-TPAT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}