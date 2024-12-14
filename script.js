const catQuotes = [
  "I'm not a morning person.",
  "Purrfectly fine just the way I am.",
  "I'm just here for the snacks.",
  "If I fits, I sits.",
  "You had my attention at 'treat'.",
  "Meow? Meow! MEOW!",
  "Did you say food?",
  "I’ll be the judge of that.",
  "I'm silently judging you.",
  "Nap time is sacred.",
  "I'm not lazy, I'm energy-efficient.",
  "All I need is a box and a dream.",
  "Who needs a clock when you have meowing?",
  "Hooman, fetch me a snack.",
  "Oops! Did I just knock that over?",
  "I chase lasers, not dreams.",
  "Sunbeam? Yes, please!",
  "It's cuddle o'clock, don't argue.",
  "Curiosity didn't kill the cat; it made us smarter.",
  "Life is better with fur and whiskers.",
  "Paws and reflect; I’m adorable.",
  "I woke up like this—flawless.",
  "I’m not ignoring you; I’m just prioritizing me."
];
const catCodes = [
  "def cat_sleep():\n    return 'Nap time is sacred!'\ncat_sleep()",
  "if cat.feel('hungry'):\n    cat.eat('treats')\nelse:\n    cat.nap()",
  "while not cat.is_awake():\n    cat.purr()\n    time.sleep(1)",
  "def cat_judge():\n    if cat.has_opinion('suspicious'):\n        return 'No, not today.'\n    return 'Okay, maybe...'",
  "def cat_reaction():\n    if cat.hear('food'):\n        return 'RUN!'",
  "cat = {'mood': 'lazy', 'activity': 'sleeping'}\nif cat['mood'] == 'hungry':\n    cat['activity'] = 'eating'",
  "class Cat:\n    def __init__(self):\n        self.energy = 100\n    def nap(self):\n        self.energy += 20\nmy_cat = Cat()\nmy_cat.nap()",
  "cat_toys = ['mouse', 'laser', 'feather']\nfor toy in cat_toys:\n    print(f'Playing with {toy}')",
  "if cat.is_in_box():\n    print('Cat is happy!')\nelse:\n    print('Cat wants a box!')",
  "def cat_hunt():\n    prey = ['bird', 'mouse', 'fly']\n    return f'Caught a {prey[0]}!'\nprint(cat_hunt())"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateMeme() {
  fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png')
    .then(response => response.json())
    .then(data => {
      const randomImage = data[0].url;
      const randomQuote = getRandomItem(catQuotes);
      document.getElementById('meme-image').src = randomImage;
      document.getElementById('quote').innerText = randomQuote;
    })
    .catch(error => console.error('Error fetching cat meme:', error));
}

function generateCode() {
  const randomCode = getRandomItem(catCodes);
  document.getElementById('code-output').innerText = randomCode;
}

document.getElementById('new-meme-btn').addEventListener('click', generateMeme);
document.getElementById('new-code-btn').addEventListener('click', generateCode);

// Initial meme and code generation
generateMeme();
generateCode();
