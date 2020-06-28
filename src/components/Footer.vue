<template>
  <div class="footer">
    <footer class="container-fluid">
      <hr />
      <div class="info">
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-3" id="personal">
            <p class="wow fadeInUp">connect with us</p>
            <h4 class="wow fadeInUp" data-wow-delay="0.2s">@tusslife</h4>
          </div>

          <div class="col-lg-2" id="media">
            <p class="wow fadeInUp" data-wow-delay="0s">
              <span class="space">&nbsp;&nbsp;</span>follow us
            </p>
            <ul>
              <li id="fb" class="wow fadeInUp" data-wow-delay="0.4s">
                <a href="https://www.facebook.com/tusslife" target="_blank"
                  >fb</a
                >
              </li>
              <li id="ig" class="wow fadeInUp" data-wow-delay="0.6s">
                <a href="https://www.instagram.com/tusslife.ph/" target="_blank"
                  >ig</a
                >
              </li>
            </ul>

          </div>

          <div class="col-lg-3" id="address">
            <p class="wow fadeInUp" data-wow-delay="0s">say hello</p>
            <h4 class="wow fadeInUp" data-wow-delay="0.2s">
              official@tusslife.com
            </h4>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
hr {
  border: 1px solid rgba(26, 26, 26, 0.13);
}

.info h4 {
  font-size: 18px;
  font-weight: lighter;
}

.info p {
  color: grey;
  font-weight: lighter;
}

#personal{
  text-align: left;
}

.info li {
  font-weight: lighter;
  color: #0f0f0f;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
}

#fb::before {
  display: inline-block;
  content: "";
  border-radius: 100%;
  height: 4px;
  width: 4px;
  margin-right: 6px;
  background: #3b5998;
}

#ig::before {
  display: inline-block;
  content: "";
  border-radius: 100%;
  height: 4px;
  width: 4px;
  margin-right: 6px;
  background: #fcaf45;
}

#media p{
  text-align: center;
}

#media ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

#media ul li {
  display: inline-block;
  text-decoration: none;
}

#media ul a {
  text-decoration: none;
  color: black;
}

#address {
  text-align: right;
}

@media (max-width: 1000px) {
  #personal,
  #media,
  #address {
    text-align: center;
  }

  .info ul {
    margin: 0 0 0 -22px;
    padding: 0;
  }
}
</style>
