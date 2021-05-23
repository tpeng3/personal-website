const gameData = [
  {
    id: 10,
    name: "Cafe in the Clouds",
    date: "March 2020​, October 2020 - Present",
    description: `UX and Gameplay Programmer, Writer, and Sound Designer for a point and click adventure visual novel starring two lovely dreameaters who investigate and eat away their client's troubles. Made with two other friends during the 2020 NaNoReNo Game Jam!`,
    addText:
      "Has 6000+ downloads and won the Visual Arts Award at the 2020 UCSC Games Showcase.",
    imageURL:
      "https://img.itch.zone/aW1hZ2UvNjA4MTY1LzMyMzgxMTUucG5n/original/e9QPsX.png",
    altText: "Cafe in the Clouds Screenshot",
    built: "RenPy, Clip Studio Paint",
    links: {
      "Game Page": "https://cafe-nemo.itch.io/cafe-in-the-clouds",
      Github: "https://github.com/tpeng3/bakubaker",
    },
    tag: ["art", "game", "programming", "featured"],
  },
  {
    id: 1,
    name: "Savor Saber",
    date: "Fall 2018 - Summer 2019",
    description:
      "Art Director, Co-Producer, and Pixel Artist/Animator in a 12-member team for a slash and skewer adventure game about a robot feeding food to Eldritch Gods. I also designed and coded the public website!",
    addText:
      "Won both the Visual Arts and Worldbuilding Award at the 2019 UCSC Games Showcase.",
    imageURL:
      "https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/marsh1_orig.png",
    altText: "Savor Saber Screenshot",
    built: "Unity, Aseprite",
    links: {
      Website: "https://savorsaber.com/",
      "Game Page": "https://shuttlefrog.itch.io/savor-saber",
      Twitter: "https://twitter.com/SAVORSABER",
    },
    tag: ["art", "game", "web", "programming", "featured"],
  },

  {
    id: 2,
    name: "Typocrypha",
    date: "Summer 2018 - Present​",
    description:
      "One of the artists for an experimental Typing JRPG Visual Novel about social and cultural alienation. I draw backgrounds, clean up visual novel sprites and design various characters and enemies!",
    imageURL: "https://imgur.com/Of0x19l.png",
    altText: "Savor Saber Screenshot",
    built: "Unity, Clip Studio Paint",
    links: {
      Website: "https://typocrypha.com/",
      "Game Page": "https://typocrypha.itch.io/demonstration-i",
      Twitter: "https://twitter.com/typocrypha",
    },
    tag: ["art", "game", "featured"],
  },
  {
    id: 3,
    name: "Null Metal Detective: Tactical Schedule Management",
    date: "Spring 2018​",
    description:
      "Artist, Programmer and Writer working with two others for a time management visual novel about an incompetent detective. It also doubles as a bullet hell game.",
    addText: "Featured in the 2018 Sammy Showcase.",
    built: "Phaser, Javascript",
    imageURL:
      "https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/nmd-screencap_orig.png",
    altText: "Typocrypha Screenshot",
    links: {
      "Game Page": "https://hanmori.itch.io/harold",
      Github: "https://github.com/tpeng3/Endless-Runner",
      "Dev Video": "Available upon request.",
    },
    tag: ["programming", "art", "game"],
  },
  {
    id: 4,
    name: "Harold, they're Lesbians",
    date: "Spring 2018​",
    description:
      "Solo project. Programmer and Artist for a short endless runner about a phantom thief and police detective.",
    addText: "Nominated for Sonic '06 Best Runner 2018 (in-class joke award)",
    imageURL:
      "https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/screenshot1_orig.png",
    altText: "Harold Screenshot",
    built: "Phaser, Javascript",
    links: {
      "Game Page": "https://hanmori.itch.io/harold",
      Github: "https://github.com/tpeng3/Endless-Runner",
      "Dev Video": "https://youtu.be/JAerYD-Mx7Y",
    },
    tag: ["art", "game"],
  },
  {
    id: 5,
    name: "Bone App the Teeth",
    date: "Fall 2016",
    description:
      "Lead Artist, Programmer and Designer collaborating with one other friend for a college kitchen simulator. Based off real-life experiences (aka that one time I accidentally set frozen peas on fire).",
    addText: "Featured in the 2017 Sammy Showcase",
    built: "Twine, Renpy",
    imageURL:
      "https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/published/mainmenu3.png?1521269196",
    altText: "Boneapp Screenshot",
    links: { "Game Page": "https://appletea.itch.io/boneapp" },
    tag: ["game", "art"],
  },
  {
    id: 6,
    name: "One Night Murder",
    date: "Fall 2015 - On Hold",
    description:
      "Solo personal project. A murder mystery visual novel about what one college student and five other girls face when they wake up trapped in an empty mansion.",
    addText:
      "​There's currently an hour of gameplay that has been beta tested.",
    built: "Renpy, Sai2, Photoshop, Affinity Designer",
    imageURL:
      "https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/editor/399139231_1.png",
    altText: "ONM Screenshot",
    links: null,
    tag: ["game", "art", "programming"],
  },
  {
    id: 7,
    name: "Escape Roomba",
    date: "Summer 2018 - On Hold​",
    description:
      "Programmer and Designer for an escape room game about two witches stuck in a hotel room. Started as a game jam project but there are plans to continue when my two friends and I have more time. Title is tentative!",
    built: "Renpy",
    imageURL:
      "https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/leika_1.png",
    altText: "Roomba Screenshot",
    links: null,
    tag: ["game", "art", "programming"],
  },
  {
    id: 8,
    name: "the little things",
    date: "January 2019",
    description:
      "One of the Artists and Animation Programmer for a cozy game about a tiny girl named Thimble trying to fish up her friends (Tetris-styled) after a giant flood.",
    addText: "An entry for the Global Game Jam where the theme was Home.",
    built: "Unity, Sai2",
    imageURL:
      "https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/e7c65294d05cb19872d0bf85ba390c43_orig.png",
    altText: "thelittlethings Screenshot",
    links: {
      "Game Page": "https://globalgamejam.org/2019/games/little-things",
    },
    tag: ["game", "art"],
  },
  {
    id: 9,
    name: "Chaos Cooking",
    date: "October 2018",
    description:
      "An Artist and Designer for a card game where 4 players (playing as super-villains) work together to make the most evil dinner possible! The goal is to grab and combine ingredient cards to create cursed recipes, scoring Evil Points as a result. But if all else fails, just make some Soup.",
    built: "the magic of paper and markers",
    addText:
      "​An entry for the Garden Game Jam where the theme was Better Together.",
    imageURL:
      "https://shuttlefrog.weebly.com/uploads/2/8/6/2/28624773/chaos_orig.jpg",
    altText: "ChaosCooking Screenshot",
    links: null,
    tag: ["game", "art"],
  },
]

export default gameData
