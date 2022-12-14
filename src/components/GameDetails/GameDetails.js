import './GameDetails.scss';
import { NavLink } from "react-router-dom";
import CloseIcon from '../../assets/icons/close-icon-2.webp'

export default function GameDetails({ game, closeModal, addGame, key }) {
  console.log(game)
  return (
    <div className={`details`} >
      <div className='details__name' key={key}>
        <h1>{game.name}</h1>
        <NavLink to='/games'>
          <img onClick={closeModal} src={CloseIcon} alt='X mark to close modal' />
        </NavLink>
      </div>
      <div className='details__info'>
        <img src={game.background_image} />
        <div className='details__info-more'>
          <p><strong>Released:</strong> {game.released}</p>
          <p><strong>Rating:</strong> {game.rating}</p>
          <p><strong>Genre(s):</strong></p>
          {
            game.genres.map(g => `${g.name} | `)
          }
          <p><strong>Platform(s):</strong></p>
          {
            game.platforms.map(p => `${p.platform.name} | `)
          }
        </div>
      </div>
      <button className='details__button' onClick={() => addGame(game)}>Add Game</button>
      <ul className='details__screenshots'>
        {
          game.short_screenshots.map(ss => <li><img src={ss.image} alt='screenshot'></img></li>)
        }
      </ul>
    </div>
  );
}
