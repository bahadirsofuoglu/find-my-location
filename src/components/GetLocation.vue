<template>
  <div>
    <div class="container">
      <b-card>
        <b-row>
          <b-col md="8"></b-col>

          <b-col>
            <b-button
              class="mb-3 mr-2"
              v-b-modal.modal-center.modal-lg
              variant="danger"
              >Show Me</b-button
            >
            <b-button
              class="mb-3 "
              variant="dark"
              @click="locatorButtonPressed()"
              >Find My Location</b-button
            >
          </b-col>
        </b-row>

        <b-form-textarea
          id="textarea"
          v-model="address"
          placeholder="Waiting Your Address.."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-card>
    </div>

    <b-modal id="modal-lg" size="lg" centered title="BootstrapVue">
      <GmapMap
        class="map"
        :center="{ lat: this.towTruck.lat, lng: this.towTruck.lng }"
        :zoom="13"
      >
        <gmap-marker :position="userLocation"></gmap-marker>

        <gmap-marker
          :position="towTruck"
          :icon="{
            url: '/tow-truck (1).png',
          }"
        ></gmap-marker>
      </GmapMap>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      address: "",
      userLocation: {
        lat: null,
        lng: null,
      },
      towTruck: {
        lat: null,
        lng: null,
      },
      step: 0,
      interval: null,
      routeData: null,
    };
  },
  computed: {
    url() {
      return `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=${this.towTruck.lat},${this.towTruck.lng}&destination=${this.userLocation.lat},${this.userLocation.lng}&key=AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw`;
    },
  },
  mounted() {},
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getStreetAddressFrom(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.log(error.message);
        }
      );
      const _self = this;
      window.setTimeout(async () => {
        _self.towTruck = { lat: 41.028941, lng: 29.0390162 };
        await this.getRouteData();
        _self.interval = window.setInterval(function() {
          console.log("interval");
          _self.changeDestination();
        }, 3000);
      }, 3000);
    },
    async getRouteData() {
      try {
        const myRequest = new Request(this.url);
        let response = await axios(myRequest);
        console.log(response);
        if (response.data.status == "NOT_FOUND") {
          this.getRouteData();
        }
        if (response.data.status !== "OK") {
          console.log(response.error_message);
          this.getRouteData();
        } else {
          console.log(response.data.routes);
          this.routeData =
            response.data.routes.length > 0 ? response.data.routes[0] : null;
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    changeDestination() {
      if (!this.routeData) return;
      console.log(this.routeData);
      let steps = this.routeData.legs[0].steps;
      this.towTruck.lat = steps[this.step].end_location.lat;
      this.towTruck.lng = steps[this.step].end_location.lng;

      if (steps.length > this.step + 1) this.step++;
      else window.clearInterval(this.interval);
    },
    async getStreetAddressFrom(lat, long) {
      try {
        var { data } = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw"
        );
        if (data.error_message) {
          console.log(data.error_message);
        } else {
          this.userLocation.lat = data.results[0].geometry.location.lat;
          this.userLocation.lng = data.results[0].geometry.location.lng;
          this.address = data.results[0].formatted_address;

          console.log(this.url);
          console.log(this.userLocation.lat);
          console.log(this.userLocation.lng);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  width: 100%;
  height: 30px;
  padding: 50%;
}
.container {
  margin-top: 250px;
}
</style>
