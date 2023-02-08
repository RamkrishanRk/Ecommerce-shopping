const products = [
  {
    id: 1,
    title: "Kui Ye Chen’s AirPods",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-1.37a0a89c.jpg",
    sub_title: " 1175 + order placed from here recently",
    price: 250,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 3,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
  {
    id: 2,
    title: "Air Jordan 12 gym red",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-2.1adefbd6.jpg",
    address: "Street Food",
    sub_title: " 2525 + order placed from here recently",
    price: 300,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 5,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
  {
    id: 3,
    title: "Cyan cotton t-shirt",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-3.e4af5b82.jpg",
    sub_title: " 650 + order placed from here recently",
    price: 350,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 5,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
  {
    id: 4,
    title: "Timex Unisex Originals",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-4.719c3a60.jpg",
    sub_title: " 300 + order placed from here recently",
    price: 70,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 5,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
  {
    id: 5,
    title: "Red digital smartwatch",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-5.aff049a7.jpg",
    sub_title: "1050 + order placed from here recently",
    price: 210,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 5,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
  {
    id: 6,
    title: "Nike air max 95",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-7.1f4b5e9b.jpg",
    address: "Wraps FastFood, Chines",
    price: 400,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 5,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
  {
    id: 7,
    title: "Apple Watch",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/product-8.d7432880.jpg",
    sub_title: " 1100 + order placed from here recently",
    price: 13000,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 5,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
  {
    id: 8,
    title: "Gray Nike running shoes",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-2.1b2e51d9.jpg",
    address: "Tea, Coffee, Shake, Beverages",
    sub_title: "500 + order placed from here recently",
    price: 351,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 5,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
  {
    id: 9,
    title: "Headphones",
    image:
      "https://d19m59y37dris4.cloudfront.net/boutique/2-0/img/cat-img-4.5db5d5ec.jpg",
    address: "Burger, Sandwich, Fast Food",
    sub_title: "500 + order placed from here recently",
    price: 401,
    qnty: 0,
    reviews: [
      {
        id: 1,
        user_name: "daman",
        rating: 5,
        review: "Good quality and best product!",
      },
      {
        id: 2,
        user_name: "Ekta",
        rating: 1,
        review: "This is bad product!",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
  },
];

export default products;
