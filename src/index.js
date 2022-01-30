// WebPack
import React from 'react';
import ReactDom from 'react-dom';
import './estilos.css';
import yaml from './datos.yaml';

console.log(yaml);
const encabezado = <a href="index.php"><img src={require('./slogo.png')} /></a>;

ReactDom.render(
    encabezado,
    document.getElementById('encabezado')
);
  
function nuevaPublicacion(id,num) {
    var publicacion = (
        <article class={id.class}>
            <header>
                <div class="contImg">
                    <img src={require ('./default.jpg')} alt="ImgPerfil" />
                </div>
                <hgroup>
                    <h1>{id.nombre}</h1>
                    <h6><time datetime={id.fechaFormat} pubdate>{id.fecha}</time></h6>
                </hgroup>
                <hgroup>
                    <h5>{id.tag1}</h5>
                    <h5>{id.tag2}</h5>
                    <h5>{id.tag3}</h5>
                </hgroup>
            </header>
            <section>
                <p>{id.mensaje}</p>
                <img src={require('./video.jpg')} alt="Media no encontrada" />
            </section>
            <footer><button>Responder</button></footer>
        </article>
    );
    ReactDom.render(
        publicacion,
        document.getElementById('publicacion'+num)
    );

}

nuevaPublicacion(yaml.id1,1);
nuevaPublicacion(yaml.id2,2);