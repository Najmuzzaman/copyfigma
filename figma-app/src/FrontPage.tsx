import React, { useEffect, useState } from "react";
import axios from "axios";

interface FigmaFile {
  id: number;
  name: string;
  description: string;
  image: string;
  clipboard: string;
}

const FrontPage = () => {
  const [figmaFiles, setFigmaFiles] = useState<FigmaFile[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/api/figma");
      setFigmaFiles(data);
    };
    fetchData();
  }, []);

  const handleCopy = async (clipboardContent: string) => {
    await navigator.clipboard.writeText(clipboardContent);
    alert("Clipboard content copied!");
  };

  return (
    <div>
      <h1>Figma Files</h1>
      {figmaFiles.map((file) => (
        <div key={file.id}>
          <h2>{file.name}</h2>
          <img src={file.image} alt={file.name} style={{ width: "200px" }} />
          <p>{file.description}</p>
          <button onClick={() => handleCopy(file.clipboard)}>Copy Clipboard</button>
        </div>
      ))}
    </div>
  );
};

export default FrontPage;
