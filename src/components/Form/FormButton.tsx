interface FormButtonProps {
    label: string;
}

export const FormButton: React.FC<FormButtonProps> = ({ label }) => {
    return (
        <button
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 active:scale-95"
            type="submit"
        >
            {label}
        </button>
    );
};
