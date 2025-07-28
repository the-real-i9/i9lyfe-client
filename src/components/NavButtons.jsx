import { useDispatch } from 'react-redux';
import { setPage } from '../store/pagesSlice';

export default function NavButtons() {
  const dispatch = useDispatch();
  
  return (
    <div className="flex gap-4 p-4">
      <button onClick={() => dispatch(setPage('Splash'))} className="px-4 py-2 bg-blue-500 text-white rounded">Splash</button>
      <button onClick={() => dispatch(setPage('Login'))} className="px-4 py-2 bg-green-500 text-white rounded">Login</button>
      <button onClick={() => dispatch(setPage('Home'))} className="px-4 py-2 bg-purple-500 text-white rounded">Home</button>
    </div>
  );
}
