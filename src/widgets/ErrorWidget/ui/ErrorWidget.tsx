import { Button } from '@mui/material';
import { Link } from '@mui/material';

import cls from './ErrorWidget.module.scss';

export const ErrorWidget = () => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={cls.ErrorPage}>
      <h2 className={cls.message}>Что-то пошло не так 😢</h2>
      <div className={cls.inner}>
        <Link href="/">Вернуться на главную</Link>
        <Button onClick={reloadPage}>Обновить страницу</Button>
      </div>
    </div>
  );
};
