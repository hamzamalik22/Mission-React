import React from "react";

function Card() {
  const info = [
    {
      image:
        "https://images.unsplash.com/photo-1716847214569-631cb7f1751c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Amazon Basics",
      description:
        "ODE resourcesappout vswork benchapi node extension HostProcess .js:153:9 9850)",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1716927856017-ec6dd4e4021e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Laura Cleffmann",
      description: "Free to use under the Unsplash License, FUJIFILM, X-T30 II",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1716983541742-1a2bb3d2b5b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Alexander Grigoryev",
      description:
        "Women Images & Pictures Female Human People Images & Pictures Adult",
      inStock: true,
    },
  ];

  const AddToCart = ()=>{
    alert('Item Added to Cart');
  }



  return (
    <div className="bg-zinc-100 py-2 px-2 w-full h-screen flex gap-10 justify-center items-center">
      {info.map((elem, index) => (
        <div className="card w-56 h-72 rounded-lg overflow-hidden bg-slate-200">
          <div className="image w-full h-32">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="head py-2 px-2">
            <h1 className="font-semibold ">{elem.title}</h1>
          </div>
          <div className="para py-2 px-2">
            <p className="text-xs h-12">{elem.description}</p>
          </div>
          <div className="py-2 px-2">
            <button onClick={elem.inStock ? AddToCart : ''} className={`py-2 px-3 ${elem.inStock ? 'bg-green-400' : 'bg-red-400'} text-xs font-semibold rounded`}>
              {elem.inStock ? 'In Stock' : 'Out of Stock'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
