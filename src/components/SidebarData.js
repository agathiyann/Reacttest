import React from 'react';
import * as TbIcons from 'react-icons/tb';
import * as TiIcons from 'react-icons/ti';
import * as RxIcons from 'react-icons/rx';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <RxIcons.RxDashboard/>,
    cName: 'nav-text'
  },
  {
    title: 'Montages',
    path: '/montages',
    icon: <TiIcons.TiDocumentAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Credits',
    path: '/credits',
    icon: <TbIcons.TbCoins />,
    cName: 'nav-text'
  },
  
];