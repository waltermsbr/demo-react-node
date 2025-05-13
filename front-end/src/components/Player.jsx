import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Player = ({ duration, next, previous, audio }) => {
	const audioPlayer = useRef();
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<div className="player">
			<div className="player__controllers">
				<Link to={`/song/${previous}`}>
					<FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
				</Link>
				<FontAwesomeIcon
					className="player__icon player__icon--play"
					icon={isPlaying ? faCirclePause : faCirclePlay}
					onClick={() => {
						isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
						setIsPlaying(!isPlaying);
					}}
				/>
				<Link to={`/song/${next}`}>
					<FontAwesomeIcon className="player__icon" icon={faForwardStep} />
				</Link>
			</div>
			<div className="player__progress">
				<p>00:00</p>
				<div className="player__bar">
					<div className="player__bar-progress"></div>
				</div>
				<p>{duration}</p>
			</div>
			<audio ref={audioPlayer} src={audio}></audio>
		</div>
	);
};

export default Player;
