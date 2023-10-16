export const gyudon = `
•	Neutral oil
•	(such as vegetable or canola oil)
•	2 medium onions (very thinly sliced)
•	1 pound very thinly sliced beef (fatty beef chuck or ribeye)
•	2 teaspoons sugar
•	2 tablespoons mirin
•	2 tablespoons soy sauce
•	1 cup dashi stock (can also substitute beef or chicken stock)
•	4 eggs
•	4 cups cooked white rice (short grain or medium grain preferred)
•	1 scallion (chopped)
•	2 teaspoons toasted sesame seeds

`;
export const katsudon = `
•	1/3 cup (80ml) dashi, or 1/3 cup (80ml) water mixed with 3/4 teaspoon Hondashi
•	1 tablespoon (15ml) soy sauce
•	1 tablespoon (15ml) sake
•	2 teaspoons (8g) sugar
•	2 teaspoons (10ml) mirin
•	4 ounces thinly sliced yellow onion (115g; about 1/2 medium onion), optional
•	1 leftover Japanese fried chicken or pork cutlet, cut crosswise into 1/2-inch strips
•	2 large eggs
•	2 scallions, white and light green parts only, thinly sliced, plus more for garnish
•	Steamed white or brown rice, for serving

`;
export const teriyaki =`
•	1 cup soy sauce                             
•	1 cup granulated sugar                                                                                                                 
•	1½ teaspoons brown sugar
•	6 cloves garlic, crushed in a press                                          
•	2 tablespoons grated fresh ginger                                             
•	¼ teaspoon freshly ground black pepper
•	13-inch cinnamon stick
•	1 tablespoon pineapple juice
•	8 skinless, boneless chicken thighs
•	2 tablespoons cornstarch                                                   

`;
export const tonkatsu =`
•	4 slices pork loin or tenderloin, each about 1/2-inch thick and 5 ounces
•	Salt and freshly ground black pepper
•	Salt and freshly ground black pepper 
•	Flour for dredging
•	2 eggs, lightly beaten
•	2 cups panko (bread crumbs)
•	Vegetable oil for pan frying
•	Shredded Napa cabbage, for serving
•	Lemon wedges, for garnish
•	Tonkatsu sauce, for dipping

`;
export const beef_curry =`
•	250 g diced beef 0.55 lb, chuck steak or casserole steak work best
•	2 onions roughly diced
•	2 carrots large and chopped into 6
•	4 potatoes cut into 4 or 8 pieces
•	100 g Japanese curry roux 3.5 oz 
•	2 1/2 cups water 625 ml / 21 fl oz
•	¼ cup red wine 72.5 ml / 2.45 oz, sub with water for non-alcoholic
•	2 tbsp Worcestershire sauce sub tomato sauce / ketchup
•	1 tsp garlic
•	1 tsp ginger
•	1 tsp beef stock
•	2 tbsp vegetable oil

`;
export const recipes = [
    {
        source: require('./assets/gyudon.jpg'),
        name: 'Gyudon',
        tag: 'beef',
        recipe: `${gyudon}`
    },
    {
        source: require('./assets/katsudon.jpg'),
        name: 'Katsudon',
        tag: 'pork',
        recipe: `${katsudon}`
    },

    {
        source: require('./assets/teriyaki.jpg'),
        name: 'Teriyaki Chicken',
        tag: 'chicken',
        recipe: `${teriyaki}`
    },
    {
        source: require('./assets/tonkatsu.jpg'),
        name: 'Tonkatsu',
        tag: 'Pork',
        recipe: `${tonkatsu}`
      },
    {
        source: require('./assets/curry.jpg'),
        name: 'Beef Curry',
        tag: 'beef',
        recipe: `${beef_curry}`
      }
      
    
  ];

