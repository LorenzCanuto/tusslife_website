<template>
  <div class="products">
    <div class="container">
      <h3>Products page</h3>
      <input
        type="text"
        placeholder="product name"
        id="name"
        v-model="product.name"
      /><br />
      <input
        type="number"
        placeholder="price"
        id="price"
        v-model="product.price"
      /><br />
      <button @click="saveData">add</button>

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in products" :key="product.name">
              <td>{{ product.id }}</td>
              <td>{{ product.data().name }}</td>
              <td>{{ product.data().price }}</td>
              <td>
                <button @click="editData(product)" class="btn btn-secondary">
                  edit
                </button>
                <button @click="deleteData(product)" class="btn btn-danger">
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id="editData" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="watcher()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span>ID: </span>
            <input
              type="text"
              placeholder="id"
              id="id"
              v-model="active_id"
              readonly
            /><br />
            <span>Name: </span>
            <input
              type="text"
              placeholder="product name"
              id="name"
              v-model="product.name"
            /><br />
            <span>Price: </span>
            <input
              type="number"
              placeholder="price"
              id="price"
              v-model="product.price"
            /><br />
          </div>
          <div class="modal-footer">
            <button @click="updateData()" type="button" class="btn btn-primary">
              Save changes
            </button>
            <button
              @click="watcher()"
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  name: "Products",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
      },
      active_id: null,
    };
  },
  methods: {
    readData() {
      this.products = [];
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.products.push(doc);
          });
        });
    },
    watcher() {
      db.collection("products").onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
        this.reset()
      });
    },
    saveData() {
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.watcher();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    deleteData(doc) {
      if (confirm("Are you sure?")) {
        db.collection("products")
          .doc(doc.id)
          .delete()
          .then(() => {
            alert("Product successfully deleted!");
            this.watcher();
          })
          .catch(function(error) {
            console.error("Error removing document: ", error);
          });
      }
    },
    editData(doc) {
      this.product = doc.data();
      this.active_id = doc.id;
      $("#editData").modal("show");
    },
    updateData() {
      if (confirm("Are you sure?")) {
        db.collection("products")
          .doc(this.active_id)
          .update(this.product)
          .then(() => {
            alert("Product successfully updated!");
            this.watcher();
            $("#editData").modal("hide");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      }
    },
    reset() {
      this.product.name = null;
      this.product.price = null;
    },
  },
  created() {
    this.readData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
