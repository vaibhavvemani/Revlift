import React from 'react'
import Image from 'next/image'
import '../styles/homepage.css'

const HomePage = () => {
  return (
    <div class="landing-page">
        <div class="left-landing">
            <div class="gallery-frame">
                <div class="photo1">
                    <Image src="/photo1.jpg" alt="Porsche" class="landing-img" width={640} height={800} />
                </div>
                <div class="photo2">
                    <Image src="/photo2.jpg" alt="Porsche" class="landing-img" width={640} height={800}/>
                </div>
                <div class="photo3">
                    <Image src="/photo9.jpg" alt="Porsche" class="landing-img" width={736} height={1030}/>
                </div>
                <div class="photo4">
                    <Image src="/photo3.jpg" alt="Porsche" class="landing-img" width={640} height={800}/>
                </div>
                <div class="photo5">
                    <Image src="/photo4.jpg" alt="Porsche" class="landing-img" width={640} height={853}/>
                </div>
                <div class="photo6">
                    <Image src="/photo8.jpg" alt="Porsche" class="landing-img" width={736} height={1104}/>
                </div>
                <div class="photo7">
                    <Image src="/photo5.jpg" alt="Porsche" class="landing-img" width={390} height={585}/>
                </div>
                <div class="photo8">
                    <Image src="/photo6.jpg" alt="Porsche" class="landing-img" width={564} height={1190}/>
                </div>
                <div class="photo9">
                    <Image src="/photo7.jpg" alt="Porsche" class="landing-img" width={640} height={427}/>
                </div>
                <div class="photo10">
                    <Image src="/photo10.jpg" alt="Porsche" class="landing-img" width={640} height={853}/>
                </div>
            </div>
        </div>

        <div class="right-landing">
            <input type="text" />
            <button>Search</button>
        </div>
    </div>
  )
}

export default HomePage