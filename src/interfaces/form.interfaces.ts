export type profitType =  '' | 'simple' | 'compound';
export type durationType = 0 | 1 | 3 | 6 | 9 | 12;
export type currencyType = 'BRL' | 'USD' | 'EUR';

export type SelectOption = {
    value: profitType | durationType | currencyType;
    label: string;
};

export interface ComissionSimulatorSelectProps {
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