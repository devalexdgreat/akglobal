import AdminNav from "@/components/AdminNav";
import CommentForm from "@/components/commentForm";
import Image from "next/image";


const getItemById = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_PURL}/api/items/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch item");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function CreateComment({ params }) {
    const { id } = params;
    const { item } = await getItemById(id);
    
    
    console.log("Tracking id: ", item.tracking_id);
    console.log("Tracking id: ", id);

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 mx-auto">
                <div className="my-12">
                    <h1 className="text-2xl md:text-2xl font-medium">Create New Shipping History Log</h1>
                </div>
                <CommentForm id={id} track_id={item.tracking_id}/>
            </div>
        </div>
    );
}