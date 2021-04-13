// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import 'jquery-bar-rating/dist/themes/css-stars';
import "channels"
import 'bootstrap';
import { initSelect2 } from './plugins/init_select2';
import { initStarRating } from './plugins/init_star_rating';
import { initTyped } from './plugins/init_typedjs';
import AOS from 'aos';
import 'aos/dist/aos.css';

Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  // [...]
  initSelect2();
  initStarRating();
  initTyped();
  AOS.init();
});
