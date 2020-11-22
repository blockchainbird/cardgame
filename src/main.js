import Vue from 'vue';
import VueConfig from "../vue.config";
import App from './App.vue';
import router from './router/router';
import VueGtag from 'vue-gtag';
// import VueAnalytics from 'vue-ua';
import store from './store/store';
import * as d3 from 'd3-dsv';
import {
  Howl,
  Howler
} from 'howler';
import _ from 'lodash';
// import interact from 'interactjs';
// import './assets/js/menu_sideslide';
// import bootstrap from 'bootstrap';

//https://github.com/rakk7/vue-bootstrap-toasts
import VueBootstrapToasts from 'vue-bootstrap-toasts';
import linkify from 'vue-linkify';
// import animated from 'animate.css';

Vue.use(d3);
Vue.config.productionTip = false;
Vue.use(VueBootstrapToasts);
Vue.use(Howl, Howler);
Vue.directive('linkified', linkify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
    params: {
      send_page_view: true
    }
  },
  bootstrap: true,
  pageTrackerTemplate(to) {
    console.log('to: ', to);
    return {
      page_title: to.path,
      page_path: to.path
    };
  }
}, router);


// https://www.digitalocean.com/community/tutorials/vuejs-google-analytics
// https://github.com/ScreamZ/vue-analytics
// Vue.use(VueAnalytics, {
//   // [Required] The name of your app as specified in Google Analytics.
//   appName: 'Card game',
//   // [Required] The version of your app.
//   appVersion: '0',
//   // [Required] Your Google Analytics tracking ID.
//   trackingId: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
//   // If you're using vue-router, pass the router instance here.
//   vueRouter: router,
//   trackPage: true
// });


// set which game
document.querySelector('body').classList.add(process.env.VUE_APP_ID);
store.commit('setGameId', process.env.VUE_APP_ID);
store.commit('setGameTitle', process.env.VUE_APP_TITLE);
store.commit('setGameTitle2', process.env.VUE_APP_TITLE_2);
store.commit('setGameSubTitle', process.env.VUE_APP_SUBTITLE);
store.commit('setCardImage', process.env.VUE_APP_IMAGE);


// redirects
if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Architecture&q=preview-7-transactions-per-second&title=Bitcoin%20has%20only%20seven%20transactions%20per%20second') {
  window.location.replace('https://blockchainbird.com/t/btc/card/7-transactions-per-second');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Beliefs&q=preview-convince-me&title=You%20cannot%20convince%20me%20of%20the%20usefulness%20of%20bitcoin') {
  window.location.replace('https://blockchainbird.com/t/btc/card/convince-me');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Beliefs&q=preview-too-late&title=I%E2%80%98ve%20already%20missed%20out%20on%20bitcoin') {
  window.location.replace('https://blockchainbird.com/t/btc/card/too-late');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Control&q=preview-chinese-government&title=Bitcoin%20is%20controlled%20by%20the%20Chinese%20government') {
  window.location.replace('https://blockchainbird.com/t/btc/card/chinese-government');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Control&q=preview-few-deciders&title=Only%20a%20few%20people%20have%20ultimate%20control%20over%20Bitcoin') {
  window.location.replace('https://blockchainbird.com/t/btc/card/few-deciders');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Control&q=preview-quantum-computing&title=Quantum%20computers%20will%20breach%20the%20security%20of%20crypto-currencies') {
  window.location.replace('https://blockchainbird.com/t/btc/card/quantum-computing');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Crime&q=preview-anonymous&title=Bitcoin%20is%20anonymous') {
  window.location.replace('https://blockchainbird.com/t/btc/card/anonymous');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Crime&q=preview-anonymous&title=Bitcoin%20is%20anonymous%2C%20criminals%20go%20unpunished') {
  window.location.replace('https://blockchainbird.com/t/btc/card/anonymous');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Crime&q=preview-anonymous&title=Bitcoin%20is%20anonymous,%20criminals%20go%20unpunished') {
  window.location.replace('https://blockchainbird.com/t/btc/card/anonymous');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Crime&q=preview-criminals&title=Bitcoin%20is%20mostly%20for%20criminals') {
  window.location.replace('https://blockchainbird.com/t/btc/card/criminals');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Crime&q=preview-money-laundering&title=Bitcoin%20is%20one%20big%20money%20laundering%20machine') {
  window.location.replace('https://blockchainbird.com/t/btc/card/money-laundering');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Crime&q=preview-tax-evaders&title=Bitcoin%20is%20for%20tax%20evaders') {
  window.location.replace('https://blockchainbird.com/t/btc/card/tax-evaders');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Environment&q=preview-complex-useless-calcs&title=Complex%2C%20useless%20calculations%20soak%20up%20energy') {
  window.location.replace('https://blockchainbird.com/t/btc/card/complex-useless-calcs');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Environment&q=preview-energy-for-elsewhere&title=Sustainable%20energy%20should%20be%20used%20elsewhere') {
  window.location.replace('https://blockchainbird.com/t/btc/card/energy-for-elsewhere');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Environment&q=preview-transaction-electricity&title=Per%20transaction%2C%20bitcoin%20costs%20XX%20MegaWatts%2C%20YY%20euros') {
  window.location.replace('https://blockchainbird.com/t/btc/card/transaction-electricity');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Environment&q=preview-unsustainable&title=Bitcoin%20is%20unsustainable%20and%20killing%20the%20earth') {
  window.location.replace('https://blockchainbird.com/t/btc/card/unsustainable');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Existential&q=preview-intrinsic-value&title=Bitcoin%20has%20no%20intrinsic%20value') {
  window.location.replace('https://blockchainbird.com/t/btc/card/intrinsic-value');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Existential&q=preview-not-first-crypto&title=Bitcoin%20was%20not%20the%20first%20cryptocurrency') {
  window.location.replace('https://blockchainbird.com/t/btc/card/not-first-crypto');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Existential&q=preview-ponzi&title=Bitcoin%20is%20a%20Ponzi%20scheme,%20a%20new%20tulip%20mania') {
  window.location.replace('https://blockchainbird.com/t/btc/card/ponzi');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Existential&q=preview-ponzi&title=Bitcoin%20is%20a%20Ponzi%20scheme%2C%20a%20new%20tulip%20mania') {
  window.location.replace('https://blockchainbird.com/t/btc/card/ponzi');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Existential&q=preview-will-die&title=Bitcoin%20will%20die') {
  window.location.replace('https://blockchainbird.com/t/btc/card/will-die');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Legal&q=preview-legal-tender&title=Bitcoin%20is%20not%20legal%20tender') {
  window.location.replace('https://blockchainbird.com/t/btc/card/legal-tender');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Legal&q=preview-shut-down&title=Governments%20will%20shut%20bitcoin%20down') {
  window.location.replace('https://blockchainbird.com/t/btc/card/shut-down');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Price&q=preview-cant-buy-1&title=I%20can') {
  window.location.replace('https://blockchainbird.com/t/btc/card/cant-buy-anything');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Price&q=preview-price-criminals&title=A%20high%20bitcoin%20price%20is%20due%20to%20criminals%E2%80%98%20involvement') {
  window.location.replace('https://blockchainbird.com/t/btc/card/price-criminals');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Price&q=preview-price-criminals&title=High%20bitcoin%20price%20is%20due%20to%20criminals') {
  window.location.replace('https://blockchainbird.com/t/btc/card/price-criminals');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Price&q=preview-price-down&title=The%20bitcoin%20price%20went%20down%20lately') {
  window.location.replace('https://blockchainbird.com/t/btc/card/price-down');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Skills&q=preview-its-over-after-21&title=After%20the%2021%20milion%20bitcoin%20are%20mined%2C%20it%E2%80%98s%20over') {
  window.location.replace('https://blockchainbird.com/t/btc/card/its-over-after-21');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Supply&q=preview-inflation&title=Bitcoin%20has%20strong%20inflation') {
  window.location.replace('https://blockchainbird.com/t/btc/card/inflation');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Supply&q=preview-volatile&title=Bitcoin%20is%20volatile') {
  window.location.replace('https://blockchainbird.com/t/btc/card/volatile');
} else if (window.location.href === 'https://blockchainbird.com/t/btc/?cat=Use&q=preview-slow&title=Bitcoin%20is%20slow') {
  window.location.replace('https://blockchainbird.com/t/btc/card/slow');
} else if (window.location.href === 'https://www.blockchainbird.com/t/btc/?cat=Beliefs&q=preview-too-late&title=I%E2%80%98ve%20already%20missed%20out%20on%20bitcoin') {
  window.location.replace('https://blockchainbird.com/t/btc/card/too-late');
} else if (window.location.href === 'https://www.blockchainbird.com/t/btc/?cat=Environment&q=preview-proof-of-stake&title=Proof-of-stake%20coins%20are%20far%20more%20sustainable%20than%20mining%20bitcoin') {
  window.location.replace('https://blockchainbird.com/t/btc/card/proof-of-stake');
}

// copy URL into clipboard via click on button
// Note: here it is not: "this.$store.commit" but "store.commit" (https://stackoverflow.com/q/51348936)
new ClipboardJS('.copyURLtoClipboard1', {
  text: function () {
    store.commit('showToast', 'You can now paste the link on Twitter, Facebook etc.');
    if (localStorage.getItem('soundOn') === 'true') go.play();
    document.querySelector('body').classList.add('person1');
    setTimeout(function () {
      document.querySelector('body').classList.remove('person1');
    }, 1500);
    // return "“" + store.state.currentCard["Prejudice"] + "”\n" + store.state.currentCard["short direct answer"] + " 👉 " + window.location.href;
    return "“" + store.state.currentCard["Prejudice"] + "”\n" + " 👉 " + window.location.href;
  }
});
new ClipboardJS('.copyURLtoClipboard2', {
  text: function () {
    store.commit('showToast', 'You can now paste the link on Twitter, Facebook etc.');
    if (localStorage.getItem('soundOn') === 'true') go.play();
    document.querySelector('body').classList.add('person1');
    setTimeout(function () {
      document.querySelector('body').classList.remove('person1');
    }, 1500);
    // return "“" + store.state.currentCard["Prejudice"] + "”\n" + store.state.currentCard["short direct answer"] + " 👉 " + window.location.href;
    return "“" + store.state.currentCard["Prejudice"] + "”\n" + " 👉 " + window.location.href;
  }
});
new ClipboardJS('.copyURLtoClipboard3', {
  text: function () {
    store.commit("showToast", "You can now paste the link on Twitter, Facebook etc.");
    if (localStorage.getItem("soundOn") === "true") go.play();
    document.querySelector("body").classList.add("person1");
    setTimeout(function () {
      document.querySelector("body").classList.remove("person1");
    }, 1500);
    // return "“" + store.state.currentCard["Prejudice"] + "”\n" + store.state.currentCard["short direct answer"] + " 👉 " + window.location.href;
    return "“" + store.state.currentCard["Prejudice"] + "”\n" + " 👉 " + window.location.href;
  }
});

var clipboardOverviewScreen = new ClipboardJS('.copyURLtoClipboard4', {
  text: function (trigger) {
    return "“" + trigger.dataset.prejudice + "”\n" + " 👉 " + trigger.baseURI + "card/" + trigger.dataset.url;
  }
});

clipboardOverviewScreen.on('success', function (e) {
  store.commit("showToast", "You can now paste the link on Twitter, Facebook etc.");
  if (localStorage.getItem("soundOn") === "true") go.play();
  document.querySelector("body").classList.add("person1");
  setTimeout(function () {
    document.querySelector("body").classList.remove("person1");
  }, 1500);
});


var clipboardCategory = new ClipboardJS('.copyURLtoClipboard5', {
  text: function (trigger) {
    return window.location.href;
  }
});

clipboardCategory.on('success', function (e) {
  store.commit("showToast", "You can now paste the link on Twitter, Facebook etc.");
  if (localStorage.getItem("soundOn") === "true") go.play();
  document.querySelector("body").classList.add("person1");
  setTimeout(function () {
    document.querySelector("body").classList.remove("person1");
  }, 1500);
});

// copies all URLs of bookmarked tweets to clipboard
var clipboardBookmarkedURLs = new ClipboardJS('.copyBookmarkedURLsToClipboard', {
  text: function (trigger) {
    var urls = [];
    var anchors = document.querySelectorAll('.tweets-selected .tweets .tweet .go-to-tweet');
    var regex = /,/gi;
    anchors.forEach(function (a) {
      urls.push(a.getAttribute('href'));
    });
    urls = urls.toString();
    urls = urls.replace(regex, '\n');
    return urls;
  }
});

clipboardBookmarkedURLs.on('success', function (e) {
  store.commit("showToast", "You can now paste the bookmarked links in an e-mail etc");
  if (localStorage.getItem("soundOn") === "true") go.play();
  document.querySelector("body").classList.add("person1");
  setTimeout(function () {
    document.querySelector("body").classList.remove("person1");
  }, 1500);
});

// copies all URLs of bookmarked tweets to email
var clipboardBookmarkedURLsToEmail = new ClipboardJS('.copyBookmarkedURLsToEmail', {
  text: function (trigger) {
    var urls = [];
    var anchors = document.querySelectorAll('.tweets-selected .tweets .tweet .go-to-tweet');
    var regex = /,/gi;
    anchors.forEach(function (a) {
      urls.push(a.getAttribute('href'));
    });
    urls = urls.toString();
    urls = urls.replace(regex, '\r\n\r\n');
    // https://stackoverflow.com/a/10220953
    urls = encodeURIComponent(urls);
    window.open('mailto:test@example.com?subject=subject&body=' + urls);
    return urls;

  }
});

clipboardBookmarkedURLsToEmail.on('success', function (e) {
  store.commit("showToast", "You can now paste the bookmarked links in an e-mail etc");
  if (localStorage.getItem("soundOn") === "true") go.play();
  document.querySelector("body").classList.add("person1");
  setTimeout(function () {
    document.querySelector("body").classList.remove("person1");
  }, 1500);
});



var clipboardSearchResults = new ClipboardJS('.copyURLtoClipboard6', {
  text: function (trigger) {
    // console.log('VueConfig.publicPath: ', VueConfig.publicPath);
    return window.location.protocol + "//" + window.location.hostname + VueConfig.publicPath + trigger.dataset.url;
  }
});

clipboardSearchResults.on('success', function (e) {
  store.commit("showToast", "You can now paste the link on Twitter, Facebook etc.");
  if (localStorage.getItem("soundOn") === "true") go.play();
  document.querySelector("body").classList.add("person1");
  setTimeout(function () {
    document.querySelector("body").classList.remove("person1");
  }, 1500);
});