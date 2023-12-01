import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";

export default function WinePage() {
    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
            <div className="w-full">
                <div className="w-full h-72 md:h-screen">
                    <div className="h-5/6 wineBanner">
                        
                    </div>
                </div>

                <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-8 mb-24">
                    <div className="w-full md:w-6/12 flex items-start justify-start">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>Import and Export services</li>
                            <li>Ocean Freight – dry/reefer</li>
                            <li>Air freight/expedited services</li>
                            <li>Consolidation services</li>
                            <li>Flexitanks and bulk tanks</li>
                            <li>Warehousing services</li>
                            <ul className="pl-6">
                                <li>bonded</li>
                                <li>temperature controlled</li>
                                <li>insulation</li>
                            </ul>
                            <li>Domestic trucking</li>
                            <li>Customs Clearance and compliance services</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-6/12 flex-col items-start justify-start">
                        <span>High Value Shipments</span>
                        <ul className="pl-12 w-full list-disc flex flex-col font-medium text-base">
                            <li>White glove pick up service for cases and individual bottles</li>
                            <ul className="pl-6">
                                <li>with temperature control</li>
                            </ul>
                            <li>Packaging service</li>
                            <ul className="pl-6">
                                <li>for added protection</li>
                            </ul>
                            <li>Temperature controlled airport transfer</li>
                            <li>Temperature controlled and high security air freight options</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}