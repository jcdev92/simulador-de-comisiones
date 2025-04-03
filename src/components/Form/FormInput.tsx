export const FormInput = () => {
    return (
        <div className="sm:flex rounded-lg  h-fit">
            <span className="py-2.5 sm:py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 sm:text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg">Capital Semilla</span>
            <input type="number" className="py-2.5 sm:py-3 px-4 pe-11 block w-full border-gray-200 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"  placeholder="Ingrese el monto"/>
        </div>
    )
}
