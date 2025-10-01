import { useMemo, useState } from "react"

const Usememo = () => {
    const [count, setCount] = useState(0)

    const handleIn = () => {
        setCount(count + 1)
    }

    let counting = useMemo(() => {
        return count * 2
    }, [count])

    return (
        <div className="p-6 bg-blue-100 rounded-lg shadow-md mx-auto my-4 w-[300px] text-center">
            <h1 className="text-2xl font-bold mb-2 text-blue-800">Use memo</h1>
            <h2 className="text-xl mb-1">count: <span className="font-semibold">{count}</span></h2>
            <h2 className="text-xl mb-4">counting: <span className="font-semibold">{counting}</span></h2>
            <button
                onClick={handleIn}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
            >
                +
            </button>
        </div>
    )
}
export default Usememo