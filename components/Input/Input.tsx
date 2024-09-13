export type InputProps = {
  label?: string;
  multiline?: boolean; //para caso seja textarea
  disabled?: boolean;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);
// para diminuir a complexidade, vamos utilizar um componente que irá servir como auxiliar

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    // neste caso ele não sabe se recebera um 'HTMLTextAreaElement' ou 'HTMLInputElement' então temos que fazer um casting com o operador 'as'
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

const Input = ({label, className, ...rest}: InputProps) => {
  return (
    <div className="relative">
      {label && <label className="absolute pt-1 pl-3 text-xs" >{label}</label>}
      <InputOrTextArea className={`
        bg-dark text-gray-primary rounded-md p-3 
        disabled:bg-disabled disabled:border-disabled ${className}
        ${label && 'pt-5'}
        `} {...rest} />
    </div>
  );
};

export default Input;
