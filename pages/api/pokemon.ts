// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface PokemonJSON {
  id: number;
  name: string;
  types: PokemonType[];
}

type PokemonDataResponse = {
  [x: string]: any;
  data: PokemonJSON[];
};

enum PokemonType {
  Normal = "normal",
  Fire = "fire",
  Water = "water",
  Electric = "electric",
  Grass = "grass",
  Ice = "ice",
  Fighting = "fighting",
  Poison = "poison",
  Ground = "ground",
  Flying = "flying",
  Psychic = "psychic",
  Bug = "bug",
  Rock = "rock",
  Ghost = "ghost",
  Dragon = "dragon",
  Dark = "dark",
  Steel = "steel",
  Fairy = "fairy",
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonDataResponse>
) {
  res.status(200).json({ data: pokemonList });
}

export type { PokemonDataResponse, PokemonJSON };

export { pokemonList, PokemonType };

const pokemonList: PokemonJSON[] = [
  {
    id: 1,
    name: "bulbasaur",
    types: [PokemonType.Grass, PokemonType.Poison],
  },
  {
    id: 19,
    name: "rattata",
    types: [PokemonType.Normal],
  },
  {
    id: 25,
    name: "pikachu",
    types: [PokemonType.Electric],
  },
  {
    id: 27,
    name: "sandshrew",
    types: [PokemonType.Ground],
  },
  {
    id: 29,
    name: "nidoran ♀",
    types: [PokemonType.Poison],
  },
  {
    id: 30,
    name: "nidorina",
    types: [PokemonType.Poison],
  },
  {
    id: 37,
    name: "vulpix",
    types: [PokemonType.Fire],
  },
  {
    id: 38,
    name: "ninetales",
    types: [PokemonType.Fire],
  },
  {
    id: 39,
    name: "jigglypuff",
    types: [PokemonType.Normal, PokemonType.Fairy],
  },
  {
    id: 40,
    name: "wigglytuff",
    types: [PokemonType.Normal, PokemonType.Fairy],
  },
  {
    id: 51,
    name: "dugtrio",
    types: [PokemonType.Ground],
  },
  {
    id: 53,
    name: "persian",
    types: [PokemonType.Normal],
  },
  {
    id: 58,
    name: "growlithe",
    types: [PokemonType.Fire],
  },
  {
    id: 63,
    name: "abra",
    types: [PokemonType.Psychic],
  },
  {
    id: 69,
    name: "bellsprout",
    types: [PokemonType.Grass, PokemonType.Poison],
  },
  {
    id: 77,
    name: "ponyta",
    types: [PokemonType.Fire],
  },
  {
    id: 78,
    name: "rapidash",
    types: [PokemonType.Fire],
  },
  {
    id: 100,
    name: "voltorb",
    types: [PokemonType.Electric],
  },
  {
    id: 108,
    name: "lickitung",
    types: [PokemonType.Normal],
  },
  {
    id: 131,
    name: "lapras",
    types: [PokemonType.Water, PokemonType.Ice],
  },
  {
    id: 132,
    name: "ditto",
    types: [PokemonType.Normal],
  },
  {
    id: 133,
    name: "eevee",
    types: [PokemonType.Normal],
  },
  {
    id: 134,
    name: "vaporeon",
    types: [PokemonType.Water],
  },
  {
    id: 135,
    name: "jolteon",
    types: [PokemonType.Electric],
  },
  {
    id: 143,
    name: "snorlax",
    types: [PokemonType.Normal],
  },
  {
    id: 147,
    name: "dratini",
    types: [PokemonType.Dragon],
  },
  {
    id: 148,
    name: "dragonair",
    types: [PokemonType.Dragon],
  },
  {
    id: 152,
    name: "chikorita",
    types: [PokemonType.Grass],
  },
  {
    id: 155,
    name: "cyndaquil",
    types: [PokemonType.Fire],
  },
  {
    id: 162,
    name: "furret",
    types: [PokemonType.Normal],
  },
  {
    id: 172,
    name: "pichu",
    types: [PokemonType.Electric],
  },
  {
    id: 179,
    name: "mareep",
    types: [PokemonType.Electric],
  },
  {
    id: 196,
    name: "espeon",
    types: [PokemonType.Psychic],
  },
  {
    id: 197,
    name: "umbreon",
    types: [PokemonType.Dark],
  },
  {
    id: 200,
    name: "misdreavus",
    types: [PokemonType.Ghost],
  },
  {
    id: 231,
    name: "phanpy",
    types: [PokemonType.Ground],
  },
  {
    id: 261,
    name: "poochyena",
    types: [PokemonType.Dark],
  },
  {
    id: 281,
    name: "kirlia",
    types: [PokemonType.Psychic, PokemonType.Fairy],
  },
  {
    id: 282,
    name: "gardevoir",
    types: [PokemonType.Psychic, PokemonType.Fairy],
  },
  {
    id: 300,
    name: "skitty",
    types: [PokemonType.Normal],
  },
  {
    id: 301,
    name: "delcatty",
    types: [PokemonType.Normal],
  },
  {
    id: 309,
    name: "electrike",
    types: [PokemonType.Electric],
  },
  {
    id: 311,
    name: "plusle",
    types: [PokemonType.Electric],
  },
  {
    id: 312,
    name: "minun",
    types: [PokemonType.Electric],
  },
  {
    id: 316,
    name: "gulpin",
    types: [PokemonType.Poison],
  },
  {
    id: 321,
    name: "wailord",
    types: [PokemonType.Water],
  },
  {
    id: 334,
    name: "altaria",
    types: [PokemonType.Dragon, PokemonType.Flying],
  },
  {
    id: 350,
    name: "milotic",
    types: [PokemonType.Water],
  },
  {
    id: 380,
    name: "latias",
    types: [PokemonType.Dragon, PokemonType.Psychic],
  },
  {
    id: 385,
    name: "jirachi",
    types: [PokemonType.Steel, PokemonType.Psychic],
  },
  {
    id: 403,
    name: "shinx",
    types: [PokemonType.Electric],
  },
  {
    id: 404,
    name: "luxio",
    types: [PokemonType.Electric],
  },
  {
    id: 405,
    name: "luxray",
    types: [PokemonType.Electric],
  },
  {
    id: 417,
    name: "pachirisu",
    types: [PokemonType.Electric],
  },
  {
    id: 422,
    name: "shellos",
    types: [PokemonType.Water],
  },
  {
    id: 427,
    name: "buneary",
    types: [PokemonType.Normal],
  },
  {
    id: 428,
    name: "lopunny",
    types: [PokemonType.Normal],
  },
  {
    id: 429,
    name: "mismagius",
    types: [PokemonType.Ghost],
  },
  {
    id: 431,
    name: "glameow",
    types: [PokemonType.Normal],
  },
  {
    id: 432,
    name: "purugly",
    types: [PokemonType.Normal],
  },
  {
    id: 434,
    name: "stunky",
    types: [PokemonType.Poison, PokemonType.Dark],
  },
  {
    id: 447,
    name: "riolu",
    types: [PokemonType.Fighting],
  },
  {
    id: 448,
    name: "lucario",
    types: [PokemonType.Fighting, PokemonType.Steel],
  },
  {
    id: 468,
    name: "togekiss",
    types: [PokemonType.Fairy, PokemonType.Flying],
  },
  {
    id: 470,
    name: "leafeon",
    types: [PokemonType.Grass],
  },
  {
    id: 471,
    name: "glaceon",
    types: [PokemonType.Ice],
  },
  {
    id: 478,
    name: "froslass",
    types: [PokemonType.Ice, PokemonType.Ghost],
  },
  {
    id: 481,
    name: "mesprit",
    types: [PokemonType.Psychic],
  },
  {
    id: 482,
    name: "azelf",
    types: [PokemonType.Psychic],
  },
  {
    id: 488,
    name: "cresselia",
    types: [PokemonType.Psychic],
  },
  {
    id: 492,
    name: "shaymin-land",
    types: [PokemonType.Grass],
  },
  {
    id: 497,
    name: "serperior",
    types: [PokemonType.Grass],
  },
  {
    id: 506,
    name: "lillipup",
    types: [PokemonType.Normal],
  },
  {
    id: 509,
    name: "purrloin",
    types: [PokemonType.Dark],
  },
  {
    id: 510,
    name: "liepard",
    types: [PokemonType.Dark],
  },
  {
    id: 531,
    name: "audino",
    types: [PokemonType.Normal],
  },
  {
    id: 542,
    name: "leavanny",
    types: [PokemonType.Bug, PokemonType.Grass],
  },
  {
    id: 546,
    name: "cottonee",
    types: [PokemonType.Grass, PokemonType.Fairy],
  },
  {
    id: 549,
    name: "lilligant",
    types: [PokemonType.Grass],
  },
  {
    id: 570,
    name: "zorua",
    types: [PokemonType.Dark],
  },
  {
    id: 571,
    name: "zoroark",
    types: [PokemonType.Dark],
  },
  {
    id: 572,
    name: "minccino",
    types: [PokemonType.Normal],
  },
  {
    id: 573,
    name: "cinccino",
    types: [PokemonType.Normal],
  },
  {
    id: 587,
    name: "emolga",
    types: [PokemonType.Electric, PokemonType.Flying],
  },
  {
    id: 619,
    name: "mienfoo",
    types: [PokemonType.Fighting],
  },
  {
    id: 620,
    name: "mienshao",
    types: [PokemonType.Fighting],
  },
  {
    id: 640,
    name: "virizion",
    types: [PokemonType.Grass, PokemonType.Fighting],
  },
  {
    id: 643,
    name: "reshiram",
    types: [PokemonType.Dragon, PokemonType.Fire],
  },
  {
    id: 644,
    name: "zekrom",
    types: [PokemonType.Dragon, PokemonType.Electric],
  },
  {
    id: 653,
    name: "fennekin",
    types: [PokemonType.Fire],
  },
  {
    id: 654,
    name: "braixen",
    types: [PokemonType.Fire],
  },
  {
    id: 671,
    name: "florges",
    types: [PokemonType.Fairy],
  },
  {
    id: 675,
    name: "pangoro",
    types: [PokemonType.Fighting, PokemonType.Dark],
  },
  {
    id: 700,
    name: "sylveon",
    types: [PokemonType.Fairy],
  },
  {
    id: 713,
    name: "avalugg",
    types: [PokemonType.Ice],
  },
  {
    id: 725,
    name: "litten",
    types: [PokemonType.Fire],
  },
  {
    id: 726,
    name: "torracat",
    types: [PokemonType.Fire],
  },
  {
    id: 906,
    name: "sprigatito",
    types: [PokemonType.Grass],
  },
];
