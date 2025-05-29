const flowers = [
  {
      name: "Rose",
      scientific_name: "Rosa Rubiginosa",
      family: "Rosaceae/ Rose Family",
      colors: "Red, Pink, White, Orange, Yellow, Blue, & Black",
      floriography: "Love, Passion, & Beauty",
      bloom_season: "Late Spring/ Early Summer",
      life_cycle: "Perennial",
      image_url: "https://www.blumenshop.com/media/catalog/product/cache/00fc3324f82f0edd130c68e9a6e51d4c/r/o/rose-stueckzahl.jpg"
  },
  {
      name: "Tulip",
      scientific_name: "Tulipa Gesneriana",
      family: "Liliaceae/ Lily Family",
      colors: "Orange, Pink, Purple, White, Red, & Yellow",
      floriography: "Perfection, Harmony, & Deep Love",
      bloom_season: "Spring",
      life_cycle: "Perennial",
      image_url: "https://www.edenbrothers.com/cdn/shop/files/tulip-red-impression-flo-1.jpg?v=1730920863&width=675"
  },
  {
      name: "Sunflower",
      scientific_name: "Helianthus Annuus",
      family: "Asteraceae/ Daisy Family",
      colors: "Yellow, Orange, Red, & Brown,",
      floriography: "Loyalty, Adoration, Happiness, & Positivity",
      bloom_season: "Summer",
      life_cycle: "Annual",
      image_url: "https://www.gardendesign.com/pictures/images/675x529Max/site_3/ring-of-fire-sunflower-bicolor-sunflower-all-america-selections_12080.jpg"
  },
  {
      name: "Lily",
      scientific_name: "Lilium",
      family: "Liliaceae/ Lily Family",
      colors: "Orange, Pink, Red, Yellow, & Purple",
      floriography: "Purity, Innocence, & Fertility",
      bloom_season: "Early Summer",
      life_cycle: "Perennial",
      image_url: "https://safnow.org/aboutflowers/wp-content/uploads/sites/7/2017/01/AboutFlowers_Lily_Paradero-19.jpg"
  },
  {
      name: "Iris",
      scientific_name: "Iridaceae",
      family: "Iridaceae/ Iris Family",
      colors: "Purple, White, Blue, Lilac, Yellow, Orange, & Red",
      floriography: "Faith, Courage, Valor, Hope & Wisdom",
      bloom_season: "Late Spring",
      life_cycle: "Perennial",
      image_url: "https://cdn.shopify.com/s/files/1/0065/4999/5573/files/bahen_organic_milk_3_1024x1024.jpg?v=1666934011"
  },
  {
      name: "Orchids",
      scientific_name: "Orchidaceae",
      family: "Orchidaceae",
      colors: "White, Pink, & Purple",
      floriography: "Love, Beauty, Fertility, & Unity",
      bloom_season: "Winter/ Spring/ Fall",
      life_cycle: "Perennial",
      image_url: "https://hips.hearstapps.com/hmg-prod/images/blooming-phalaenopsis-orchids-white-purple-pink-royalty-free-image-1728585929.jpg?crop=0.668xw:1.00xh;0.0912xw,0&resize=1200:*"
  },
  {
      name: "Lavender",
      scientific_name: "Lavandula Angustifolia/ Lavandula Latifolia",
      family: "Lamiaceae/Mint Family",
      colors: "White, Pink, Blue, & Purple",
      floriography: "Purity, Devotion, Serenity, & Calmness",
      bloom_season: "Early Spring/ Summer",
      life_cycle: "Perennial",
      image_url: "https://cloversgarden.com/cdn/shop/products/CGHidcoteLavenderPrimary_1000x1000.jpg?v=1679602241"
  },
  {
      name: "Marigold",
      scientific_name: "Tagetes Erecta Linn",
      family: "Asteraceae/ Daisy Family",
      colors: "Yellow, Orange, Red, & White",
      floriography: "Purity, Divinity, Joy, Resilience & Passion",
      bloom_season: "Late Spring",
      life_cycle: "Annual",
      image_url: "https://www.applewoodseed.com/wp-content/uploads/2016/11/TECJ-1101.jpg"
  },
  {
      name: "Peony",
      scientific_name: "Paeonia Lactiflora",
      family: "Paeoniaceae/ Peony Family",
      colors: "White, Pink, Purple, Red, Coral, & Yellow",
      floriography: "Happiness, Romance, Good Luck, Prosperity, & Honor",
      bloom_season: "Late Spring",
      life_cycle: "Perennial",
      image_url: "https://media.houseandgarden.co.uk/photos/66165dbebb238cb032f6af1e/1:1/w_4016,h_4016,c_limit/976728714"
  },
  {
      name: "Daisy",
      scientific_name: "Bellis Perennis",
      family: "Asteraceae/ Daisy Family",
      colors: "White, Yellow, Orange, Red & Pink",
      floriography: "Purity, Innocence, & New Beginnings",
      bloom_season: "Early Summer",
      life_cycle: "Perennial",
      image_url: "https://terrepromise.ca/web/image/product.template/634/image_1024?unique=b813189"
  },
  {
      name: "Foxglove",
      scientific_name: "Digitalis Purpurea",
      family: "Plantaginaceae/ Plantain Family",
      colors: "Purple, White, Pink, Red & Yellow",
      floriography: "Insincerity & Immortality",
      bloom_season: "Summer",
      life_cycle: "Biennial",
      image_url: "https://www.thompson-morgan.com/product_images/100/optimised/DIG4471-A_h.jpg"
  },
  {
      name: "Daffodil",
      scientific_name: "Narcissus",
      family: "Amaryllidaceae/ Amaryllis Family",
      colors: "Yellow, White, & Orange",
      floriography: "Resilience, Hope, & Rebirth",
      bloom_season: "Spring",
      life_cycle: "Perennial",
      image_url: "https://www.bhg.com/thmb/udnpGWz7gNWQwBIZQPZcIl93EaQ=/2081x0/filters:no_upscale():strip_icc()/Quail-daffodil-CTG505459_08k6rnoXaty9cr3O7247MM-53ba7eaf666945509451045c4139ca0f.jpg"
  },
  {
      name: "Hyacinth",
      scientific_name: "Hyacinthus Orientalis",
      family: "Asparagaceae/ Asparagus Family",
      colors: "Blue, White, Pink, Yellow, & Purple",
      floriography: "Joy, Sincerity, Forgiveness & Jealousy",
      bloom_season: "Spring",
      life_cycle: "Perennial",
      image_url: "https://westmountflorist.com/cdn/shop/articles/wf-flower-reference-guide-hyacinth.jpg?v=1725909327&width=2048"
  },
  {
      name: "Chrysanthemum",
      scientific_name: "Chrysanthemum Indicum",
      family: "Asteraceae/ Daisy Family",
      colors: "Yellow, Orange, Red, Pink, Purple, & White",
      floriography: "Longevity, Friendship, & Happiness",
      bloom_season: "Fall",
      life_cycle: "Perennial",
      image_url: "https://www.amarantelondon.com/cdn/shop/articles/Chrysanthemum_morifolium_08NOV.jpg?v=1664298009"
  },
  {
      name: "Poppy",
      scientific_name: "Papaver Somniferum L.",
      family: "Papaveraceae/ Poppy Family",
      colors: "Pink, White, Yellow, Vivid Red, & Blue",
      floriography: "Success, Good Fortune, Remembrance & Sacrifice",
      bloom_season: "Late Spring",
      life_cycle: "Perennial",
      image_url: "https://meadowmania.co.uk/cdn/shop/files/Untitleddesign_22_f1b141f5-a2ae-4074-a474-3ac0cfdf53c2.jpg?v=1702401278&width=1000"
  },
  {
      name: "Bluebell",
      scientific_name: "Hyacinthoides non-scripta",
      family: "Asparagaceae/ Asparagus Family",
      colors: "Deep Violet & Blue",
      floriography: "Gratitude, Humility, & Everlasting Love",
      bloom_season: "Spring",
      life_cycle: "Perennial",
      image_url: "https://m.media-amazon.com/images/I/6152hMozAVL._AC_UF1000,1000_QL80_.jpg"
  },
  {
      name: "Camellia",
      scientific_name: "Camellia Japonica",
      family: "Theaceae",
      colors: "Red, Pink, & White",
      floriography: "Admiration, Affection, & Beauty",
      bloom_season: "Late Fall",
      life_cycle: "Perennial",
      image_url: "https://i0.wp.com/plantzone.in/wp-content/uploads/2024/05/12-1.jpg"
  },
  {
      name: "Dahlia",
      scientific_name: "Dahlia Pinnata",
      family: "Asteraceae/ Daisy Family",
      colors: "Red, Pink, Yellow, White, & Purple",
      floriography: "Elegance, Creativity, Growth, & Strong Bond",
      bloom_season: "Summer",
      life_cycle: "Perennial",
      image_url: "https://www.fluwel.com/cdn/shop/files/DahliaLoe_sc_1800x.jpg?v=1730383365"
  },
  {
      name: "Snapdragon",
      scientific_name: "Antirrhinum Majus",
      family: "Plantaginaceae/ Plantain Family",
      colors: "Pink, Yellow, Red, White, Orange, & Purple",
      floriography: "Grace & Strength",
      bloom_season: "Spring/ Summer/ Fall",
      life_cycle: "Annual & Perennial",
      image_url: "https://www.adaptiveseeds.com/wp-content/uploads/2019/12/snapdragon-orange-wonder-3-1.jpg"
  },
  {
      name: "Jasmine",
      scientific_name: "Jasminun Officinale",
      family: "Oleaceae/ Olive Family",
      colors: "Pink, Yellow, White, & Purple",
      floriography: "Purity, Sensuality, & Platonic Affection",
      bloom_season: "Spring",
      life_cycle: "Perennial",
      image_url: "https://cdn.shopify.com/s/files/1/0641/1596/6124/files/164.png?v=1714030347"
  },
  {
      name: "Azalea",
      scientific_name: "Rhododendron",
      family: "Ericaceae/ Heather Family",
      colors: "Pink, Red, Orange, White, & Yellow",
      floriography: "Femininity, Passion, & Happiness",
      bloom_season: "Early Spring",
      life_cycle: "Perennial",
      image_url: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1737583732367-43UJUNS933VYIA02KL3N/Azalea+pink+flower.jpg"
  },
  {
      name: "Anemone",
      scientific_name: "Anemone Coronaria",
      family: "Ranunculaceae/ Buttercup Family",
      colors: "White, Pink, Red, Blue, & Purple",
      floriography: "Sincerity, Fragility, Protection, & Forsaken Love",
      bloom_season: "Spring",
      life_cycle: "Perennial",
      image_url: "https://library.floretflowers.com/cdn/shop/products/Anemone_Jerusalem_Red_White_-2_62d6960f-f068-4088-a47c-cf33acdb3aee_768x.jpg?v=1674852955"
  },
  {
      name: "Aster",
      scientific_name: "Aster Amellus",
      family: "Asteraceae/ Daisy Family",
      colors: "Purple, Pink, White, Blue, & Red",
      floriography: "Wisdom, Faith, & Valor",
      bloom_season: "Early Fall",
      life_cycle: "Perennial",
      image_url: "https://cdn.shopify.com/s/files/1/0620/2749/7724/files/aster-new-england-shk-3.jpg?v=1725469244"
  },
  {
      name: "Primrose",
      scientific_name: "Primula Vulgaris",
      family: "Primulaceae/ Primrose Family",
      colors: "White, Orange, Pink, Purple, Red, & Yellow",
      floriography: "Passion, Longing, Innocence, & Youth",
      bloom_season: "Spring",
      life_cycle: "Perennial",
      image_url: "https://seedball.co.uk/wp-content/uploads/2022/05/seedball_primrose0.jpeg"
  },
  {
      name: "Lotus",
      scientific_name: "Nelumbo Nucifera",
      family: "Nelumbonaceae/ Aquatic Family",
      colors: "Pink, White, & Yellow",
      floriography: "Purity, Resilience, Divinity, & Rebirth",
      bloom_season: "Late Spring",
      life_cycle: "Perennial",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg"
  },
  {
      name: "Hydrangea",
      scientific_name: "Hydrangea Macrophylla",
      family: "Hydrangeaceae/ Hydrangea Family",
      colors: "Blue, Pink, & White",
      floriography: "Abundance, Gratitude, & Boastfulness",
      bloom_season: "Spring",
      life_cycle: "Perennial",
      image_url: "https://images.squarespace-cdn.com/content/v1/62e96de6aa9dd5568b932dc8/72d0098a-4484-4824-8948-da3028f7f099/Yard+-+Hydrangea+Macrophylla+PIIHM-II+Bloomstruck.jpg"
  },
  {
      name: "Carnation",
      scientific_name: "Dianthus Caryophyllus",
      family: "Caryophyllaceae/ Carnation Family",
      colors: "Pink, Purple, Yellow, Red, White, & Orange",
      floriography: "Fascination, Love, & Devotion",
      bloom_season: "Late Spring",
      life_cycle: "Perennial",
      image_url: "https://lh3.googleusercontent.com/proxy/Hz452dCzBLuoT_aNxIZmUKtXMuV_Lzj6eKn4UGqameEx9J23OdmifJDlPY0BzcmatxbasuBaeMK-XhVdwhkyJAI5Xb7GzJYtenilEnU4adt7"
  },
];

function searchFlowers() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  const filtered = flowers.filter(flower => {
      return Object.values(flower).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(query)
      );
  });

  if (filtered.length === 0) {
      resultsContainer.innerHTML = `<p>No flowers matching "${query}".</p>`;
  } else {
      filtered.forEach(flower => {
          resultsContainer.innerHTML += `
              <div class="result-item">
                  <img src="${flower.image_url}" alt="${flower.name}">
                  <h3 class="gradientText">${flower.name}</h3>
                  <h3>Scientific Name</h3>
                  <p>${flower.scientific_name}</p>
                  <h3>Family Name</h3>
                  <p>${flower.family}</p>
                  <h3>Colors</h3>
                  <p>${flower.colors}</p>
                  <h3>Floriography</h3>
                  <p>${flower.floriography}</p>
                  <h3>Bloom Season</h3>
                  <p>${flower.bloom_season}</p>
                  <h3>Life Cycle</h3>
                  <p>${flower.life_cycle}</p>
              </div>
          `;
      });
  }
}
window.onload = () => {
  searchFlowers();
};

function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('show');
}

const text = "FLOURISH";
const splitTextElement = document.querySelector('.split-text');

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span');
  span.textContent = text[i];
  splitTextElement.appendChild(span);
}

const detailsElement = document.getElementById('collapse');
const contentElement = detailsElement.querySelector('.collapsible-content');

detailsElement.addEventListener('toggle', function() {
    if (detailsElement.open) {
        contentElement.classList.add('show');
    } else {
        contentElement.classList.remove('show');
    }
});

document.querySelector(".collapsible-text").addEventListener("click", function() {
    var content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
});