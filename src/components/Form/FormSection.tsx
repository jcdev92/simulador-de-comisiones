import { FormButton, FormInput, FormSelect } from "./"

export const FormSection = () => {
    return (
        <section className='w-full h-fit'>
            <div className="flex flex-col h-fit md:flex-row items-center justify-evenly bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 rounded-2xl mx-4 p-4 shadow-lg border border-blue-500">
                <FormInput />
                <FormButton label="Calcular" />
                <FormSelect />
            </div>
        </section>
    )
}
