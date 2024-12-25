const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[calc(100vh-305px)]">
      <iframe
        src="https://lottie.host/embed/f0afb4d8-ded9-4fde-9e8d-7a3ac2ab9c40/zfbmMPtr0L.lottie"
        className="w-32 h-32" // Adjust the size as needed
        frameBorder="0"
        title="Loading Animation"
      ></iframe>
    </div>
  );
};

export default LoadingSpinner;
