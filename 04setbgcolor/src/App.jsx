import { useState } from 'react';

function App() {
  const [color, setcolor] = useState("white");
  console.log(color);
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="flex justify-center items-center h-screen font-bold" style={{ color: color === "black" ? "white" : "black" }}>{color}</div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 font-bold">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setcolor("red")} className="outline-none px-4 rounded-full text-white shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setcolor("blue")} className="outline-none px-4 rounded-full text-white shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "blue" }}>blue</button>
            <button onClick={() => setcolor("yellow")} className="outline-none px-4 rounded-full text-black shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "yellow" }}>yellow</button>
            <button onClick={() => setcolor("green")} className="outline-none px-4 rounded-full text-white shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "green" }}>green</button>
            <button onClick={() => setcolor("pink")} className="outline-none px-4 rounded-full text-black shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "pink" }}>pink</button>
            <button onClick={() => setcolor("black")} className="outline-none px-4 rounded-full text-white shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "black" }}>black</button>
            <button onClick={() => setcolor("purple")} className="outline-none px-4 rounded-full text-white shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "purple" }}>purple</button>
            <button onClick={() => setcolor("gray")} className="outline-none px-4 rounded-full text-white shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "gray" }}>gray</button>
            <button onClick={() => setcolor("lavender")} className="outline-none px-4 rounded-full text-black shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "lavender" }}>lavender</button>
            <button onClick={() => setcolor("white")} className="outline-none px-4 rounded-full text-black shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "white" }}>white</button>
            <button onClick={() => setcolor("olive")} className="outline-none px-4 rounded-full text-black shadow-xl hover:scale-110 duration-300" style={{ backgroundColor: "olive" }}>olive</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
