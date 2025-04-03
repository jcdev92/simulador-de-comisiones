import type { FormInputProps } from '../../interfaces/form.interfaces';

export const FormInput: React.FC<FormInputProps> = ({ label, value, type = 'number', handleChange }) => {
    return (
        <div className="sm:flex rounded-lg h-fit">
            <label className="py-2.5 sm:py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 sm:text-sm text-gray-500">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => {
                    const newValue = type === 'number' ? +e.target.value : e.target.value;
                    handleChange(newValue);
                }}
                className="py-2.5 sm:py-3 px-4 pe-11 block w-full border-gray-200 sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder={`Ingrese ${label.toLowerCase()}`}
            />
        </div>
    );
};
