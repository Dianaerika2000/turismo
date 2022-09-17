export default function Testimonio({testimonio}){
  return(
    <div>
      <img 
        className="img-fluid"
        src={require(`./imagenes/testimonio-${testimonio.imagen}.jpg`)}
        alt= {testimonio.nombre}/>
      <p className="text-center">{testimonio.nombre}</p>
      <p>{testimonio.comentario}</p>
    </div>
  );
}