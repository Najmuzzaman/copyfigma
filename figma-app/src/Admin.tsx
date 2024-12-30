import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [clipboard, setClipboard] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, description, image, clipboard };
    await axios.post("http://localhost:5000/api/figma", data);
    alert("Figma file details saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Admin Panel</h1>
      <input placeholder="Figma File Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <textarea placeholder="Clipboard Content" value={clipboard} onChange={(e) => setClipboard(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};

export default Admin;
