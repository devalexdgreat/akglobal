import AdminNav from "@/components/AdminNav";
import EditComForm from "@/components/EditComForm";


const getCommentById = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_PURL}/api/comments/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch item");
        }
        const data = await res.json();
        console.log("I am the data", data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default async function EditCom({ params }) {
    const { id } = params;
    // const com = await getCommentById(id);
    // console.log(com);
    const { comment } = await getCommentById(id);
    console.log("I am the comment: ", comment);
    const { itemid, ddate, dtime, dquote, dcomment } = comment;
    console.log("I am the item Id: ", itemid);

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 mx-auto">
                <h1 className='text-xl font-bold'>Edit Shipping Log</h1>
                <EditComForm id={id} itemid={itemid} ddate={ddate} dtime={dtime} dquote={dquote} dcomment={dcomment} />
            </div>
        </div>
    );
}