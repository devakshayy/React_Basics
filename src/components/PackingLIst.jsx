// import React from 'react'

// function Item({name,isPicked}){
//     return(
//        <li>{name}{isPicked && '✅'}</li>
//     );
// }

// const PackingLIst = () => {
//   return (
//     <div>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//          <Item
//             name="Helmet"
//             isPicked={true}
//          />
//          <Item
//             name="Riding Suit"
//             isPicked={false}
//          />
//          <Item
//             name="Riding shoe"
//             isPicked={true}
//          />
//       </ul>
//     </div>
//   )
// }

// export default PackingLIst


import React from 'react'

function Item({name,isPicked}){
    return(
      <li>{name}  {isPicked && '✅' }</li>
    );
}


const PackingLIst = () => {
  return (
    <div>
      <h1>The Things  must i taken for a Trip</h1>
      <ul>
         <Item
           name={"Helmet"}
           isPicked={true}
         />
         <Item 
           name={"Riding Jacket"}
           isPicked={false}
         />
            <Item 
           name={"Riding Shoe"}
           isPicked={true}
         />
            <Item 
           name={"Glove"}
           isPicked={true}
         />
      </ul>
    </div>
  )
}

export default PackingLIst
