import type { FormInputProps } from '../../interfaces/form.interfaces';

export const FormInput: React.FC<FormInputProps> = ({ label, value, type = 'number', handleChange, helperText }) => {
    return (
        <div className="sm:flex rounded-lg h-fit ">
            <label className="py-2.5 sm:py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 sm:text-sm text-gray-500 rounded-l-md">
                {
                    helperText ? <span className="text-red-600">{helperText}</span> : label
                }
            </label>
            <input
                type={type}
                value={value === 0 ? '' : value}
                onChange={(e) => {
                    const newValue = type === 'number' ? +e.target.value : e.target.value;
                    handleChange(newValue);
                }}
                className="py-2.5 sm:py-3 px-4 pe-11 block w-full border-white border-1 rounded-r-md sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
        </div>
    );
};
