export const ComissionSimulatorSelect = () => {
    return (
        <div>
            <div>
                <label htmlFor="select-1" className="block text-sm font-medium mb-2">Label</label>
                <div className="relative">
                    <select id="select-1" className="py-3 px-4 pe-16 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none">
                        <option selected={false}>Open this select menu</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
                        <svg className="shrink-0 size-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" x2="12" y1="8" y2="12"></line>
                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                    </div>
                </div>
                <p className="text-sm text-red-600 mt-2">Please select a valid state.</p>
            </div>

            <div>
                <label htmlFor="select-2" className="block text-sm font-medium mb-2">Label</label>
                <div className="relative">
                    <select id="select-2" className="py-3 px-4 pe-16 block w-full border-teal-500 rounded-lg text-sm focus:border-teal-500 focus:ring-teal-500 disabled:opacity-50 disabled:pointer-events-none">
                        <option>Open this select menu</option>
                        <option selected={false}>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
                        <svg className="shrink-0 size-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>
                <p className="text-sm text-teal-600 mt-2">Looks good!</p>
            </div>
        </div>
    )
}
