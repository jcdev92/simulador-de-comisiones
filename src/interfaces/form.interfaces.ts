export type profitType =  '' | 'simple' | 'compound';
export type durationType = 0 | 1 | 3 | 6 | 9 | 12;
export type currencyType = 'BRL' | 'USD' | 'EUR';

export type SelectOption = {
    value: profitType | durationType | currencyType;
    label: string;
};

export interface FormSelectProps {
    label: string;
    options: SelectOption[];
    value: string | number;
    handleChange: (value: string | number) => void;
    borderColor: string;
    focusColor: string;
    helperText?: string;
    helperTextColor?: string;
    icon?: React.ReactNode;
  }

export interface FormInputProps {
    label: string;
    value: number;
    type?: string;
    handleChange: (value: string | number ) => void;
}