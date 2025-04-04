import React, { useId } from 'react';
import { FormSelectProps } from '../../interfaces/form.interfaces';

export const FormSelect: React.FC<FormSelectProps> = ({
    label,
    options,
    value,
    handleChange,
    labelColor,
    borderColor,
    focusColor,
    helperText,
    helperTextColor,
    icon,
}) => {
    const id = useId();
    return (
        <div className="h-fit">
            <label htmlFor={`select-${id}`} className={`block text-sm text-s font-medium mb-2 ${labelColor}`}>
                {label}
            </label>
            <div className="relative">
                <select
                    id={`select-${id}`}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    className={`py-3 px-4 pe-16 block w-full ${borderColor} rounded-lg text-sm focus:${focusColor} focus:${focusColor} disabled:opacity-50 disabled:pointer-events-none hover:cursor-pointer bg-white/70 backdrop-blur-md`}
                >
                    {options.map((option) => (
                        <option className='bg-sky-700/70 backdrop-blur-md' key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
                    {icon}
                </div>
            </div>
            <p className={`text-sm ${helperTextColor} mt-2 font-semibold`}>{helperText}</p>
        </div>
    );
};