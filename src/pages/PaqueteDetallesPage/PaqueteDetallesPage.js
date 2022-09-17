import { useParams } from "react-router-dom";
import PaqueteDetalle from "../../components/PaqueteDetalle/PaqueteDetalle";

export default function PaqueteDetallesPage(){
  let {paqueteId} = useParams();
  let arDetallesPaquetes = [
    {
      id: "0",
      imagen: "cancun",
      nombre: "Paquete Cancun",
      dias: "7 dias / 6 noches",
      descripcion: "Un paquete a Cancún incluye vuelo + hotel, también podrás encontrar paquetes que incluyan asistencia, traslado desde el aeropuerto y actividades. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      cantidadPersonas: "Precio por persona",
      precio: "7400$",
      detalles: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: "1",
      imagen: "machupichu",
      nombre: "Paquete Machu Picchu",
      dias: "7 dias / 6 noches",
      descripcion: "Un paquete a Cancún incluye vuelo + hotel, también podrás encontrar paquetes que incluyan asistencia, traslado desde el aeropuerto y actividades. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      cantidadPersonas: "Precio por persona",
      precio: "7400$",
      detalles: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: "2",
      imagen: "salarDeUyuni",
      nombre: "Paquete Salar De Uyuni",
      dias: "7 dias / 6 noches",
      descripcion: "Un paquete a Cancún incluye vuelo + hotel, también podrás encontrar paquetes que incluyan asistencia, traslado desde el aeropuerto y actividades. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      cantidadPersonas: "Precio por persona",
      precio: "7400$",
      detalles: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      id: "3",
      imagen: "rioJaneiro",
      nombre: "Paquete Rio De Janeiro",
      dias: "7 dias / 6 noches",
      descripcion: "Un paquete a Cancún incluye vuelo + hotel, también podrás encontrar paquetes que incluyan asistencia, traslado desde el aeropuerto y actividades. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      cantidadPersonas: "Precio por persona",
      precio: "7400$",
      detalles: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
    return (
      <div className="container">
        <PaqueteDetalle data={arDetallesPaquetes[paqueteId]}/>
      </div>
    );
}