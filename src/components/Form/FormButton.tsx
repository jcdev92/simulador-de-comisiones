interface FormButtonProps {
    label: string;
    color: string;
    hoverColor?: string;
    focusColor?: string;
    onClick?: () => void;
    type?: "submit" | "button" | "reset";
}

export const FormButton: React.FC<FormButtonProps> = ({ label, color, hoverColor, focusColor, onClick }) => {
    return (
        <button
            className={`px-6 py-2 ${color} ${hoverColor} ${focusColor} text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2  focus:ring-opacity-75 transition-transform transform hover:scale-105 active:scale-95 hover:cursor-pointer`}
            type="submit"
            onClick={onClick}
        >
            {label}
        </button>
    );
};
