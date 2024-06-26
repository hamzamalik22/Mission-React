import React from 'react'

function MiniProjectCard({values, index, HandleFavourite}) {

  const {name, artist, favourite} = values;

  return (
    <div className='relative w-72 h-36 px-5 mb-10 py-5 bg-white rounded-md shrink-0'>
        <div className="upper flex gap-8">
        <img className='w-20 h-20 object-cover rounded-lg' src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div>
            <h1 className='text-xl font-bold pt-1 tracking-tight'>
                {name}
            </h1>
            <h3 className='text-sm font-semibold tracking-tight leading-tight'>
                {artist}.
            </h3>
        </div>
        </div>
        <button onClick={()=>HandleFavourite(index)} className={`absolute ${favourite ? 'bg-green-400 px-3 py-2'  : 'bg-orange-600 tracking-tight px-2 py-2'} rounded-full text-sm font-semibold text-white -translate-x-[50%] -translate-y-[50%]  bottom-[-24%] left-[50%]`}>
          {favourite ? 'Added' : 'Add to Favourites'}
        </button>
    </div>
  )
}

export default MiniProjectCard