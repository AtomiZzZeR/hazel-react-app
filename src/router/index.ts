import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import WorkPage from '../pages/WorkPage/WorkPage';

interface IRoute {
  path: string;
  element: React.ElementType;
}

export enum ERoutePathes {
  home = '',
  about = 'about',
  work = 'work',
  contact = 'contact',
  error = '*',
}

export const routes: IRoute[] = [
  { path: ERoutePathes.home, element: HomePage },
  { path: ERoutePathes.about, element: AboutPage },
  { path: ERoutePathes.work, element: WorkPage },
  { path: ERoutePathes.contact, element: ContactPage },
  { path: ERoutePathes.error, element: NotFoundPage },
];
