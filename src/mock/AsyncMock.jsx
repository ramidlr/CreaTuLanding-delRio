const productos = [
  // New
  {
    id: "01",
    name: "Remera Minimal Blanca",
    description: "Remera unisex de algodón orgánico.",
    stock: 40,
    price: 8500,
    category: "New",
    img: "https://picsum.photos/id/1011/200",
  },
  {
    id: "02",
    name: "Jean Relaxed Fit",
    description: "Pantalón denim corte suelto.",
    stock: 25,
    price: 15400,
    category: "New",
    img: "https://picsum.photos/id/1021/200",
  },
  {
    id: "03",
    name: "Campera Corta Negra",
    description: "Campera con capucha y cierre frontal.",
    stock: 12,
    price: 18900,
    category: "New",
    img: "https://picsum.photos/id/1031/200",
  },
  {
    id: "04",
    name: "Sweater Oversize Beige",
    description: "Tejido suave ideal para media estación.",
    stock: 18,
    price: 13200,
    category: "New",
    img: "https://picsum.photos/id/1041/200",
  },
  {
    id: "05",
    name: "Zapatillas Chunky Blancas",
    description: "Suela ancha y diseño urbano.",
    stock: 20,
    price: 21900,
    category: "New",
    img: "https://picsum.photos/id/1051/200",
  },
  {
    id: "06",
    name: "Gorro Fisher Azul",
    description: "Gorro estilo pescador en gabardina.",
    stock: 30,
    price: 6200,
    category: "New",
    img: "https://picsum.photos/id/1061/200",
  },

  // Deporte
  {
    id: "07",
    name: "Short Running DryFit",
    description: "Tela liviana con respiración.",
    stock: 50,
    price: 7200,
    category: "Deporte",
    img: "https://picsum.photos/id/1071/200",
  },
  {
    id: "08",
    name: "Musculosa Técnica Mujer",
    description: "Ideal para entrenamientos intensos.",
    stock: 30,
    price: 6800,
    category: "Deporte",
    img: "https://picsum.photos/id/1081/200",
  },
  {
    id: "09",
    name: "Leggings Compresión",
    description: "Ajuste perfecto y soporte muscular.",
    stock: 20,
    price: 9800,
    category: "Deporte",
    img: "https://picsum.photos/id/1091/200",
  },
  {
    id: "10",
    name: "Top Deportivo Cruzado",
    description: "Sujeción media, ideal yoga.",
    stock: 15,
    price: 7900,
    category: "Deporte",
    img: "https://picsum.photos/id/1101/200",
  },
  {
    id: "11",
    name: "Zapatillas Trail Grip",
    description: "Tracción en cualquier terreno.",
    stock: 10,
    price: 23500,
    category: "Deporte",
    img: "https://picsum.photos/id/1111/200",
  },
  {
    id: "12",
    name: "Conjunto Running Hombre",
    description: "Conjunto completo de alto rendimiento.",
    stock: 10,
    price: 17200,
    category: "Deporte",
    img: "https://picsum.photos/id/1121/200",
  },

  // Hombre
  {
    id: "13",
    name: "Camisa Lino Arena",
    description: "Camisa fresca, ideal verano.",
    stock: 15,
    price: 13400,
    category: "Hombre",
    img: "https://picsum.photos/id/1131/200",
  },
  {
    id: "14",
    name: "Buzo Crewneck Negro",
    description: "Buzo clásico con cuello redondo.",
    stock: 25,
    price: 9900,
    category: "Hombre",
    img: "https://picsum.photos/id/1141/200",
  },
  {
    id: "15",
    name: "Pantalón Chino Beige",
    description: "Look casual y cómodo.",
    stock: 12,
    price: 12700,
    category: "Hombre",
    img: "https://picsum.photos/id/1151/200",
  },
  {
    id: "16",
    name: "Remera Básica Gris",
    description: "Infaltable en tu armario.",
    stock: 40,
    price: 5900,
    category: "Hombre",
    img: "https://picsum.photos/id/1161/200",
  },
  {
    id: "17",
    name: "Campera Bomber Verde",
    description: "Diseño clásico actualizado.",
    stock: 10,
    price: 18500,
    category: "Hombre",
    img: "https://picsum.photos/id/1171/200",
  },
  {
    id: "18",
    name: "Cinturón Cuero Marrón",
    description: "Hecho en cuero argentino.",
    stock: 22,
    price: 7200,
    category: "Hombre",
    img: "https://picsum.photos/id/1181/200",
  },

  // Mujer
  {
    id: "19",
    name: "Blusa Satinada Rosa",
    description: "Ideal para salidas nocturnas.",
    stock: 18,
    price: 11200,
    category: "Mujer",
    img: "https://picsum.photos/id/1191/200",
  },
  {
    id: "20",
    name: "Pollera Midi Negra",
    description: "Elegancia y comodidad.",
    stock: 10,
    price: 14200,
    category: "Mujer",
    img: "https://picsum.photos/id/1201/200",
  },
  {
    id: "21",
    name: "Vestido Largo Floral",
    description: "Estilo boho chic.",
    stock: 8,
    price: 15800,
    category: "Mujer",
    img: "https://picsum.photos/id/1211/200",
  },
  {
    id: "22",
    name: "Top con Volados",
    description: "Femenino y versátil.",
    stock: 20,
    price: 8800,
    category: "Mujer",
    img: "https://picsum.photos/id/1221/200",
  },
  {
    id: "23",
    name: "Sandalias Plataforma",
    description: "Altura con confort.",
    stock: 12,
    price: 16200,
    category: "Mujer",
    img: "https://picsum.photos/id/1231/200",
  },
  {
    id: "24",
    name: "Cartera Cuero Negra",
    description: "Diseño urbano y elegante.",
    stock: 15,
    price: 21000,
    category: "Mujer",
    img: "https://picsum.photos/id/1241/200",
  },

  // Sale
  {
    id: "25",
    name: "Bermuda Cargo Hombre",
    description: "Versátil para verano.",
    stock: 18,
    price: 5900,
    category: "Sale",
    img: "https://picsum.photos/id/1251/200",
  },
  {
    id: "26",
    name: "Sweater Rayado Mujer",
    description: "Estilo náutico atemporal.",
    stock: 10,
    price: 7200,
    category: "Sale",
    img: "https://picsum.photos/id/1261/200",
  },
  {
    id: "27",
    name: "Zapatillas Slip-On",
    description: "Fáciles de calzar y livianas.",
    stock: 30,
    price: 7600,
    category: "Sale",
    img: "https://picsum.photos/id/1271/200",
  },
  {
    id: "28",
    name: "Jean Mom Fit Mujer",
    description: "Tiro alto y corte recto.",
    stock: 16,
    price: 9200,
    category: "Sale",
    img: "https://picsum.photos/id/1281/200",
  },
  {
    id: "29",
    name: "Camisa Manga Corta Hombre",
    description: "Estampa tropical vibrante.",
    stock: 12,
    price: 6400,
    category: "Sale",
    img: "https://picsum.photos/id/1291/200",
  },
  {
    id: "30",
    name: "Buzo con Capucha Gris",
    description: "Infaltable para días frescos.",
    stock: 20,
    price: 8700,
    category: "Sale",
    img: "https://picsum.photos/id/1301/200",
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error");
      } else {
        resolve(productos);
      }
    }, 2000);
  });
};
export const getOneProduct = (id) => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error");
      } else {
        let product = productos.find((prod) => prod.id === id);
        resolve(product);
      }
    }, 2000);
  });
};
