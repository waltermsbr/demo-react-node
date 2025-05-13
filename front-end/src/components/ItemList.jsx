import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
	const { pathname } = useLocation();
	const isHome = pathname === '/';
	const finalItenms = isHome ? items : Infinity;
	return (
		<div className="item-list">
			<div className="item-list__header">
				<h2>{title}</h2>
				{isHome ? (
					<Link to={path} className="item-list__link">
						Mostrar tudo
					</Link>
				) : (
					<></>
				)}
			</div>

			<div className="item-list__container">
				{itemsArray
					.filter((currentValue, index) => index < finalItenms)
					.map((currentValue, index) => {
						return <SingleItem {...currentValue} idPath={idPath} key={`${title}-${index}`} />;
					})}
			</div>
		</div>
	);
};

export default ItemList;
