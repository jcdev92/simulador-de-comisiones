import { FormSection, TableSection } from '.';
import { ModalMessage } from './Message/ModalMessage';
export const CommissionSimulator = () => {

    return (
        <div className='w-full h-fit md:min-h-screen flex flex-col items-center justify-evenly gap-5'>
            <h1 className='p-5 text-center text-4xl font-extrabold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
                Simulador de Comisiones
            </h1>
            <FormSection />
            <TableSection />
            <ModalMessage />
        </div>
    )
}
