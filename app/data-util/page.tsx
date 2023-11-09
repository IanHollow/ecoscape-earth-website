"use client";

import React from "react";

interface TextDataResponse {
  data: string;
}

export default function DataPage() {
  const [text, setText] = React.useState("");

  const fetchText = async () => {
    const response = await fetch("/api/data");
    const data: TextDataResponse = (await response.json()) as TextDataResponse;
    setText(data.data);
    //console.log(data.data);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="container mx-auto px-10 text-center">
        <p>Text from Python function:</p>
        <p>{text}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchText}
        >
          Fetch the text
        </button>
      </div>
    </main>
  );
}
