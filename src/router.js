function loadView(view) {
  return () => import(`./views/${view}.vue`)
}

function loadViewSub(sub, view) {
  return () => import(`./views/${sub}/${view}.vue`)
}






/**-------------------Use in Router-------------------------- */
const routes = [{
      path: '*',
      redirect: '/home'
  },
  {
      path: '/home',
      name: 'home',
      component: loadView('Home')
  }, 
  {
    path: '/about',
    name: 'about',
    component: loadView('About')
}, 
 
];


export default routes;