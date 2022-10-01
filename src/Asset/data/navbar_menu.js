import { AiOutlineHeart, AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi';

export const sidebarMenu = [
    {
        id: 1,
        name: 'خانه',
        icon: <AiOutlineHome className="me-2" size={18}/>,
        route: '/',
    },
    {
        id: 2,
        name: 'محصولات',
        icon: <FiPackage className="me-2" size={18}/>,
        route: '/products',
    },
    {
        id: 3,
        name: 'سبد خرید',
        icon: <AiOutlineShoppingCart className="me-2" size={18}/>,
        route: '/cart',
    },
    {
        id: 4,
        name: 'علاقه مندی ها',
        icon: <AiOutlineHeart className="me-2" size={18}/>,
        route: '/wishlist',
    }
]
