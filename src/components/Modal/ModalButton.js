export default function ModalButton({ children, targetId, className = 'btn btn-primary' }) {
  return (
    <button
      type="button"
      className={className}
      data-bs-toggle="modal"
      data-bs-target={'#' + targetId}
    >
      {children}
    </button>
  );
}
