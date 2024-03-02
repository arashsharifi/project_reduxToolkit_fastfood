import product_01_image_01 from "../images/product_01.3.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_04.jpg";
import product_03_image_02 from "../images/product_08.jpg";
import product_03_image_03 from "../images/product_09.jpg";

import product_04_image_01 from "../images/product_3.1.jpg";
import product_04_image_02 from "../images/product_3.2.jpg";
import product_04_image_03 from "../images/product_3.3.jpg";

import product_05_image_01 from "../images/bread1.png";
import product_05_image_02 from "../images/bread2.png";
import product_05_image_03 from "../images/bread3.png";

import product_06_image_01 from "../images/product_4.1.jpg";
import product_06_image_02 from "../images/product_4.2.jpg";
import product_06_image_03 from "../images/product_4.3.png";

import catImg1 from "../images/hamburger.png";
import catImg2 from "../images/pizza.png";
import catImg3 from "../images/bread.png";

import ava1 from "../images/ava-1.jpg";
import ava2 from "../images/ava-2.jpg";
import ava3 from "../images/ava-3.jpg";
import ava4 from "../images/ava-4.jpg";

const products = [
  {
    id: 1,
    title: "chicken Burger",
    price: 80.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "burger",
    taste: "hot",
    categoryImg: catImg1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 2,
    title: "cheese Burger",
    price: 90.0,
    image01: product_01_image_02,
    image02: product_01_image_01,
    image03: product_01_image_03,
    category: "burger",
    taste: "mediyom",
    categoryImg: catImg1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 3,
    title: "meat cheace burger",
    price: 99.0,
    image01: product_01_image_03,
    image02: product_01_image_02,
    image03: product_01_image_01,
    category: "burger",
    taste: "hot",
    categoryImg: catImg1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 4,
    title: "vegetarian pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",
    taste: "mediyom",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 5,
    title: "seafood vegetarian pizza",
    price: 110.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",
    taste: "hot",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 6,
    title: "mushroom vegetarian pizza",
    price: 110.0,
    image01: product_02_image_03,
    image02: product_02_image_01,
    image03: product_02_image_02,
    category: "Pizza",
    taste: "hot",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 7,
    title: "ruyall Burger",
    price: 75.4,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "burger",
    taste: "hot",
    categoryImg: catImg1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 8,
    title: "chiken greel Burger",
    price: 95.4,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "burger",
    taste: "mediyom",
    categoryImg: catImg1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 9,
    title: "goda potaito Burger",
    price: 85.4,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "burger",
    taste: "hot",
    categoryImg: catImg1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 10,
    title: "italy peperoni",
    price: 110.4,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
    taste: "mediyom",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 11,
    title: "italy mazerela pizza",
    price: 110.4,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",
    taste: "hot",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 12,
    title: "vegan italy pizza",
    price: 110.4,
    image01: product_04_image_03,
    image02: product_04_image_01,
    image03: product_04_image_02,
    category: "Pizza",
    taste: "mediyom",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 13,
    title: "franse bread",
    price: 5.4,
    image01: product_05_image_01,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "bread",
    taste: "mediyom",
    categoryImg: catImg3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 14,
    title: "tost bread",
    price: 5.4,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "bread",
    taste: "mediyom",
    categoryImg: catImg3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 15,
    title: "farnsos bread",
    price: 5.4,
    image01: product_05_image_03,
    image02: product_05_image_01,
    image03: product_05_image_02,
    category: "bread",
    taste: "mediyom",
    categoryImg: catImg3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 16,
    title: "totamto pizza mekzikan",
    price: 115.4,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "pizza",
    taste: "mediyom",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 17,
    title: "peperoni pizza mekzikan",
    price: 100.4,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_01,
    category: "pizza",
    taste: "hot",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 18,
    title: "mushroom pizza tomato",
    price: 100.4,
    image01: product_06_image_02,
    image02: product_06_image_03,
    image03: product_06_image_01,
    category: "pizza",
    taste: "hot",
    categoryImg: catImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

const nav_Links = [
  { id: 1, display: "Home", path: "/home" },
  { id: 2, display: "Foods", path: "/foods" },
  { id: 3, display: "Cart", path: "/cart" },
  { id: 4, display: "Contact", path: "/contact" },
];
import fastood from "../images/category-01.png";
import pizza from "../images/category-02.png";
import asianFood from "../images/category-03.png";
import meat from "../images/category-04.png";

// featurData img
import delivery from "../images/service-01.png";
import dine from "../images/service-02.png";
import Pick from "../images/service-03.png";
const categoryData = [
  {
    id: 1,
    dispaly: "fastFood",
    imgUrl: fastood,
    dect: "Lorem ipsum dolor sit amet consectetur adipisicing elit Natus accusamussimilique Maxime consequuntur itaque facilis eligendi asperiores",
  },
  {
    id: 2,
    dispaly: "pizza",
    imgUrl: pizza,
    dect: "Lorem ipsum dolor sit amet consectetur adipisicing elit Natus accusamussimilique Maxime consequuntur itaque facilis eligendi asperiores",
  },
  {
    id: 3,
    dispaly: "asianFood",
    imgUrl: asianFood,
    dect: "Lorem ipsum dolor sit amet consectetur adipisicing elit Natus accusamussimilique Maxime consequuntur itaque facilis eligendi asperiores",
  },
  {
    id: 4,
    dispaly: "Row Meat",
    imgUrl: meat,
    dect: "Lorem ipsum dolor sit amet consectetur adipisicing elit Natus accusamussimilique Maxime consequuntur itaque facilis eligendi asperiores",
  },
];
const featurData = [
  {
    id: 1,
    dispaly: "fastFood",
    imgUrl: delivery,
    title: "Quick Delivery",
    dect: "Lorem ipsum dolor sit amet consectetur adipisicing elit Natus accusamussimilique Maxime consequuntur itaque facilis eligendi asperiores",
  },
  {
    id: 2,
    dispaly: "pizza",
    imgUrl: dine,
    title: "Super Dine in",
    dect: "Lorem ipsum dolor sit amet consectetur adipisicing elit Natus accusamussimilique Maxime consequuntur itaque facilis eligendi asperiores",
  },
  {
    id: 3,
    dispaly: "asianFood",
    imgUrl: Pick,
    title: "Esy Pick up",
    dect: "Lorem ipsum dolor sit amet consectetur adipisicing elit Natus accusamussimilique Maxime consequuntur itaque facilis eligendi asperiores",
  },
];

const DataSwiper = [
  {
    id: 1,
    name: "jack kik",
    desc: "Lorem ipsum dolor si, amet consectetur adipisicing minima animi nemo harum Laboriosam eaque sit Laboriosam quaseli.tempora modi a cupiditate temporibus nulla tenetur mollitia libero Saepe ",
    avatarImg: ava1,
  },
  {
    id: 2,
    name: "elen muck",
    desc: "Lorem ipsum dolor si, amet consectetur adipisicing minima animi nemo harum Laboriosam eaque sit Laboriosam quaseli.tempora modi a cupiditate temporibus nulla tenetur mollitia libero Saepe ",
    avatarImg: ava2,
  },
  {
    id: 3,
    name: "jack jan",
    desc: "Lorem ipsum dolor si, amet consectetur adipisicing minima animi nemo harum Laboriosam eaque sit Laboriosam quaseli.tempora modi a cupiditate temporibus nulla tenetur mollitia libero Saepe ",
    avatarImg: ava3,
  },
  {
    id: 4,
    name: "eli sandriya",
    desc: "Lorem ipsum dolor si, amet consectetur adipisicing minima animi nemo harum Laboriosam eaque sit Laboriosam quaseli.tempora modi a cupiditate temporibus nulla tenetur mollitia libero Saepe ",
    avatarImg: ava4,
  },
];

export { products, nav_Links, categoryData, featurData, DataSwiper };
