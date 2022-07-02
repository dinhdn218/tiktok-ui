import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '@/components/Icons';
import routes from './routes';

const menu = [
  {
    text: 'For You',
    to: routes.home,
    icon: <HomeIcon />,
    activeIcon: <HomeActiveIcon />,
  },
  {
    text: 'Following',
    to: routes.following,
    icon: <UserGroupIcon />,
    activeIcon: <UserGroupActiveIcon />,
  },
  {
    text: 'LIVE',
    to: routes.live,
    icon: <LiveIcon />,
    activeIcon: <LiveActiveIcon />,
  },
];

export default menu;
