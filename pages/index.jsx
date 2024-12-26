"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState('123');

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + 'home')
      .then(response => response.json())
      .then(data => {setMessage(data.message),console.log(data)});
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
  123
    </div>
  );
}
