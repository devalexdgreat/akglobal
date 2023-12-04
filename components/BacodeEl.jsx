"use client";
import React from 'react';
import { useBarcode } from 'next-barcode';

function BarcodeEl({data}) {
  const { inputRef } = useBarcode({
    value: data,
    options: {
      background: '#fff',
    }
  });
  
  return <svg ref={inputRef} />;
};

export default BarcodeEl;