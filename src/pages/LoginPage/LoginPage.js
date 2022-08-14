import ModalButton from '../../components/Modal/ModalButton';
import Modal from '../../components/Modal/Modal';

const modalFooter = (
  <>
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
      Cerrar
    </button>
    <button type="button" className="btn btn-primary">
      Guardar cambios
    </button>
  </>
);

export default function LoginPage() {
  return (
    <div className="Login">
      <h2>Login</h2>
      <ModalButton targetId="loginModal">Abrir Modal</ModalButton>
      <Modal targetId="loginModal" modalTitle="Hola!" modalFooter={modalFooter}>
        Login
      </Modal>
    </div>
  );
}
