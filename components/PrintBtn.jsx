"use client";


const Print = () =>{     
    //console.log('print');  
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents; 
}

export default function PrintBtn() {
    return (
        <button className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg" onClick={Print}>
            Print Shipment
        </button>
    );
}