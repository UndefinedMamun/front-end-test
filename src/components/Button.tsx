const Button = ({children, ...rest}:any) => {
  return (
    <button
      {...rest}
      className="text-white mt-4 bg-blue-700 hover:bg-blue-800 disabled:bg-gray-500 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center">
        {children}
    </button>
  );
}

export default Button;