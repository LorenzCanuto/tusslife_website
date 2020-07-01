import Vue from "vue";
import VueRouter from "vue-router";
/--front-end pages--/;
import Home from "../views/frontend_views/Home.vue";
import Store from "../views/frontend_views/Store.vue";
import Content from "../views/frontend_views/Content.vue";
import All from "../views/frontend_views/AllContent.vue";
import Culture from "../views/frontend_views/Culture.vue";
import Art from "../views/frontend_views/Art.vue";
import Life from "../views/frontend_views/Life.vue";
import Contact from "../views/frontend_views/Contact.vue";
import About from "../views/frontend_views/About.vue";
import Cart from "../views/frontend_views/Cart.vue";
import Login from "../views/frontend_views/Login.vue";
import Signup from "../views/frontend_views/Signup.vue";
import Account from "../views/frontend_views/Account.vue";
/--admin pages--/;
import Admin from "../views/admin_views/Admin.vue";
import AdminLogin from "../views/admin_views/AdminLogin.vue";
import Overview from "../views/admin_views/Overview.vue";
import Products from "../views/admin_views/Products.vue";
import Orders from "../views/admin_views/Orders.vue";
import Contents from "../views/admin_views/Contents.vue";
import Inbox from "../views/admin_views/Inbox.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/store",
    name: "store",
    component: Store,
  },
  {
    path: "/content",
    name: "content",
    component: Content,
    children: [
      {
        path: "culture",
        name: "culture",
        component: Culture,
      },
      {
        path: "art",
        name: "art",
        component: Art,
      },
      {
        path: "life",
        name: "life",
        component: Life,
      },
      {
        path: "all",
        name: "all",
        component: All,
      },
    ],
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
  },
  {
    path: "/admin/login",
    name: "adminlogin",
    component: AdminLogin,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children: [
      {
        path: "overview",
        name: "overview",
        component: Overview,
      },
      {
        path: "products",
        name: "products",
        component: Products,
      },
      {
        path: "orders",
        name: "orders",
        component: Orders,
      },
      {
        path: "contents",
        name: "contents",
        component: Contents,
      },
      {
        path: "inbox",
        name: "inbox",
        component: Inbox,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
