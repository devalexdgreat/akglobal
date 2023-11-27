import AdminNav from "@/components/AdminNav";
import EditTopicForm from "@/components/EditIdForm";

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

export default async function EditId({ params }) {
    const { id } = params;
    const { item } = await getItemById(id);
    const { tracking_id, shipping_date, shipping_time, sender_name, 
        sender_address, shipping_quantity, item_weight, delivery_city, destination_city, 
        shipping_time_rec, delivery_time, receiver_name, receiver_address } = item;

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 mx-auto">
                <div className="my-6">
                    <h1 className="text-xl font-medium">Edit / Update Item Details</h1>
                </div>
                <EditTopicForm id={id} tracking_id={tracking_id} shipping_date={shipping_date} 
                shipping_time={shipping_time} sender_name={sender_name} sender_address={sender_address} shipping_quantity={shipping_quantity} 
                item_weight={item_weight} delivery_city={delivery_city} destination_city={destination_city} shipping_time_rec={shipping_time_rec} 
                delivery_time={delivery_time} receiver_name={receiver_name} receiver_address={receiver_address} />
            </div>
        </div>
    );
}