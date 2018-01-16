import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = images.slice(0);
  }

  getImage(id: number) {
    return images.slice(0).find(image => image.id == id)
  }
  constructor() { }

}

const images = [
  {"id": 1,
  "category": "boats",
  "caption": "view from a boat",
  "url": "assets/img/boat.jpeg"
},
{"id": 2,
"category": "animals",
"caption": "a cute cat",
"url": "assets/img/cat.jpeg"
},
{"id": 3,
"category": "buildings",
"caption": "a high-rise building",
"url": "assets/img/building.jpeg"
},
{"id": 4,
"category": "people",
"caption": "a beautiful girl",
"url": "assets/img/girl.jpeg"
},
{"id": 5,
"category": "mountain",
"caption": "view of a mountain",
"url": "assets/img/mountain.jpeg"
},
{"id": 6,
"category": "water",
"caption": "blue ocean",
"url": "assets/img/ocean.jpeg"
},
{"id": 7,
"category": "trees",
"caption": "an evergreen forest",
"url": "assets/img/forest.jpeg"
},
{"id": 8,
"category": "cars",
"caption": "a shiny Bentley",
"url": "assets/img/bentley.jpeg"
},
{"id": 9,
"category": "food",
"caption": "delicious burger",
"url": "assets/img/burger.jpeg"
},
{"id": 10,
"category": "drinks",
"caption": "a bottle of whiskey",
"url": "assets/img/whiskey.jpeg"
},
{"id": 11,
"category": "gadgets",
"caption": "a tea pot",
"url": "assets/img/tea-pot.jpeg"
},
{"id": 12,
"category": "electronics",
"caption": "a refrigerator",
"url": "assets/img/refrigerator.jpeg"
},
]
