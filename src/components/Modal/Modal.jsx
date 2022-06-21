const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="z-10 fixed h-full w-full right-0 top-0 bg-gray-700 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white animate-wiggle text-black rounded w-[90%] md:w-[50%] lg:w-[30%] h-[50%] min-h-[500px] relative">
        <button
          className="absolute right-2 top-0 text-red-500"
          onClick={() => {
            props.hide();
          }}
        >
          <i className="fal fa-times"></i>
        </button>
        {props.title ? (
          <h3 className="text-center border-b font-semibold">{props.title}</h3>
        ) : null}
        <div className="pt-5 px-4">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
