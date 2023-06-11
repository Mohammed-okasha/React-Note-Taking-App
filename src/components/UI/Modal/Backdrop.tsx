type BackdropProps = {
  onClose: () => void;
};

const Backdrop = ({ onClose }: BackdropProps) => {
  const backdropStyle: React.CSSProperties = {
    position: "fixed",
    inset: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    transition: ".3s ease-out",
    zIndex: 10,
  };

  return <div style={backdropStyle} onClick={onClose} />;
};

export default Backdrop;
