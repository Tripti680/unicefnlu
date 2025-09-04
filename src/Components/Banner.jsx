import React from 'react'
import Images from '../assets/images'

function Banner() {
  return (
    <>
    <section className="banner">
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-lg-12 col-6">
                    <div className="banner-box">
                        <h2 className='my-4 h1 text-content-center' style={{fontSize:70,fontWeight:'900',paddingLeft:"128px",fontSize: "clamp(36px, 8vw, 64px)"}}>UNICEF Chair on Justice for Children<br />at National Law University Delhi</h2>
                        <img src="https://www.developmentaid.org/api/frontend/cms/file/2024/01/The-biggest-social-issues-that-affect-modern-society.jpg" alt="" style={{width:'100%', height:270}}/>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner
