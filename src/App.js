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
import shoppingCart from "./imagem/shoppingCart.png";
import plusCircle from "./imagem/PlusCircle.png";
import minusCircle from "./imagem/MinusCircle.png";

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
      <div className="principal">
      <header>
      <h1>HORTIFRUTI</h1>
      <h2>VnW</h2>
      </header>
      <main>
      <h2>Nossos Produtos</h2>
      <section className="main">
        {this.state.bolsaCompras.map((item)=>(
        <div className="frutasMain">
        <img className="frutasImg" src= {item.imagem}></img>
        </div>
        ))}
      </section>

      <section className='containerCart'>
            <div className='containerSquare'>
              <div className='cartSquare'>
                <img className='cartIcon' src={shoppingCart} alt="Shopping cart"/>
                  <p>Arraste o seu produto aqui para colocar no carrinho</p>
              </div>
              <div className='btn-cart'>
                <img className='plus-circle' src={plusCircle} alt="Plus circle"/>
                <img className='minus-circle' src={minusCircle} alt="Minus circle"/>
                </div>
            </div>
          </section>

      </main>
      </div>
      </>
    )
  }
}
export default Hortifruti;