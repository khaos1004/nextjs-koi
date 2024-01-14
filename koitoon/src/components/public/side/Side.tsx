'use client';

import React, {useEffect} from "react";

interface DataInterface {
   snap: {
       [key: string]: string[];
   };
}

const data: DataInterface = {
   snap: {
       "코믹": ["코믹", "호러"],   // "Comic"
       "학원": ["학원", "로맨스"],   // "School"
       "공포": ["공포", "판타지"],   // "Horror"
       "판타지": ["판타지", "코믹"], // "Fantasy"
       "로맨스": ["로맨스", "학원"]  // "Romance"
   }
};

export default function App() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   return (
      <>
         <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  {/* <div className="drawer-content">
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
  </div>  */}
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

      </>
   );
}