import { FormSection } from '.';
import { TableSection } from './Table/TableSection';
export const CommissionSimulator = () => {

    return (
        <div className='w-full h-full flex flex-col items-center justify-evenly gap-2'>
            <h1 className='text-2xl font-bold h-fit'>
                Commission Simulator Layout
            </h1>
            <FormSection />
            <TableSection />
        </div>
    )
}
