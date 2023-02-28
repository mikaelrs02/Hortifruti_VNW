import React, { Component } from "react";
import "./App.css";
import alface from "./imagem/alface.png";
import beterraba from "./imagem/beterraba.png";
import cenoura from "./imagem/cenoura.png";
import cereja from "./imagem/cereja.png";
import laranja from "./imagem/laranja.png";
import limao from "./imagem/limao.png";
import manga from "./imagem/manga.png";
import tomate from "./imagem/tomate.png";

class Hortifruti extends Component {
  state = {
    bolsaCompras: [
      { imagem: `${alface}`, titulo: 'Alface' },
      { imagem: `${laranja}`, titulo: 'Laranja' },
      { imagem: `${cereja}`, titulo: 'Cereja' },
      { imagem: `${cenoura}`, titulo: 'Cenoura' },
      { imagem: `${manga}`, titulo: 'Manga' },
      { imagem: `${limao}`, titulo: 'Limao' },
      { imagem: `${beterraba}`, titulo: 'Beterraba' },
      { imagem: `${tomate}`, titulo: 'Tomate' }
    ]
  };
  render () {
    return (
      <>
      <h1>Hortifruti VnW</h1>
      <h2>Nosso produto</h2>
      <section className="main">
        {this.state.bolsaCompras.map((item)=>(
        <div className="Frutasmain">
        <img src= {item.imagem}></img>
        </div>
        ))}
      </section>
      </>
    )
  }
}
export default Hortifruti;