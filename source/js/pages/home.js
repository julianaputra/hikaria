import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Fancybox } from "@fancyapps/ui";
import Collapse from 'bootstrap/js/dist/collapse';
import L from 'leaflet';
// import '../../../node_modules/leaflet/dist/leaflet';
import AOS from 'aos';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

var swiperShow = new Swiper(".the-show__swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    loop: true, 
    navigation: {
        nextEl: ".the-show__next",
        prevEl: ".the-show__prev"
    },
});

Fancybox.bind('[data-fancybox="gallery-item"]', {
  // Your custom options for a specific gallery
});

// aos
AOS.init({
  once: true,
});


// // maps
document.addEventListener('DOMContentLoaded', function () {
  const imageWidth = 1408;
  const imageHeight = 768;
  const bounds = [[0, 0], [imageHeight, imageWidth]];

  const map = L.map('customMap', {
    crs: L.CRS.Simple,
    zoomSnap: 0.01,
    zoomDelta: 0.25,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
  });

  // Tambahkan gambar
  L.imageOverlay('/wp-content/themes/tmdrxhikaria/assets/images/maps/maps.png', bounds).addTo(map);

  // Ukuran container
  const container = document.getElementById('customMap');
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Rasio
  const imageRatio = imageWidth / imageHeight;
  const containerRatio = containerWidth / containerHeight;

  // Hitung zoom supaya object-fit: cover
  let coverZoom;
  if (containerRatio > imageRatio) {
    coverZoom = Math.log2(containerWidth / imageWidth);
  } else {
    coverZoom = Math.log2(containerHeight / imageHeight);
  }

  // Zoom lebih dekat sedikit supaya benar-benar meng-cover
  const zoomIn = Math.log2(1.02); // 2% zoom-in (bisa lebih kalau masih ada space)
  const targetZoom = coverZoom + zoomIn;

  // Terapkan zoom
  map.setMinZoom(targetZoom);
  map.setMaxZoom(targetZoom + 1.5); // boleh zoom in
  map.setZoom(targetZoom);
  map.setView([imageHeight / 2, imageWidth / 2], targetZoom); // ke tengah

  // Optional: agar responsif
  window.addEventListener('resize', () => {
    map.invalidateSize();
  });

  mapPins.forEach((pin) => {
    const isEntrance = pin.id === 'entrance';
    const iconPath = `/wp-content/themes/tmdrxhikaria/assets/images/maps/${pin.id}.svg`;

    const customIcon = L.icon({
      iconUrl: iconPath,
      iconSize: isEntrance ? [80, 40] : [35, 35],
      iconAnchor: [16, 16],
    });

    const popupContent = `
      <div class="custom-popup">
        <img src="${pin.image}" alt="${pin.title}" style="width: 100%; border-radius: 8px;">
        <h4 style="margin: 10px 0 5px">${pin.title}</h4>
        <p style="margin: 0">${pin.description}</p>
      </div>
    `;

    L.marker([pin.coordinates.y, pin.coordinates.x], { icon: customIcon })
      .addTo(map)
      .on('click', () => {
        const sidebar = document.getElementById('mapSidebar');
        sidebar.innerHTML = `
          <button id="mapSidebarCloseBtn" class="maps__close">×</button>
          <img src="${pin.image}" alt="${pin.title}" class="maps__image">
          <div class="maps__text">
            <h4 class="maps__title">${pin.title}</h4>
            <div class="maps__desc">${pin.description}</div>
          </div>
        `;
        sidebar.style.display = 'block';
        document.getElementById('mapSidebarCloseBtn').addEventListener('click', () => {
          sidebar.style.display = 'none';
        });
      });

      map.on('click', () => {
        const sidebar = document.getElementById('mapSidebar');
        sidebar.style.display = 'none';
      });
  });

  // Register the plugin
  gsap.registerPlugin(ScrollTrigger);

  // Parallax background movement
  let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

  gsap.utils.toArray(".gsap-holder").forEach((box, i) => {
    let bg = box.querySelector('.gsap-parallax');
    
    gsap.fromTo(bg, {
      backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(box)}px` : "50% 0px"
    }, {
      backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(box))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: box,
        start: () => i ? "top bottom" : "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });
});