import Player from '../components/Player';
import { Link, useParams } from 'react-router-dom';
import { songsArrayApi } from '../../api/api.js';
import { artistsArrayApi } from '../../api/api.js';

const Song = () => {
	const { id } = useParams();
	const songObj = songsArrayApi.filter((currentSong) => currentSong._id === id)[0];
	const artistObj = artistsArrayApi.filter((currentArtist) => currentArtist.name === songObj.artist)[0];
	const songsArrayFromArtist = songsArrayApi.filter((currentSong) => currentSong.artist === artistObj.name);
	const firstSongFromArtist = songsArrayFromArtist[0]._id;
	const lastSongFromArtist = songsArrayFromArtist[songsArrayFromArtist.length - 1]._id;
	return (
		<div className="song">
			<div className="song__container">
				<div className="song__image-container">
					<img src={songObj.image} alt={`Imagem da música ${songObj.name}`} />
				</div>
			</div>
			<div className="song__bar">
				<Link to={`/artist/${artistObj._id}`} className="song__artist-image">
					<img width={75} height={75} src={artistObj.image} alt={`Imagem do artista ${artistObj.name}`} />
				</Link>
				<Player
					duration={songObj.duration}
					next={songObj._id === lastSongFromArtist ? firstSongFromArtist : songObj._id}
					previous={songObj._id === firstSongFromArtist ? lastSongFromArtist : songObj._id}
					audio={songObj.audio}
				/>
				<div>
					<p className="song__name">{songObj.name}</p>
					<p>{artistObj.name}</p>
				</div>
			</div>
		</div>
	);
};

export default Song;
