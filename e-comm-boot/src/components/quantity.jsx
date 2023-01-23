
export default function Quantity({ count, setCount, upSub, subtotal }) {


    return (
        <div className="d-flex">
            <button onClick={() => {
                setCount(count + 1);

            }}>
                +
            </button>
            <div className="px-3 " style={{ border: "1px solid black" }}>
                {count}
            </div>
            <button onClick={() => {
                if (count < 1) {
                    setCount(count = 1)
                } else {
                    setCount(count - 1)
                }

            }}
            >
                -
            </button>
        </div>
    )
}