import logo from '@shared/assets/icons/logo-single.svg';

import cls from './Logo.module.scss';

export const Logo = () => {
  return <img src={logo} alt="eventor" className={cls.Logo} />;
};
