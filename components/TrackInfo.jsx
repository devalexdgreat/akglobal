export default function TrackInfo({data, displayData}) {
    return (
        <div className="w-full bg-white p-4" style={{display : displayData}}>
            <div>
                <span className="font-bold mb-8">Tracking ID: {data.tracking_id}</span>
                <div className="flex flex-col">
                    <h1 className="mt-6 font-bold">Shipment Details</h1>
                    <ul className="list-disc ms-4">
                        <li><span className="font-bold">Name of Item: </span>{data.name}</li>
                        <li><span className="font-bold">Item Description: </span>{data.description}</li>
                        <li><span className="font-bold">Shipped Date: </span>{data.shipped_date}</li>
                        <li><span className="font-bold">Country of Origin: </span>{data.from_address}</li>
                        <li><span className="font-bold">Destination: </span>{data.to_address}</li>
                    </ul>

                    <div className="mt-6 flex justify-between items-center">
                        <div className="flex flex-col w-full">
                            <span className="font-bold mt-6">Delivery Status:</span>
                            <span className="flex font-bold">{data.delivered_status}</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}