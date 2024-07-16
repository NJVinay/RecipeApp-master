import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the recipe ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.recipe = this.recipes.find(recipe => recipe.id === +id);
    }
    // Fetch the recipe details based on the ID (Mock data or from JSON file)
    // Replace this with your actual logic to fetch recipe details
  }


  recipes: Recipe[] = [{
    id: 1,
    title: 'Chicken Biryani',
    image: 'https://imgs.search.brave.com/A2DRFFrrwEc9qJISPw9b72e-V6EC8cCE5o5hCtK_3us/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzQ5Lzk3LzE3/LzM2MF9GXzM0OTk3/MTc5N19yOEV2NHA0/QjFEVkJ4NFNkOHJv/b3lmRGhtdTlYUkZJ/OC5qcGc',
    summary: 'Heres a simple recipe for Chicken Biryani:\n\nIngredients:\n\n2 cups basmati rice\n500g chicken, cut into pieces\n1 cup plain yogurt\n2 onions, thinly sliced\n2 tomatoes, chopped\n3-4 green chilies, slit lengthwise\n1/4 cup chopped fresh cilantro (coriander leaves)\n1/4 cup chopped fresh mint leaves\n4 cloves garlic, minced\n1-inch piece of ginger, grated\n1 teaspoon ground turmeric\n1 teaspoon ground cumin\n1 teaspoon ground coriander\n1/2 teaspoon red chili powder (adjust to taste)\n1/4 teaspoon ground cinnamon\n1/4 teaspoon ground cardamom\n1/4 teaspoon ground cloves\n1/4 teaspoon ground nutmeg\nSalt to taste\n3 tablespoons ghee or vegetable oil\nSaffron strands soaked in 2 tablespoons warm milk (optional)\n\nInstructions:\n\nRinse the basmati rice under cold water until the water runs clear. Soak the rice in water for 30 minutes, then drain.\nIn a large bowl, mix the yogurt with minced garlic, grated ginger, turmeric, ground cumin, ground coriander, red chili powder, ground cinnamon, ground cardamom, ground cloves, ground nutmeg, and salt to taste.\nAdd the chicken pieces to the yogurt marinade and mix well to coat. Allow the chicken to marinate for at least 1 hour, preferably longer if time permits.\nIn a large skillet or Dutch oven, heat 2 tablespoons of ghee or vegetable oil over medium heat. Add the sliced onions and sauté until golden brown and caramelized. Remove half of the caramelized onions and set aside for garnishing.\nTo the remaining onions in the skillet, add the chopped tomatoes and slit green chilies. Cook until the tomatoes are soft and pulpy.\nAdd the marinated chicken along with the marinade to the skillet. Cook for 8-10 minutes until the chicken is partially cooked and the marinade has thickened slightly.\nIn a separate large pot, bring plenty of water to a boil. Add the soaked and drained basmati rice along with salt to taste. Cook the rice until its about 70% done, then drain and set aside.\nIn the same pot used for boiling rice, layer half of the partially cooked rice at the bottom. Top the rice with half of the chicken mixture, spreading it evenly.\nSprinkle half of the chopped cilantro and mint leaves over the chicken layer. Repeat the layering process with the remaining rice, chicken mixture, and herbs.\nDrizzle the saffron-infused milk over the top layer of rice. Cover the pot with a tight-fitting lid and cook on low heat for 20-25 minutes, or until the rice and chicken are fully cooked and tender.\nOnce cooked, gently fluff the biryani with a fork, mixing the layers slightly. Garnish with the reserved caramelized onions and additional chopped cilantro and mint leaves, if desired.\nServe hot with raita (yogurt dip) or your favorite side dishes. Enjoy your delicious homemade Chicken Biryani!.'
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    image: 'https://imgs.search.brave.com/IN0q1O0O0h290YFhwL879o8rXYpTQwoNDcuqy-Xm9Zc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0aWMwMS5ueXQuY29tL2ltYWdlcy8yMDIxLzAyLzE0L2RpbmluZy9jYXJib25hcmEtaG9yaXpvbnRhbC9jYXJib25hcmEtaG9yaXpvbnRhbC1hcnRpY2xlLXRhcnQtbGFyZ2UtdjIuanBnP3M9NjEyXDYxMiZ3PTAmaz0yMCZjPXlWVjFSQXJrWXoxZlhmMEJscGV1d3h0MHlUSEhEbm9VUlRNTWptWWdlST0',
    summary: 'An Italian pasta dish made with eggs, cheese, pancetta, and black pepper.'
  },
  {
    id: 3,
    title: 'Mushroom Risotto',
    image: 'https://imgs.search.brave.com/KOmcTU3e2oTijNHS1dV4HWlOWjsfiBLNK4Zvh0O92LA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5mZGNkbi5uZXQvanBnLzA1Lzc4LzcwLzIxLzM2MF9GXzU3ODcwMjE3MV9LTGlIS0ExODhoYkVUS1JhMGNRM09zeHllWUdGVG9Ody5qcGc/cz02MTJ4NjEyJnc9MCZrPTIwJmM9eVZWMVIwemtYbV9HZDFBcW5yVWtJRFljWFBodWUtLXhKb1RlVW9fYzNscEJRbGZfdlVNQnpNVGppcWk2bXV6MmV2dU9JX3c9PQ',
    summary: 'Creamy Italian rice dish cooked with mushrooms, onions, garlic, and cheese.'
  },
  {
    id: 4,
    title: 'Beef Tacos',
    image: 'https://imgs.search.brave.com/UeAxxs_APekCPfF-tI6Iu9_oFT73ZZMz6Fu0mjM0FX4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb29raW5naW50aGVtaWR3ZXN0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8xMS9zYXZpbmdQTkctNi0xMS0xMDI0eDEwMjQuanBn',
    summary: 'Mexican tacos made with seasoned ground beef, salsa, lettuce, and cheese.'
  },
  {
    id: 5,
    title: 'Vegetable Stir-Fry',
    image: 'https://imgs.search.brave.com/oaM3F19AfbzfiaWJrdln4wPwJAC-BNfJ82N2uA_Eji8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGVyZWNpcGVjcml0aWMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L3ZlZ2V0YWJsZV9zdGlyX2ZyeS5qcGc/cz02MTJ4NjEyJnc9MCZrPTIwJmM9dlZaVzFuUWxRWHBYVXF4TTRxUW9XVzZhQVpDQk5mSko4Mk4ydWEtRWppOD9zPTExMjYmcT03NTA',
    summary: 'A quick and healthy dish made with assorted vegetables stir-fried in a savory sauce.'
  },
  {
    id: 6,
    title: 'Margherita Pizza',
    image: 'https://imgs.search.brave.com/L-wIJ_AWzVt8MmtGtHo6Kue-qKUnJA-eW16vjerIycQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cuYWNvdXBsZWNvb2tzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8xMC9NYXJnZWlyaXRhLVBpenphLTA4Mi5qcGc',
    summary: 'Classic Italian pizza topped with tomato sauce, fresh mozzarella, basil, and olive oil.'
  },
  {
    id: 7,
    title: 'Grilled Salmon',
    image: 'https://imgs.search.brave.com/Yb-mwSUapQb9xuNiC9MlZn_8F5rLb-ucoS75oQEP3BA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvNDk3MTAzMTk3L3Bob3RvL2dyaWxsZWQtc2FsZXMuanBnP3M9NjEyXDYxMiZ3PTAmaz0yMCZjPWpNNVJITm5SMmR5VlJXMld2QnViOWQ4RFpPdS1pcWFnRUpFbGpKdz0',
    summary: 'Tender salmon fillets marinated and grilled to perfection, served with lemon wedges.'
  },
  {
    id: 8,
    title: 'Chicken Caesar Salad',
    image: 'https://imgs.search.brave.com/JH3bUN4pQzL9UhAY8KuE6rq5c_RPYbNb4cVA6589GD4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cuZGVsaWNpb3VzbWFnYXppbmUuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDcvNjUzMTc1LTEtZW5nLUdCX3Byb3Blci1jaGlja2VuLWNhc2FyLXNhcmxhZC03Njh4OTYuanBn',
    summary: 'Crisp romaine lettuce tossed with grilled chicken, Parmesan cheese, croutons, and Caesar dressing.'
  },
  {
    id: 9,
    title: 'White Sauce Pasta',
    image: 'https://imgs.search.brave.com/5wis5fO4Jp2X1WOZfztZKLE2iQDNTV0m_nvvqsIHXqE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4zLmZvb2R2aXZhLmNvbS9zdGF0aWMtY29udGVudC9mb29kLWltYWdlcy9zbmFja3MtcmVjaXBlcy93aGl0ZS1zYXVjZS1wYXN0YS93aGl0ZS1zYXVjZS1wYXN0YS5qcGc/cz02MTJ4NjEyJnc9MCZrPTIwJmM9ZUJ3dGlyTjBvR3NzZzRLVlNNakI3OU1aQTVwLUV6ZDFhVnljUzhFOGdrUWc9PQ',
    summary: 'This creamy and indulgent pasta dish features al dente pasta coated in a rich and velvety white sauce. The sauce is made by first creating a roux with butter and flour, then adding milk and cooking until thickened. Garlic, onion, and herbs are often sautéed to add flavor to the sauce. Parmesan cheese is typically stirred in for extra creaminess and a touch of nuttiness. The cooked pasta is then tossed in the sauce until fully coated, and it can be garnished with additional cheese, parsley, or black pepper before serving. This comforting dish is perfect for a cozy dinner or a special occasion.'
  },
  {
    id: 10,
    title: 'Pancakes',
    image: 'https://imgs.search.brave.com/7GNqtxiNeoKlI8onuT1exF5o5RiKJJSh8aR-ZOVBNq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvMTU3NTU4NDIzL3Bob3RvL3BhbmNha2VzLmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz16Z3RKOWNOZ1dJY2pMa1g2Q29NUW1BR2tlR0FjT1BNTEdYbVpUcjVnQlpreXlpYWFlMlpnLTVnUjROeG1GQU5TdEdOVU8tOGJlU1N3PQ',
    summary: 'Fluffy pancakes served with maple syrup and butter, perfect for breakfast or brunch.'
  },
  {
    id: 11,
    title: 'Chicken Curry',
    image: 'https://imgs.search.brave.com/8cx54O4P-tclrB00FG-1cjzUc0RH6pgYundvi4hggpQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc2LzAyLzcz/LzM2MF9GXzc2MDI3/MzIyX2ZiZkRpdnBv/c3BhYUE2WkpRRkVy/U29ib0Q1Qjlnc1BC/LmpwZw',
    summary: 'Spicy Indian curry made with tender chicken pieces, tomatoes, onions, and aromatic spices.'
  },
  {
    id: 12,
    title: 'Chocolate Cake',
    image: 'https://imgs.search.brave.com/TUbs5g9_i7exG377NMp1aLDx9MKqRRfl4lOg8jU3T-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgw/NzUxMTQ5L3Bob3Rv/L2Nob2NvbGF0ZS1j/YWtlLWNsb3NlLXVw/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0zRmNhdDlXSnRn/dDl3Sy1sQ0RpLUx1/bzNtMU5ubFk0dThs/bUpSM21MeXZ3PQ',
    summary: 'Decadent chocolate cake with rich chocolate frosting, a classic dessert for chocolate lovers.'
  },
  {
    id: 13,
    title: 'Caprese Salad',
    image: 'https://imgs.search.brave.com/Vy9YUIjmq4JZ2LbtXUcv7o4PBsh_1cwhU7x-g67KdoE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NTg4ODc4OC9waG90/by9jYXByZXNlLXNh/bGFkLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1jdnh1RjZv/c3h0U2t0dUJQNHRz/SGtiNDY1NDctSFU5/Vy1LOF9yU3E1VUdZ/PQ',
    summary: 'Simple Italian salad made with fresh tomatoes, mozzarella cheese, basil, and balsamic glaze.'
  },
  {
    id: 14,
    title: 'Vegetable Soup',
    image: 'https://imgs.search.brave.com/4upOaTSBWMX4VUHJt2Fxzz1X4g2OU1mfL6XtAK2Z4VI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aGVj/b3p5YXByb24uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA3L3ZlZ2V0YWJs/ZS1zb3VwX3RoZWNv/enlhcHJvbl8xLmpw/Zw',
    summary: 'Warm and comforting soup made with assorted vegetables, broth, and herbs.'
  },
  {
    id: 15,
    title: 'Veg Grilled Sandwiches',
    image: 'https://imgs.search.brave.com/skqdr1UqMq6jp0gv2LqCHQfCASZ8lAWpZBYj8Hkv8Zk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9s/bUtUU18tTUN3VTZS/b0dXNTBXVjJrUmst/enM9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS84X3ZlZ2FuX2dy/aWxsZWRfY2hlZXNl/LTViNGNkZWYyNDZl/MGZiMDA1YmVhOGUy/My5qcGc',
    summary: 'Grilled vegetables, mushrooms, lettuce and top with remaining piece of bread.'
  },
  {
    id: 16,
    title: 'Shrimp Scampi',
    image: 'https://imgs.search.brave.com/vgW8Dl7Kqg1XuBBq6w6yqoz3jslwb8kKMmn__-ZedRo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jYWZl/ZGVsaXRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDMvR2FybGljLUJ1/dHRlci1TaHJpbXAt/SU1BR0UtMTcuanBn',
    summary: 'Juicy shrimp sautéed in garlic butter and white wine, served over pasta.'
  },
  {
    id: 17,
    title: 'Chicken Burger',
    image: 'https://imgs.search.brave.com/Cf6yoHR2tgF12isbOVe4BowU5Y0cSQo3Un-iMh6l83k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDIy/LzA0LzE4L2Rpbmlu/Zy95Zi1jaGlja2Vu/LWF2b2NhZG8tYnVy/Z2Vycy9tZXJsaW5f/MjA1NTM2MzcyXzBk/MzEwMmFmLWYwODIt/NDkwMC1iZmQyLTE3/NjEwNWQ1M2E0Mi1t/ZWRpdW1UaHJlZUJ5/VHdvNDQwLmpwZz93/PTEyODAmcT03NQ',
    summary: 'Juicy chicken patty topped with lettuce, tomato, onion, cheese, and your favorite condiments.'
  },
  {
    id: 18,
    title: 'Ratatouille',
    image: 'https://imgs.search.brave.com/ow455I9PPNpCCsfPx7uggCi9iO6D21SXVKxfd0uJqUU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jaGVmZGVob21l/LmNvbS83NTAvMC8w/L3JhdGF0b3VpbGxl/L3JhdGF0b3VpbGxl/LXJlY2lwZS1waXhh/ci1tb3ZpZS5qcGc',
    summary: 'French vegetable stew made with eggplant, zucchini, bell peppers, tomatoes, and herbs.'
  },
  {
    id: 19,
    title: 'Fried Rice',
    image: 'https://imgs.search.brave.com/gMrlARrYUjB4JUAJbhA1J8htnyeLMbjRegotP67h0t0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTcw/ODk5MTM2L3Bob3Rv/L2ZyaWVkLXJpY2Ut/d2l0aC1lZ2ctYW5k/LXdvb2QtZ3JhaW4t/YmFja2dyb3VuZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/clhJUTZCdXZ4Tjdw/UWdMZVVEeGItRV85/VWQ5clVpT3NpbFpD/bkhnQWJ2Zz0',
    summary: 'Chinese-style fried rice made with cooked rice, vegetables, eggs, and soy sauce.'
  },
  {
    id: 20,
    title: 'Tiramisu',
    image: 'https://imgs.search.brave.com/vpn-_DDobS26400FODeSRXkWCsNTrDQM2daSOBw7fB8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NjQ2NTIxMy9waG90/by90aXJhbWlzdS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WEVQdzFuQmxGY1Nu/bWk3SlAxOXM0TnFo/ck9xT3J3b2RUT3ZG/cURoeW5BTT0',
    summary: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.'
  }
];
}

type Recipe = {
  id: number;
  title: string;
  image: string;
  summary: string;
};
