export const sizes = ["M", "L", "XL", "XXL"];

const menImages = [
  "https://upload.wikimedia.org/wikipedia/commons/1/18/Dress_Shirt_%283161023616%29.jpg?v=2",
  "https://upload.wikimedia.org/wikipedia/commons/9/92/Denimjeans2.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/T-shirt2.jpg?v=2",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Hoodie_man.jpg?v=2",
  "https://upload.wikimedia.org/wikipedia/commons/c/cf/Yellow_cotton_Veshti_%26_shawl_-_India_21._Century_2023-04-13.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Plaid_IZOD_men%27s_shirt.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Sky_Blue_Kurta_%281%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Groom%27s_outfit.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/60/T_Shirt.jpg"
];

const womenImages = [
  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Mysore_Silk_Saree.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/30/Silk_saree.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5b/Koorai_silk_saree_5.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Koorai_silk_saree_4.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b9/Ladies_kurta_green.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/31/Ladies_kurta_white.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ladies_kurta_with_leggings.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ethnic_wear_for_women_Blue_Lehenga.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/67/Wedding_saree_%284120283%29.jpg"
];

const kidsImages = [
  "https://images.unsplash.com/photo-1660757507949-f8cf985b8246?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1656337868666-e040b8d3f2a2?fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1653835785932-1710eac6385d?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1719160233557-226f017fbfd7?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1551463855-8695fbe95094?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1764922074767-a27ee324380e?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1762322000682-1be016b394a9?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1768657890500-ed3a8f808d9d?auto=format&fit=crop&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1658253183752-97ae4af6fa3b?auto=format&fit=crop&fm=jpg&q=60&w=3000"
];

export const categoryProducts = {
  men: {
    label: "Men",
    title: "Men's Collection",
    subtitle: "Real menswear picks with shirt, jeans, t-shirt, hoodie, veshti, kurta, and wedding styles.",
    products: [
      {
        id: "men-1",
        name: "Formal Shirt",
        price: 799,
        image: menImages[0]
      },
      {
        id: "men-2",
        name: "Blue Jeans",
        price: 799,
        image: menImages[1]
      },
      {
        id: "men-3",
        name: "Cotton T-Shirt",
        price: 699,
        image: menImages[2]
      },
      {
        id: "men-4",
        name: "Casual Hoodie",
        price: 799,
        image: menImages[3]
      },
      {
        id: "men-5",
        name: "Veshti Set",
        price: 799,
        image: menImages[4]
      },
      {
        id: "men-6",
        name: "Checked Shirt",
        price: 799,
        image: menImages[5]
      },
      {
        id: "men-7",
        name: "Blue Kurta Shirt",
        price: 799,
        image: menImages[6]
      },
      {
        id: "men-8",
        name: "Wedding Sherwani",
        price: 1099,
        image: menImages[7]
      },
      {
        id: "men-9",
        name: "Casual Round Neck T-Shirt",
        price: 799,
        image: menImages[8]
      }
    ]
  },
  women: {
    label: "Women",
    title: "Women's Collection",
    subtitle: "Dress-only picks with a simple mix of saree, kurti, lehanga, and silk styles.",
    products: [
      {
        id: "women-1",
        name: "Classic Silk Saree",
        price: 3499,
        image: womenImages[0]
      },
      {
        id: "women-2",
        name: "Festival Silk Saree",
        price: 2199,
        image: womenImages[1]
      },
      {
        id: "women-3",
        name: "Koorai Silk Saree",
        price: 1499,
        image: womenImages[2]
      },
      {
        id: "women-4",
        name: "Cream Border Saree",
        price: 1399,
        image: womenImages[3]
      },
      {
        id: "women-5",
        name: "Green Kurti",
        price: 599,
        image: womenImages[4]
      },
      {
        id: "women-6",
        name: "White Kurti",
        price: 579,
        image: womenImages[5]
      },
      {
        id: "women-7",
        name: "Kurti with Leggings",
        price: 599,
        image: womenImages[6]
      },
      {
        id: "women-8",
        name: "Blue Lehanga",
        price: 4599,
        image: womenImages[7]
      },
      {
        id: "women-9",
        name: "Wedding Silk Saree",
        price: 2699,
        image: womenImages[8]
      }
    ]
  },
  kids: {
    label: "Kids",
    title: "Kids Collection",
    subtitle: "Cute kidswear picks with baby dress styles and festive looks.",
    products: [
      {
        id: "kids-1",
        name: "White Party Baby Dress",
        price: 999,
        image: kidsImages[0]
      },
      {
        id: "kids-2",
        name: "Pink Baby Dress",
        price: 1099,
        image: kidsImages[1]
      },
      {
        id: "kids-3",
        name: "Cute Baby Frock",
        price: 899,
        image: kidsImages[2]
      },
      {
        id: "kids-4",
        name: "Balloon Baby Dress",
        price: 1199,
        image: kidsImages[3]
      },
      {
        id: "kids-5",
        name: "Baby Casual Outfit",
        price: 1299,
        image: kidsImages[4]
      },
      {
        id: "kids-6",
        name: "Baby Boy Dress Set",
        price: 799,
        image: kidsImages[5]
      },
      {
        id: "kids-7",
        name: "Little Princess Dress",
        price: 1399,
        image: kidsImages[6]
      },
      {
        id: "kids-8",
        name: "Soft Baby Party Dress",
        price: 949,
        image: kidsImages[7]
      },
      {
        id: "kids-9",
        name: "Baby Festive Wear",
        price: 1249,
        image: kidsImages[8]
      }
    ]
  }
};
