import { useEffect, useState } from "react"

export default function HowItWork() {
    const [howIWs, setHowIWs] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setHowIWs(data.howIW))
    }) 
  return (
    <div className="mt-20">
        <h1 className="text-3xl text-center capitalize font-bold flex justify-center"> <i className="w-10 h-1 rounded bg-purple-500 block"></i>how it works<i className="w-10 h-1 rounded bg-purple-500 block"></i></h1>
    <div className="flex gap-10 items-center justify-center mt-20">
        {
howIWs.map((item, index)=><div key={index} className="grid gap-5 text-center items-center justify-center justify-items-center w-[20%] p-5 rounded-lg bg-slate-600">
<img className="w-[7rem] h-[7rem] p-2 object-contain " src={item.image} alt={item.title} />
<h2 className="text-xl font-bold uppercase">Bitcoin Transaction</h2>
<p>{item.description}</p>
</div>)
        }
    
        
    </div>
            <button className="btn uppercase hover:bg-purple-700 flex m-auto mt-10">read more</button>
    </div>
  )
}
