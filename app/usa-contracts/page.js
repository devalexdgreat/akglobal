import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";

export default function UsaPage() {
    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
            <div className="w-full">
                <div className="w-full h-72 md:h-screen">
                    <div className="h-5/6 usaBanner">
                        
                    </div>
                </div>

                <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-8 mb-8">
                    <div className="w-full md:w-6/12 flex flex-col items-start justify-start">
                        <span>US Government Contracts / Services</span>
                        <ul className="pl-10 w-full list-disc flex flex-col font-medium text-base">
                            <li>International Air & Ocean Logistics</li>
                            <li>Project Cargo</li>
                            <li>LTL & FTL Trucking</li>
                            <li>Licensed Customs Brokerage</li>
                            <li>Warehousing & Distribution</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex flex-col items-start justify-start">
                        <span>NAICS CODES:</span>
                        <span className="w-full list-none flex flex-col font-medium text-base">
                            <li>488510</li>
                            <li>481112</li>
                            <li>484220</li>
                            <li>484230</li>
                            <li>483111</li>
                        </span>
                    </div>
                </div>
                <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-8 mb-24">
                    <div className="w-full md:w-6/12 flex flex-col items-start justify-start">
                        <span>Past Performance</span>
                        <ul className="pl-10 w-full list-disc flex flex-col font-medium text-base">
                            <li>Approved forwarder / US Department of State</li>
                            <li>US Despatch Agency</li>
                            <li>Continuous awards since 2014</li>
                            <li>National Park Service 2019</li>
                            <li>U.S. Naval Oceanographic</li>
                            <li>References available upon request</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex flex-col items-start justify-start">
                        <span>NAICS CODES:</span>
                        <span className="w-full list-none flex flex-col font-medium text-base">
                            <li>488510</li>
                            <li>481112</li>
                            <li>484220</li>
                            <li>484230</li>
                            <li>483111</li>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}