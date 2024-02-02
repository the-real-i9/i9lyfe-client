import { Link } from "react-router-dom";

export default function ViewBtn({ dest }) {
  return (
    <Link
				to={dest}
				className="block text-xs rounded-i9-2xs px-4 py-2 font-bold text-prim ring-1 ring-gray-200"
			>
				View
			</Link>
  )
}
