const productos = [
  // Nuevo
  {
    id: "01",
    name: "Chuck Taylor All Star",
    description: "Clásicas y versátiles, ideales para cualquier look.",
    stock: 25,
    price: 19000,
    category: "Nuevo",
    img: "/productos/chucktaylorblack.jpg",
  },
  {
    id: "02",
    name: "Nike Air Max Pulse",
    description: "Comodidad con diseño futurista.",
    stock: 20,
    price: 28500,
    category: "Nuevo",
    img: "/productos/airmaxnike.jpg",
  },
  {
    id: "03",
    name: "New Balance 550",
    description: "Estética retro con materiales premium.",
    stock: 15,
    price: 26000,
    category: "Nuevo",
    img: "/productos/chucktaylorwhite.jpg",
  },
  {
    id: "04",
    name: "Adidas Campus 00s",
    description: "Inspiradas en el skate, estilo urbano asegurado.",
    stock: 18,
    price: 24000,
    category: "Nuevo",
    img: "/productos/chucktaylorblack.jpg",
  },
  {
    id: "05",
    name: "Vans Knu Skool",
    description: "Zapatilla chunky con identidad noventera.",
    stock: 22,
    price: 22000,
    category: "Nuevo",
    img: "/productos/chucktaylorwhite.jpg",
  },

  // Hombre
  {
    id: "06",
    name: "Nike Air Force 1",
    description: "Un ícono atemporal para todos los días.",
    stock: 30,
    price: 25000,
    category: "Hombre",
    img: "/productos/chucktaylorblack.jpg",
  },
  {
    id: "07",
    name: "Puma Suede Classic",
    description: "Estilo retro con materiales suaves.",
    stock: 20,
    price: 19500,
    category: "Hombre",
    img: "/productos/chucktaylorblack.jpg",
  },
  {
    id: "08",
    name: "Adidas Forum Low",
    description: "Estética basket con detalles actuales.",
    stock: 18,
    price: 23500,
    category: "Hombre",
    img: "/productos/chucktaylorblack.jpg",
  },
  {
    id: "09",
    name: "Reebok Club C 85",
    description: "Minimalismo y comodidad para el día a día.",
    stock: 25,
    price: 21000,
    category: "Hombre",
    img: "/productos/chucktaylorblack.jpg",
  },
  {
    id: "10",
    name: "Asics Gel-1130",
    description: "Running style para la calle.",
    stock: 12,
    price: 27000,
    category: "Hombre",
    img: "/productos/chucktaylorblack.jpg",
  },

  // Mujer
  {
    id: "11",
    name: "Nike Dunk Low",
    description: "Coloridas, cómodas y con onda.",
    stock: 15,
    price: 27000,
    category: "Mujer",
    img: "/productos/airmaxnike.jpg",
  },
  {
    id: "12",
    name: "Converse Run Star Hike",
    description: "Plataforma y diseño único para destacar.",
    stock: 10,
    price: 29000,
    category: "Mujer",
    img: "/productos/airmaxnike.jpg",
  },
  {
    id: "13",
    name: "Adidas Ozweego",
    description: "Futuristas y ultra cómodas.",
    stock: 16,
    price: 24500,
    category: "Mujer",
    img: "/productos/airmaxnike.jpg",
  },
  {
    id: "14",
    name: "New Balance 327",
    description: "Diseño audaz con herencia running.",
    stock: 14,
    price: 25500,
    category: "Mujer",
    img: "/productos/chucktaylorwhite.jpg",
  },
  {
    id: "15",
    name: "Nike Blazer Mid '77",
    description: "Inspiración vintage para looks urbanos.",
    stock: 20,
    price: 23000,
    category: "Mujer",
    img: "/productos/chucktaylorwhite.jpg",
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
