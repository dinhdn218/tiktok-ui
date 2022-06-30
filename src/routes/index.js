import config from '@/config';
import { HeaderOnlyLayout } from '@/layouts';
import Following from '@/pages/Following';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Search from '@/pages/Search';
import Upload from '@/pages/Upload';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
