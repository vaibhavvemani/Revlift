import React from 'react'
import Image from 'next/image'
import '../styles/homepage.css'

function LeftLanding() {
    return (
        <div className="left-landing">
            <div className="gallery-frame">
                <div className="photo1">
                    <Image src="/photo1.jpg" alt="Porsche" class="landing-img" width={640} height={800} />
                </div>
                <div className="photo2">
                    <Image src="/photo2.jpg" alt="Porsche" class="landing-img" width={640} height={800}/>
                </div>
                <div className="photo3">
                    <Image src="/photo9.jpg" alt="Porsche" class="landing-img" width={736} height={1030}/>
                </div>
                <div className="photo4">
                    <Image src="/photo3.jpg" alt="Porsche" class="landing-img" width={640} height={800}/>
                </div>
                <div className="photo5">
                    <Image src="/photo4.jpg" alt="Porsche" class="landing-img" width={640} height={853}/>
                </div>
                <div className="photo6">
                    <Image src="/photo8.jpg" alt="Porsche" class="landing-img" width={736} height={1104}/>
                </div>
                <div className="photo7">
                    <Image src="/photo5.jpg" alt="Porsche" class="landing-img" width={390} height={585}/>
                </div>
                <div className="photo8">
                    <Image src="/photo6.jpg" alt="Porsche" class="landing-img" width={564} height={1190}/>
                </div>
                <div className="photo9">
                    <Image src="/photo7.jpg" alt="Porsche" class="landing-img" width={640} height={427}/>
                </div>
                <div className="photo10">
                    <Image src="/photo10.jpg" alt="Porsche" class="landing-img" width={640} height={853}/>
                </div>
            </div>
        </div>

    )
}

function RightLanding() {
    return (
        <div className="right-landing">
            <div className="search-box">
                <input type="text" />
                <button>Search</button>
            </div>

            <div className="car-container">
                
            </div>
        </div>
    )
}

const HomePage = () => {
  return (
    <div className="landing-page">
        <LeftLanding />
        <RightLanding />
    </div>
  )
}

export default HomePage