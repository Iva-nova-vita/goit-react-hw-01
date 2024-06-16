import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendList({ avatar, name, isOnline }) {
  return (
    <div className={css.card} >
      <img className={css.avatar} src={avatar} alt='Avatar' width='48' />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
