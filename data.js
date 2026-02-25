/**
 * Diaspora Historical Data
 * Categorized by Pillar: Dance, Food, Games, Religion, Events
 */
// --- DATASET: The GeoJSON-inspired database of historical connections ---
const diasporaData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "connection_001",
      properties: {
        pillar: "Dance",
        title: "The Ring Shout",
        origin: { region: "Sierra Leone", coords: [8.4667, -11.8333] },
        destination: {
          region: "South Carolina, USA",
          coords: [33.8361, -81.1637],
        },
        storyboard: [
          {
            era: "Ancestral Roots",
            content:
              "Sacred circle dances performed in West Africa for community healing and spiritual connection.",
          },
          {
            era: "Resistance",
            content:
              "Enslaved Africans preserved rhythmic patterns even when drums were banned, turning their bodies into instruments.",
          },
          {
            era: "Legacy",
            content:
              "The Ring Shout continues in Gullah Geechee communities, a powerful testament to spiritual resilience.",
          },
        ],
        color: "#FF5E00",
      },
    },
    {
      type: "Feature",
      id: "connection_002",
      properties: {
        pillar: "Food",
        title: "The Alchemy of Gumbo",
        origin: { region: "Senegal", coords: [14.4974, -14.4524] },
        destination: {
          region: "Louisiana, USA",
          coords: [31.1695, -91.8678],
        },
        storyboard: [
          {
            era: "Linguistic Seed",
            content:
              "The name survives from the Wolof word 'ki ngombo' for okra.",
          },
          {
            era: "Cultural Fusion",
            content:
              "In the bayous of Louisiana, African ingenuity blended with French and Indigenous techniques.",
          },
        ],
        color: "#FFD700",
      },
    },
    {
      type: "Feature",
      id: "connection_003",
      properties: {
        pillar: "Religion",
        title: "Candomblé & The Orishas",
        origin: { region: "Nigeria", coords: [6.5244, 3.3792] },
        destination: {
          region: "Bahia, Brazil",
          coords: [-12.9714, -38.5016],
        },
        storyboard: [
          {
            era: "The Divine Shield",
            content:
              "Yoruba traditions were preserved through careful syncretism, masking Orishas behind Saints.",
          },
        ],
        color: "#00A3FF",
      },
    },
    {
      type: "Feature",
      id: "connection_004",
      properties: {
        pillar: "Games",
        title: "Oware / Mancala",
        origin: { region: "Ghana", coords: [5.6037, -0.187] },
        destination: { region: "Barbados", coords: [13.1939, -59.5432] },
        storyboard: [
          {
            era: "Akan Strategy",
            content:
              "Oware is one of the world's oldest strategy games, played by the Akan people of Ghana.",
          },
          {
            era: "The Caribbean Warri",
            content:
              "Known as 'Warri' in Barbados, the game survived the Atlantic crossing, serving as a social bond.",
          },
        ],
        color: "#00FF88",
      },
    },
    {
      type: "Feature",
      id: "connection_005",
      properties: {
        pillar: "Dance",
        title: "Samba's Angolan Heart",
        origin: { region: "Angola", coords: [-8.839, 13.2894] },
        destination: {
          region: "Rio de Janeiro, Brazil",
          coords: [-22.9068, -43.1729],
        },
        storyboard: [
          {
            era: "Semba Origins",
            content:
              "Samba traces back to the Angolan 'Semba'—a dance of invitation and celebration.",
          },
          {
            era: "Urban Evolution",
            content:
              "In Brazil, it transformed into a symbol of national identity and resistance in the favelas.",
          },
        ],
        color: "#FF5E00",
      },
    },
    {
      type: "Feature",
      id: "connection_006",
      properties: {
        pillar: "Religion",
        title: "Santería (Lucumí)",
        origin: {
          region: "Nigeria (Yorubaland)",
          coords: [7.3775, 3.947],
        },
        destination: {
          region: "Havana, Cuba",
          coords: [23.1136, -82.3666],
        },
        storyboard: [
          {
            era: "Ifá Wisdom",
            content:
              "The complex divination systems of the Yoruba people arrived in Cuba via the Lukumi.",
          },
          {
            era: "Syncretism",
            content:
              "The faith evolved to protect sacred knowledge through the iconography of the Catholic Church.",
          },
        ],
        color: "#00A3FF",
      },
    },
    {
      type: "Feature",
      id: "connection_007",
      properties: {
        pillar: "Food",
        title: "The Rice Coast Legacy",
        origin: { region: "The Gambia", coords: [13.4432, -15.3101] },
        destination: {
          region: "Georgia, USA",
          coords: [32.1656, -82.9001],
        },
        storyboard: [
          {
            era: "Skilled Labor",
            content:
              "West Africans from the 'Rice Coast' were specifically targeted for their expert knowledge of irrigation.",
          },
          {
            era: "Hoppin' John",
            content:
              "Traditional Senegambian rice and pea dishes became staples like Hoppin' John in the Lowcountry.",
          },
        ],
        color: "#FFD700",
      },
    },
    {
      type: "Feature",
      id: "connection_008",
      properties: {
        pillar: "Dance",
        title: "Capoeira: Fight or Dance?",
        origin: { region: "Central Africa", coords: [-11.2027, 17.8739] },
        destination: {
          region: "Salvador, Brazil",
          coords: [-12.9714, -38.5016],
        },
        storyboard: [
          {
            era: "N'golo Ritual",
            content:
              "The 'zebra dance' of Southern Angola evolved into a martial art disguised as a dance.",
          },
          {
            era: "Clandestine Training",
            content:
              "Enslaved Africans used the rhythm of the Berimbau to hide their combat training from overseers.",
          },
        ],
        color: "#FF5E00",
      },
    },
    {
      type: "Feature",
      id: "connection_009",
      properties: {
        pillar: "Religion",
        title: "Haitian Vodou",
        origin: { region: "Benin (Dahomey)", coords: [6.3667, 2.4333] },
        destination: {
          region: "Port-au-Prince, Haiti",
          coords: [18.5392, -72.335],
        },
        storyboard: [
          {
            era: "The Fon Tradition",
            content:
              "Vodun, meaning 'spirit' in the Fon language, is the foundational spiritual core of Haiti.",
          },
          {
            era: "Revolutionary Spirit",
            content:
              "The Bois Caïman ceremony, a Vodou ritual, sparked the successful Haitian Revolution in 1791.",
          },
        ],
        color: "#00A3FF",
      },
    },
    {
      type: "Feature",
      id: "connection_010",
      properties: {
        pillar: "Events",
        title: "Canboulay & Carnival",
        origin: { region: "West Africa", coords: [9.082, 8.6753] },
        destination: {
          region: "Trinidad & Tobago",
          coords: [10.6549, -61.5019],
        },
        storyboard: [
          {
            era: "Masquerade",
            content:
              "West African masquerades provided the aesthetic foundation for Caribbean mas.",
          },
          {
            era: "Canboulay",
            content:
              "Derived from 'cannes brulées' (burnt cane), this festival celebrated the end of the harvest and emancipation.",
          },
        ],
        color: "#A855F7",
      },
    },
    {
      type: "Feature",
      id: "connection_011",
      properties: {
        pillar: "Events",
        title: "The Banjo's Ancestry",
        origin: { region: "Senegambia", coords: [12.2383, -15.5518] },
        destination: {
          region: "Virginia, USA",
          coords: [37.7693, -78.17],
        },
        storyboard: [
          {
            era: "The Akonting",
            content:
              "The Jola people play the Akonting, a three-stringed lute that is the direct ancestor of the banjo.",
          },
          {
            era: "Appalachian Fusion",
            content:
              "African musicians brought the instrument to the Americas, where it later fused with European styles.",
          },
        ],
        color: "#A855F7",
      },
    },
    {
      type: "Feature",
      id: "connection_012",
      properties: {
        pillar: "Food",
        title: "Jollof to Jambalaya",
        origin: { region: "Senegal/Mali", coords: [14.6937, -17.4441] },
        destination: {
          region: "New Orleans, USA",
          coords: [29.9511, -90.0715],
        },
        storyboard: [
          {
            era: "Jollof Origins",
            content:
              "The Wolof people created Thieboudienne (Jollof), a one-pot rice dish staple of West Africa.",
          },
          {
            era: "Creole Evolution",
            content:
              "Missing certain African spices, cooks adapted the recipe in Louisiana to create the famous Jambalaya.",
          },
        ],
        color: "#FFD700",
      },
    },
    {
      type: "Feature",
      id: "connection_013",
      properties: {
        pillar: "Events",
        title: "Kwanzaa: First Fruits",
        origin: { region: "East Africa", coords: [-6.7924, 39.2083] },
        destination: {
          region: "Global Diaspora",
          coords: [34.0522, -118.2437],
        },
        storyboard: [
          {
            era: "Umkhosi Wokweshwama",
            content:
              "Based on 'Matunda ya Kwanza' (First Fruits) harvest festivals found throughout East and Southeast Africa.",
          },
          {
            era: "Modern Unity",
            content:
              "Established in 1966, Kwanzaa formalizes these ancestral values into the Seven Principles.",
          },
        ],
        color: "#A855F7",
      },
    },
  ],
};
