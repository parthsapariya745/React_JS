import { useCallback, useState } from "react"

const Usecallback = () => {
    const [count, setCount] = useState(0)

    let handleIn = useCallback(() => {
        return setCount(count + 1)
    }, [count])

    return (
        <div className="p-6 bg-green-100 rounded-lg shadow-md mx-auto my-4 w-[300px] text-center">
            <h1 className="text-2xl font-bold mb-2 text-green-800">Use callback</h1>
            <h2 className="text-xl mb-4">count: <span className="font-semibold">{count}</span></h2>
            <button
                onClick={handleIn}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors cursor-pointer"
            >
                +
            </button>
        </div>
    )
}
export default Usecallback