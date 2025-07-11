export default function CartModal({ carts, onClose, onChangeQty, onDelete }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-3xl rounded-lg p-6 relative">
        <button
          className="absolute top-2 right-4 text-xl font-bold text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Qty</th>
              <th className="px-4 py-2">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2 font-medium">{item.name}</td>
                <td className="px-4 py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                </td>
                <td className="px-4 py-2">${item.price}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <button
                    onClick={() => onChangeQty(item.id, -1)}
                    disabled={item.qty === 1}
                    className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => onChangeQty(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </td>
                <td className="px-4 py-2 font-semibold">
                  ${item.price * item.qty}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-500 font-bold"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
