
import {FC, ReactNode} from 'react';
import classes from './AppJsx.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(classes);

export const AppJsx: FC<IAppJsx> = ({children}: IAppJsx) => {
  return (
    <div className={cx({'app.jsx': true})}>
      {children}
    </div>
  );
};

export interface IAppJsx {
  children?: ReactNode;
}
