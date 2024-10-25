
// const products = [
//     {
//         id: "1", name: "Capitán America", price: 4000, img: "/img/capitanamerica.jpg", category: "funko",stock: 25, description: "funkoscapi"
//     },
//     { id: "2", name: "Batman", price: 1500, img: "/img/batman.jpg", category: "funko", stock: 25, description: "funkobatman" },
//     { id: "3", name: "Black Widow", price: 2000, img: "/img/blackwidow.jpg", category: "funko", stock: 25, description: "funkol la widon" },
//     { id: "4", name: "Black Phanter", price: 2000, img: "/img/blackpanther.jpg", category: "funko", stock: 25, description: "BLACK" },
//     { id: "5", name: "Ant-Man", price: 2000, img: "/img/antman.jpg", category: "funko", stock: 25, description: "Ant-Man" },
//     { id: "6", name: "Groot", price: 2000, img: "/img/groot.jpg", category: "funko", stock: 25, description: "Groot" },
//     { id: "7", name: "Iron-Man", price: 2000, img: "/img/blackwidow.jpg", category: "funko", stock: 25, description: "Iron " },
//     { id: "8", name: "Iron-Spider", price: 2000, img: "/img/ironspider.jpg", category: "funko", stock: 25, description: "Spider" },
//     { id: "9", name: "Jocker", price: 2000, img: "/img/jocker.jpg", category: "funko", stock: 25, description: "Jocker" },
//     { id: "10", name:  "Thanos", price: 2000, img: "/img/thanos.jpg",category: "funko", stock: 25, description: "thanos" }


// ]

// export const getProducts = () => {

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 500)
//     })
// };

// export const getProductById = (productId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === productId))
//         }, 500)
//     })
// }


// export const getProductsByCategory = (categoryId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.category === categoryId));
//         }, 500);
//     });
// };