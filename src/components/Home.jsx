import React from 'react';
import vg from '../assets/2.webp'


function Home() {
  return (
    <>
        <div className='home'>
            <main>
                <h1>Zclimer</h1>
                <p>We do it better</p>
            </main>
         </div>
         <div className="home2">
            <img src={vg} alt='Graphics'/>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quae distinctio repellendus aperiam rem officiis magnam, cum nihil 
                    quaerat beatae ipsam totam facilis minus dolore deserunt
                     eius odit placeat vitae quos!
                </p>
            </div>
         </div>

         <div className="home3">
            <div>
            <h1>Who we are</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Totam eos quis ex commodi voluptatibus deleniti officiis
                 possimus aliquam perferendis at temporibus, laudantium
                  adipisci corrupti est dolorem eaque ut, labore nihil! 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Harum similique ut tenetur, facilis officia animi non? 
                   Suscipit consectetur aliquid ea, ipsa fugiat assumenda 
                   consequatur. Dicta temporibus eum asperiores sint voluptatem?</p>
            </div>
         </div>
    </>
  )
}

export default Home