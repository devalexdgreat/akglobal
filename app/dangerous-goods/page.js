import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";

export default function DangerPage() {
    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
            <div className="w-full">
                <div className="w-full h-72 md:h-screen">
                    <div className="h-5/6 dangerBanner">
                        
                    </div>
                </div>

                <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-8 mb-24">
                    <div className="w-full md:w-6/12 mx-auto flex items-start justify-center">
                        <ul className="w-full list-disc flex flex-col font-medium text-base">
                            <li>Import and Export</li>
                            <li>Air freight and Ocean freight</li>
                            <li>Domestic trucking</li>
                            <li>Packaging services</li>
                            <li>Compliance Inspections – Classification and Identification</li>
                            <li>Documentation – IATA DGR, IMDG, DOT CFR 49</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}