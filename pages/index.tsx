import { m, Variants } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import {
  pokemonList,
  PokemonDataResponse,
  PokemonJSON,
  PokemonType,
} from "./api/pokemon";

interface HomeProps {
  data: PokemonDataResponse;
}

function Home(props: HomeProps) {
  const [sort, setSort] = useState<"id" | "name" | "type">("id");
  const [filterTypes, setFilterTypes] = useState<PokemonType[]>([]);
  const [pokemonList, setPokemonList] = useState<PokemonJSON[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // filter and sort the pokemon list based on the current filter and sort
    const filteredPokemon = props.data.filter((pokemon: PokemonJSON) => {
      // if a type is filtered, don't show pokemon that don't have that type (or a subtype)
      if (filterTypes.length > 0) {
        console.log(pokemon.types);
        console.log(filterTypes);
        return pokemon.types.some((type) =>
          filterTypes.includes(type as PokemonType)
        );
      }
      return true;
    });

    const sortedPokemon = filteredPokemon.sort(
      (a: PokemonJSON, b: PokemonJSON) => {
        switch (sort) {
          case "id":
            return a.id - b.id;
          case "name":
            return a.name.localeCompare(b.name);
          case "type":
            return a.types[0].localeCompare(b.types[0]);
        }
      }
    );
    setIsLoading(false);
    setPokemonList(sortedPokemon);
  }, [sort, filterTypes, props.data]);

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      <main className="flex flex-col items-center pt-16 font-exo">
        <div className="pb-8 text-center">
          <h1 className="text-3xl font-bold">
            anny&apos;s non-specific pokemon list
          </h1>
        </div>
        <m.div
          className="inline-grid grid-cols-2 sm:grid-cols-4"
          variants={cardContainerVariants}
        >
          <div className="col-span-2 m-2 flex flex-row items-center justify-between rounded-3xl bg-zinc-800 bg-opacity-30 p-2 shadow sm:col-span-4">
            <div className="flex-row items-center justify-start">
              {/*  id button  */}
              <MenuOption
                name="Pokédex"
                onClick={() => setSort("id")}
                isSelected={sort === "id"}
              />
              {/*  name button  */}
              <MenuOption
                name="Name"
                onClick={() => setSort("name")}
                isSelected={sort === "name"}
              />
              {/*  type button  */}
              <MenuOption
                name="Type"
                onClick={() => setSort("type")}
                isSelected={sort === "type"}
              />
            </div>
            <div className="flex-row items-center justify-end">
              {/*  type filter buttons  */}
              <MenuOption
                name="Reset"
                onClick={() => setFilterTypes([])}
                isSelected={filterTypes.length !== 0}
              />
            </div>
          </div>
          <m.div className="col-span-2 m-2 inline-grid grid-cols-6 items-center justify-center rounded-3xl bg-zinc-800 bg-opacity-30 p-2 shadow sm:col-span-4 sm:grid-cols-9 lg:grid-cols-[repeat(18,_minmax(0,_1fr))]">
            {Object.keys(PokemonType).map((type) => {
              type = type.toLowerCase();
              return (
                // if unselected, lower opacity
                <m.div
                  key={type}
                  className="col-span-1 flex justify-center px-1 py-1 lg:py-0"
                  animate={{
                    opacity: filterTypes.includes(type as PokemonType)
                      ? 1
                      : 0.5,
                  }}
                >
                  <Image
                    src={"/img/types/" + type + ".webp"}
                    alt={type}
                    width={50}
                    height={20}
                    onClick={() => {
                      if (filterTypes.includes(type as PokemonType)) {
                        setFilterTypes(filterTypes.filter((t) => t !== type));
                      } else {
                        setFilterTypes([...filterTypes, type as PokemonType]);
                      }
                    }}
                  />
                </m.div>
              );
            })}
          </m.div>
          {pokemonList.map((pokemon: PokemonJSON) => {
            return (
              <m.div key={pokemonList.indexOf(pokemon)} variants={cardVariants}>
                <PokemonCard {...pokemon} />
              </m.div>
            );
          })}
        </m.div>
      </main>
    </>
  );
}

const MenuOption = (props: {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <button onClick={props.onClick}>
      <m.div
        className="m-2 flex flex-row items-center justify-center rounded-2xl bg-zinc-800 bg-opacity-30 p-2 shadow"
        animate={{
          backgroundColor: props.isSelected ? "#c084fcff" : "#00000000",
        }}
        whileHover={{ backgroundColor: "#c084fcff" }}
      >
        <h1 className="text-sm font-bold sm:text-2xl">{props.name}</h1>
      </m.div>
    </button>
  );
};

const PokemonCard = (props: PokemonJSON) => {
  return (
    <div className="m-2 flex flex-col items-center rounded-2xl bg-zinc-800 bg-opacity-30 p-4 shadow">
      <Image
        // pad the id with 0s to make it 3 digits
        src={"/img/art/" + props.id.toString().padStart(3, "0") + ".webp"}
        alt={props.name}
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-bold capitalize">{props.name}</h2>
      <div className="flex flex-row items-center justify-center">
        {props.types.map((type: PokemonType) => {
          return (
            <div key={type} className="px-1 pt-1">
              <Image
                src={"/img/types/" + type + ".webp"}
                alt={type}
                width={50}
                height={20}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const cardContainerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0 },
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.25 } },
  exit: { opacity: 0, y: 100 },
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export async function getStaticProps() {
  const data = pokemonList;

  return {
    props: { data: data },
  };
}

export default Home;
