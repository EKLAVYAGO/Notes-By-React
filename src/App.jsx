import React,{useState} from 'react'

const App = () => {
  const [title,setTitle]=useState("")
  const [details,setDetails]=useState("")
  const [task,setTask]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    if(title.trim()==="" || details.trim()===""){
      return}
    const copyTask=[...task]
    copyTask.push([title,details])
    setTask(copyTask)
    console.log(copyTask)
    setTitle("")
    setDetails("")
  }

  return (
    <div className="bg-zinc-900 min-h-screen text-white">

     
      <h1 className='text-3xl font-bold text-center pt-8 pb-2 tracking-wide'>📝 My Notes</h1>
      <p className='text-center text-zinc-400 text-sm mb-6'>Capture your thoughts quickly</p>

      <form action="" className='flex items-start justify-around gap-8 px-10 lg:flex-row flex-col' onSubmit={submitHandler}>

        
        <img
          src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&fit=crop"
          alt="notes illustration"
          className="w-72 mx-auto rounded-2xl object-cover"
        />

        
        <div className='flex flex-col gap-4 w-full lg:flex-1'>
          <input
            type="text"
            placeholder='Title...'
            className="bg-zinc-800 border border-zinc-600 rounded-lg p-4 w-full text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <textarea
            placeholder='Write your note here...'
            rows={5}
            className="bg-zinc-800 border border-zinc-600 rounded-lg p-4 w-full text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 resize-none"
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
          />
          <button className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 p-4 rounded-lg text-lg font-semibold w-full transition-colors' type='submit'>
            Add Note
          </button>
        </div>

      </form>

      
      <div className='mt-8'>
        {task.length > 0 && <h2 className='text-2xl text-center text-zinc-300 mb-4'>Saved Notes</h2>}
        <div className="px-10 flex flex-wrap">
         {task.map((item,index)=>{
          return <div className='bg-zinc-800 border border-zinc-700 p-4 m-3 rounded-xl w-60' key={index}>
            <h2 className='text-lg font-bold text-white mb-2'>{item[0]}</h2>
            <p className='text-zinc-400 text-sm'>{item[1]}</p>
          </div>
         })}
        </div>
      </div>

    </div>
  )
}

export default App