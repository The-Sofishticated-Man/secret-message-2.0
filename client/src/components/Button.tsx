import { ReactNode } from "react";

const Button = ({ children }: { children: string|ReactNode}) => {
  return (
    <button
      className={`px-5 py-2 rounded-md font-primary text-3xl my-2 bg-primary flex items-center gap-2`}
    >
      {children}
    </button>
  );
};

export default Button;
