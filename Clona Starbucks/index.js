const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

// toggle('is-active') și toggle('active') sunt metode care verifică dacă elementele au deja clasele respective. Dacă le au, le vor elimina; dacă nu le au, le vor adăuga, astfel activând/dezactivând meniul mobil și legăturile din meniul de navigație.
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Funcția pentru inițializarea hărții
function initMap() {
  // Setează locația pentru harta (de exemplu, București, România)
  const bucharest = { lat: 45.71, lng: 25.3441 };

  // Creează harta
  const map = new google.maps.Map(document.querySelector("#map"), {
    center: bucharest,
    zoom: 6, // Nivelul de zoom
  });

  // Adaugă un marker pe hartă
  const marker = new google.maps.Marker({
    position: bucharest,
    map: map,
    title: "White Cloud Café",
  });
}
