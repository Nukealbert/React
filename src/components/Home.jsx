import React from 'react';
import vg from '../assets/2.webp';
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube,AiFillInstagram} from 'react-icons/ai'


function Home() {
  return (
    <>
        <div className='home' id="home">
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

         <div className="home3" id="about">
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

         <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:'0.5s'
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay:'0.7s'
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay:'0.9s'
                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay:'1.1s'
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
         </div>
    </>
  )
}

export default Home