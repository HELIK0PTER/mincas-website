export const AuthInput = ({
  id,
  label,
  type,
  name,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type: string;
  name: string;
  autoComplete: string;
  required: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral dark:text-neutral-foreground mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};
