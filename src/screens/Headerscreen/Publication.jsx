import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { useNavigate } from "react-router"

function Publication() {

   const navigate = useNavigate();
    const navigation = (path) => {
      navigate(path);
    };
  return (
    <>
    <Header />

 <section class="tabulation p-4">
      <div class="container-fluid">
        <div class="row mx-lg-5  mt-lg-5">
          <div class="tabulation-box p-0">
            <h3 class="pb-lg-4">
            The NLUD Chair on Justice for Children in collaboration with UNICEF is calling for submissions for its Quarterly Newsletter. <a href="/quarterlynewsletter" onClick={() => navigation("/quarterlynewsletter")} className='pointer' >Click here for more information. </a>
            </h3>
           
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Publication
