import { FormSection, TableSection } from '.';
export const CommissionSimulator = () => {

    return (
        <div className='w-full h-fit md:min-h-screen flex flex-col items-center justify-evenly gap-5'>
            <h1 className='p-5 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg'>
                Simulador de Comisiones
            </h1>
            <FormSection />
            <TableSection />
        </div>
    )
}
