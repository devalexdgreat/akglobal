import AddNewIdBtn from "@/components/AddNewIdBtn";
import Image from "next/image";
import ItemList from "@/components/ItemList";
import AdminNav from "@/components/AdminNav";

const getItems = async () => {
    try {
        const res = await fetch('https://www.akglobalshipservices.com/api/items', {
            cache: 'no-store',
        });
        
        if(!res.ok) {
            throw new Error("Failed to fetch Comments");
        }

        const items = await res.json();
        console.log("i am all the ", items);
        return items;
        

    } catch (error) {
        console.log("Error loading comments: ", error);
    }
};

export default async function AdminPage() {

    const itemsFound = await getItems();
    console.log("I am the found Guy: ", itemsFound);

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 md:w-11/12 mx-auto">
                <div className="text-center my-9">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pb-52 relative items-grid">
                    <AddNewIdBtn /> 
                    <ItemList itemsData={itemsFound}/>
                </div>
            </div>
        </div>
    );
}