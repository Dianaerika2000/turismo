export default function Premio({datosPremio}){
    return (
      <div>
        <img
          className="img-fluid"
          src={require(`./imagenes/premio-${datosPremio.imagen}.jpg`)}
          alt= {datosPremio.titulo}
        />
        <p>{datosPremio.titulo}</p>
      </div>
    );
}