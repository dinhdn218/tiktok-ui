import routesConfig from '@/components/Config/routes';
import { HeaderOnlyLayout } from '@/components/Layouts';
import Following from '@/pages/Following';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Search from '@/pages/Search';
import Upload from '@/pages/Upload';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnlyLayout },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
