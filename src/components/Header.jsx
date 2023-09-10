import { Link } from 'react-router-dom';
import { BsFillCartFill, BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';

export function Header() {
   const { user, login, logout } = useAuthContext();

   return (
      <div className="flex items-center justify-between mb-5 border-b border-b-black p-4">
         <Link to="/" className="flex items-center">
            <h1 className="text-4xl text-blue-600">Shoppy</h1>
         </Link>
         <nav className="flex gap-4 font-semibold text-medium items-center">
            <Link to="/allproducts">Clothes</Link>
            <Link to="/carts">
               <BsFillCartFill className="text-xl" />
            </Link>
            {user && user.isAdmin && (
               <Link to="/products/new">
                  <BsFillPencilFill className="text-xl" />
               </Link>
            )}
            {user && <User user={user} />}
            {!user && <Button text="Login" onClick={login} />}
            {user && <Button text="Logout" onClick={logout} />}
         </nav>
      </div>
   );
}
