import { useState } from 'react';
import { SelectComponent } from './SelectComponent';

export const FormSelect = () => {
    const [selectedBenefit, setSelectedBenefit] = useState<string>('');
    const [selectedDuration, setSelectedDuration] = useState<string>('');

    const benefitOptions = [
        { value: '', label: 'Selecciona el tipo de beneficio' },
        { value: 'simple', label: 'Beneficio de Interes Simple' },
        { value: 'compound', label: 'Beneficio de Interes Compuesto' },
    ];

    const durationOptions = [
        { value: '', label: 'Seleccione el tiempo' },
        { value: '1', label: '1 mes' },
        { value: '3', label: '3 meses' },
        { value: '6', label: '6 meses' },
        { value: '9', label: '9 meses' },
        { value: '12', label: '12 meses' },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-4 h-fit">
            <SelectComponent
                label="Tipos de Beneficios"
                options={benefitOptions}
                selectedValue={selectedBenefit}
                setSelectedValue={setSelectedBenefit}
                borderColor="red-500"
                focusColor="red-500"
                helperText=""
                helperTextColor="red-600"
                icon=""
            />
            <SelectComponent
                label="Tiempo de Duracion"
                options={durationOptions}
                selectedValue={selectedDuration}
                setSelectedValue={setSelectedDuration}
                borderColor="teal-500"
                focusColor="teal-500"
                helperText=""
                helperTextColor="teal-600"
                icon=""
            />
        </div>
    );
};
