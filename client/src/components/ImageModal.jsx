const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-20 h-full flex items-center justify-center bg-black bg-opacity-75">
      <div className="max-w-4xl overflow-hidden">
        <img src={imageUrl} alt="Large View" className="w-full h-full" />
      </div>
      <button
        className="absolute top-0 right-0 m-4 text-white text-lg cursor-pointer"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ImageModal;
