function Dropdown(props) {
    const { label, register, name, errorMessage, errors } = props;
    return (
        <>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 md:mb-2">
                    {label}
                </label>
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 mb-1 md:mb-2  font-medium dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    {...register(name, {
                        required: {
                            value: true,
                            message: errorMessage,
                        },
                    })}
                >
                    <option selected>{name}</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
                <p className="mt-4 text-red-500 text-sm">{errors[name]?.message}</p>
            </div>
        </>
    );
}

export default Dropdown;
