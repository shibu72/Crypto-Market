import { useEffect, useState } from "react"

export default function Services() {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=>setServices(data.services))
    })
  return (
    <div className="mt-40">
        <h1 className="text-3xl text-center capitalize font-bold flex justify-center"> <i className="w-10 h-1 rounded bg-purple-500 block"></i> services we provide<i className="w-10 h-1 rounded bg-purple-500 block"></i></h1>
    <div className="flex items-center justify-around mt-20">
        {
            services.map((item, index)=><div key={index} className="grid gap-5 items-center justify-center justify-items-center w-[25%] p-5 text-center">
            <img className="border-[5px] border-purple-500 rounded-full w-[7rem] h-[7rem] p-2 object-contain " src={item.image} alt={item.title} />
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit laboriosam consequatur vel dicta sed vitae sit fuga error aut animi dignissimos sunt dolor iusto distinctio alias, molestiae cum commodi?</p>
            <button className="btn uppercase hover:bg-purple-700">read more</button>
        </div>)
        }
        
    </div>
    </div>
  )
}
