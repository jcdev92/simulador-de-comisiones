interface FormButtonProps {
    label: string;
    className: string;
    onClick?: () => void;
    type?: "submit" | "button" | "reset";
}

export const FormButton: React.FC<FormButtonProps> = ({ label, className, onClick }) => {
    return (
        <button
            className={className}
            type="submit"
            onClick={onClick}
        >
            {label}
        </button>
    );
};
