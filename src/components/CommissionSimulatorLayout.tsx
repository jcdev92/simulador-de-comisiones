import { CommissionSimulatorForm, CommissionSimulatorTable } from './';
export const CommissionSimulatorLayout = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
            <h1 className='text-2xl font-bold'>
                Commission Simulator Layout
            </h1>
            <section>
                <CommissionSimulatorForm />
            </section>
            <section>
                <CommissionSimulatorTable />
            </section>
        </div>
    )
}
