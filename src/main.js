import Vue from "vue";
import App from "./App.vue";
import Loading from "./views/Loading.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

const isPc = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

if (!isPc()) {
  location.href = "/blog/";
}

new Vue({
  router,
  render: h => h(isPc() ? App : Loading)
}).$mount("#app");
