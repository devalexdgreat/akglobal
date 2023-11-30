import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";

export default function AirPage() {
    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
            <div className="w-full">
                <div className="w-full h-72 md:h-screen">
                    <div className="h-5/6 airBanner">
                        
                    </div>
                </div>

                <div className="w-11/12 md:w-full mx-auto flex flex-col md:flex-row justify-between mb-24 gap-8 
                md:gap-0">
                    <div className="w-full md:w-6/12 flex items-start md:items-end justify-start 
                    md:justify-end">
                        <ul className="ml-8 md:ml-0 w-7/12 list-disc flex flex-col font-medium">
                            <l1>IATA Certified</l1>
                            <l1>Nationwide P/U & Delivery</l1>
                            <l1>IAC Approved Forwarder</l1>
                            <l1>Daily Consolidation</l1>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="ml-8 md:ml-0 w-7/12 list-disc flex flex-col font-medium">
                            <l1>Export Documentation & L/C</l1>
                            <l1>Export Packaging</l1>
                            <l1>Customs Clearance</l1>
                            <l1>C-TPAT</l1>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}