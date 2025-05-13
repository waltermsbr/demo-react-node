import React from 'react';
import ItemList from './ItemList';
import { artistsArrayApi } from '../../api/api.js';
import { songsArrayApi } from '../../api/api.js';

const Main = ({ type }) => {
	return (
		<div className="main">
			{/* Item List de Artistas */}
			{type === 'artists' || type === undefined ? (
				<ItemList title="Artistas" items={10} itemsArray={artistsArrayApi} path="/artists" idPath="/artist" />
			) : (
				<></>
			)}
			{/* Item List de Músicas */}
			{type === 'songs' || type === undefined ? (
				<ItemList title="Músicas" items={20} itemsArray={songsArrayApi} path="/songs" idPath="/song" />
			) : (
				<></>
			)}
		</div>
	);
};

export default Main;
