import React from 'react';

interface SelectOption {
    value: string;
    label: string;
}

interface ComissionSimulatorSelectProps {
    label: string;
    options: SelectOption[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
    borderColor: string;
    focusColor: string;
    helperText: string;
    helperTextColor: string;
    icon: React.ReactNode;
}

export const SelectComponent: React.FC<ComissionSimulatorSelectProps> = ({
    label,
    options,
    selectedValue,
    setSelectedValue,
    borderColor,
    focusColor,
    helperText,
    helperTextColor,
    icon,
}) => {
    return (
        <div className="h-fit ">
            <label htmlFor="select" className="block text-sm font-medium mb-2">{label}</label>
            <div className="relative">
                <select
                    id="select"
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    className={`py-3 px-4 pe-16 block w-full border-${borderColor} rounded-lg text-sm focus:border-${focusColor} focus:ring-${focusColor} disabled:opacity-50 disabled:pointer-events-none`}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
                    {icon}
                </div>
            </div>
            <p className={`text-sm text-${helperTextColor} mt-2`}>{helperText}</p>
        </div>
    );
};
