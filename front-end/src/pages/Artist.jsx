import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistsArrayApi } from '../../api/api.js';
import { songsArrayApi } from '../../api/api.js';

const Artist = () => {
	const { id } = useParams();
	const artistObj = artistsArrayApi.filter((currentArtist) => currentArtist._id === id)[0];
	const songsArrayFromArtist = songsArrayApi.filter((currentSong) => currentSong.artist === artistObj.name);
	const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));
	const randomIdSongFromArtist = songsArrayFromArtist[randomIndex]._id;
	return (
		<div className="artist">
			<div
				className="artist__header"
				style={{
					backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
				}}
			>
				<h2 className="artist__title">{artistObj.name}</h2>
			</div>
			<div className="artist__body">
				<h2>Populares</h2>
				<SongList songsArray={songsArrayFromArtist} />
			</div>
			<Link to={`/song/${randomIdSongFromArtist}`}>
				<FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
			</Link>
		</div>
	);
};

export default Artist;
