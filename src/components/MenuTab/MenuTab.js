import Paquete from '../Paquete/Paquete';

export default function MenuTab() {
  let arPaquetes = [
    {
      id: '0',
      imagen: 'cancun',
      nombre: 'Paquete Cancun',
      dias: '7 dias / 6 noches',
      descripcion:
        "Un paquete a Cancún incluye vuelo + hotel, también podrás encontrar paquetes que incluyan asistencia, traslado desde el aeropuerto y actividades. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      cantidadPersonas: 'Precio por persona',
      precio: '7400$',
    },
    {
      id: '1',
      imagen: 'machupichu',
      nombre: 'Paquete Machu Picchu',
      dias: '7 dias / 6 noches',
      descripcion:
        "Un paquete a Cancún incluye vuelo + hotel, también podrás encontrar paquetes que incluyan asistencia, traslado desde el aeropuerto y actividades. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      cantidadPersonas: 'Precio por persona',
      precio: '7400$',
    },
    {
      id: '2',
      imagen: 'salarDeUyuni',
      nombre: 'Paquete Salar De Uyuni',
      dias: '7 dias / 6 noches',
      descripcion:
        "Un paquete a Cancún incluye vuelo + hotel, también podrás encontrar paquetes que incluyan asistencia, traslado desde el aeropuerto y actividades. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      cantidadPersonas: 'Precio por persona',
      precio: '7400$',
    },
    {
      id: '3',
      imagen: 'rioJaneiro',
      nombre: 'Paquete Rio De Janeiro',
      dias: '7 dias / 6 noches',
      descripcion:
        "Un paquete a Cancún incluye vuelo + hotel, también podrás encontrar paquetes que incluyan asistencia, traslado desde el aeropuerto y actividades. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      cantidadPersonas: 'Precio por persona',
      precio: '7400$',
    },
  ];
  return (
    <div>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Paquete 1
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Paquete 2
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Paquete 3
          </button>
          <button
            class="nav-link"
            id="nav-disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-disabled"
            type="button"
            role="tab"
            aria-controls="nav-disabled"
            aria-selected="false"
          >
            Paquete 4
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <Paquete datoPaquete={arPaquetes[0]}/>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <Paquete datoPaquete={arPaquetes[1]}/>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabindex="0"
        >
          <Paquete datoPaquete={arPaquetes[2]}/>
        </div>
        <div
          class="tab-pane fade"
          id="nav-disabled"
          role="tabpanel"
          aria-labelledby="nav-disabled-tab"
          tabindex="0"
        >
          <Paquete datoPaquete={arPaquetes[3]}/>
        </div>
      </div>
    </div>
  );
}
