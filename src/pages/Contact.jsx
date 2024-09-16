export default function Contact() {
  return (
    <div className="mt-40">
        <form className="grid gap-5 w-[30%] m-auto shadow-xl rounded-xl p-5">
            <h1 className="text-2xl font-bold text-center">Contact Here</h1>
        <input type="text" placeholder="Type here name" className="input input-bordered w-full max-w-xs" />
        <input type="email" placeholder="Enter Your Email Address" className="input input-bordered w-full max-w-xs" />
            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
            <button className="btn">Button</button>
        </form>
    </div>
  )
}
