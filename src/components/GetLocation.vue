<template>
  <div>
    <div class="container">
      <b-card>
        <b-row>
          <b-col md="8"></b-col>

          <b-col>
            <b-button
              class="mb-3 mr-2 "
              variant="dark"
              @click="locatorButtonPressed()"
              >Konumumu Bul</b-button
            >
            <b-button
              class="mb-3 mr-2"
              v-show="showMap == true"
              v-b-modal.modal-center.modal-lg
              variant="danger"
              >Haritada Göster</b-button
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
    <div>
      <b-modal :title="description" id="modal-lg" size="lg" centered>
        <GmapMap
          class="map"
          :center="{ lat: towTruck.lat, lng: towTruck.lng }"
          :zoom="13"
        >
          <gmap-marker :position="userLocation"></gmap-marker>

          <gmap-marker
            :position="towTruck"
            :icon="{
              url: '/TowTruck-icon.png',
            }"
          ></gmap-marker>
        </GmapMap>
      </b-modal>
    </div>
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
      showMap: false,
      distance: "",
      duration: "",

      description: "",
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
      this.towTruckPosition = 0;
      this.showMap = true;

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
      this.description = "Çekici bekleniyor...";
      window.setTimeout(() => {
        this.description = `Çekiciniz yola çıktı.. Tahmini varış süresi: ${_self.duration} - Tahmini mesafe: ${_self.distance}`;
      }, 5000);
      window.setTimeout(async () => {
        _self.towTruck = { lat: 41.028941, lng: 29.0390162 };
        await this.getRouteData();
        _self.interval = window.setInterval(function() {
          console.log("interval");
          _self.changeDestination();
        }, 3000);
      });
    },
    async getRouteData() {
      try {
        this.towTruckPosition = 1;
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
        this.getRouteData();
      }
    },

    changeDestination() {
      if (!this.routeData) return;
      console.log(this.routeData);
      let steps = this.routeData.legs[0].steps;
      this.towTruck.lat = steps[this.step].end_location.lat;
      this.towTruck.lng = steps[this.step].end_location.lng;
      this.distance = this.routeData.legs[0].distance.text;
      this.duration = this.routeData.legs[0].duration.text;
      if (steps.length > this.step + 1) this.step++;
      else {
        window.clearInterval(this.interval);
        this.description = " Çekiciniz konumunuza ulaştı..";
      }
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
