<template>
  <div class="admin">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <aside class="col-12 col-md-2 p-0 bg-dark fixed-bottom">
          <nav
            class="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2"
          >
            <div class="collapse navbar-collapse align-items-start">
              <ul
                class="flex-md-column flex-row navbar-nav w-100 justify-content-between"
              >
                <li class="nav-item">
                  <a class="nav-link pl-0 text-nowrap"
                    ><i class="fa fa-bullseye fa-fw"></i>
                    <span class="font-weight-bold">TUSS Admin Panel</span></a
                  >
                </li>

                <li class="nav-item">
                  <router-link to="/admin/overview"
                    ><i class="fa fa-chart-bar"></i>
                    <span class="d-none d-md-inline"
                      >Overview</span
                    ></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/products"
                    ><i class="fa fa-tshirt"></i>
                    <span class="d-none d-md-inline"
                      >Products</span
                    ></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/orders"
                    ><i class="fa fa-shopping-cart"></i>
                    <span class="d-none d-md-inline">Orders</span></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/contents"
                    ><i class="fa fa-book"></i>
                    <span class="d-none d-md-inline"
                      >Contents</span
                    ></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/inbox"
                    ><i class="fa fa-envelope fa-fw"></i>
                    <span class="d-none d-md-inline">Inbox</span></router-link
                  >
                </li>
                <li class="nav-item">
                  <button @click="logout"
                    ><i class="fa fa-power-off fa-fw"></i>
                    <span class="d-none d-md-inline">Logout</span></button
                  >
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <main class="col offset-md-2 bg-faded py-3">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { fb } from "../../firebase";

export default {
  name: "admin",
  components: {},
  data() {
    return {};
  },
  methods: {
    logout() {
      fb
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/')
        })
        .catch(function(error) {
          alert(error.message);
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
body,
html {
  height: 100%;
}

@media (min-width: 768px) {
  aside {
    height: 100%;
  }
}
</style>
