interface ErrorMessageProps {
  text: string;
}
const ErroroMessage = ({ text }: ErrorMessageProps) => {
  return (
    <div
      className="w-auto relative flex justify-center items-center z-10 h-8 bg-red-600 leading-none font-medium text-center
      rounded-lg text-sm text-white italic 
      before:absolute before:content 
      before:w-0 before:h-0 
      before:border-l-[10px] before:border-l-transparent
      before:border-b-[20px] before:border-b-red-600
      before:border-r-[10px] before:border-r-transparent before:-top-3 before:left-2 before:-z-10"
    >
      {text}
    </div>
  );
};

export default ErroroMessage;
