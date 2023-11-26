import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.scss';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const {pathname} = location;

    switch(pathname) {
      case '/user/stats':
        setTitle('Estatísticas');
        break;
      case '/user/post':
        setTitle('Poste uma foto');
        break;
      default:
        setTitle('Minha conta');
    }
  }, [location]);

  
  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav/>
    </header>
  )
}

export default UserHeader