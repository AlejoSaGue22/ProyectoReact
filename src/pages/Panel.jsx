import React, { useState } from 'react'
import Card from '../Componentes/Card'
import '../pages/style.css'
import img4 from '../Componentes/imagenes/bga.png'
import axios from 'axios';

export const Panel = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook=(evt)=>{
    if(evt.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDP6Ua4oVOQM98K_a-FUPLzzrpidxiD1g8'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.error(err))
    }
  }
  return (
    <>
        <div className="header">
            <div className="row1">
              <h1>La Biblioteca que mas te puede Gustar! <br/> Bienvenido</h1>

            </div>
            <div className="row2">
              <h2>Busca tu libro</h2>
              <div className="search">
                  <input type="text" placeholder="Escribe tu libro"
                  value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchBook}/>
                  <button><i className="fa fa-search" aria-hidden="true"></i></button>
              </div>
           <img src={img4} alt="imagen"/>
           
            </div>
        </div>

        <div className="container">
            {
                <Card book={bookData}/>
            }          
        </div>



    </>
  )
}

 