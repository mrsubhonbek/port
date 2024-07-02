import { Layout, Menu } from 'antd';

import { useAppDispatch, useAppSelector } from '../store';
import { selectPath, setPath } from './domain/menu-slice';
import { router } from '../route';

import type { MenuProps } from 'antd';
import { useEffect } from 'react';

const menuItem: MenuProps['items'] = [
  { label: 'Главная', key: '/' },
  { label: 'Услуги', key: '/services' },
  { label: 'Новости', key: '/news' },
  { label: 'Лицензия', key: '/license' },
  { label: 'Флот', key: '/fleet' },
  { label: 'Контакты', key: '/contacts' },
];

export function HeaderPage() {
  const currentPath = useAppSelector(selectPath);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPath(router.state.location.pathname));
  }, [dispatch]);

  return (
    <Layout.Header className="backdrop-blur-md bg-transparent fixed top-0 left-0 right-0">
      <div className="logo w-20 h-full absolute">Logo</div>
      <Menu
        selectedKeys={[currentPath]}
        className="bg-transparent ml-20"
        mode="horizontal"
        onClick={(e) => {
          router.navigate(e.key);
          dispatch(setPath(e.key));
        }}
        items={menuItem}
      />
    </Layout.Header>
  );
}
