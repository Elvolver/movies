/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Movies from "./views/Movies";
import Movie from "./views/Movie";

var routes = [
  {
    path: "/movies",
    name: "Фильмы",
    icon: "nc-icon nc-bank",
    component: <Movies />,
    layout: "/movies",
  },
  {
    path: "/movies/:id", // добавляем новый роут для просмотра фильма
    name: "Фильм",
    component: <Movie />, // используем компонент Movie для просмотра фильма
    layout: "/movies",
  },
];
export default routes;
