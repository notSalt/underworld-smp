/*
  Farming for Blockheads custom market additions
  Credits to EnigmaQuip and ATM8
*/

const FFBAPI = Java.loadClass('net.blay09.mods.farmingforblockheads.api.FarmingForBlockheadsAPI')

// list of items to not add to the Market
let MarketBlackList = [
  "twilightforest:time_sapling",
  "twilightforest:mining_sapling",
  "twilightforest:sorting_sapling",
  "twilightforest:transformation_sapling",
  "occultism:otherworld_sapling",
  "occultism:otherworld_sapling_natural",
  "ars_nouveau:magebloom_crop",
  "woodworks:flowering_azalea_leaf_pile",
  "immersive_weathering:flower_crown",
	"immersive_weathering:azalea_flowers",
	"immersive_weathering:flowering_azalea_leaf_pile",
	"immersive_weathering:azalea_flower_pile",
  "byg:flowering_jacaranda_leaves",
  "byg:flowering_orchard_leaves",
  "byg:flowering_indigo_jacaranda_leaves",
  "byg:flowering_nightshade_leaves",
  "byg:flowering_palo_verde_leaves",
  "minecraft:flowering_azalea_leaves",
  "atmospheric:flowering_morado_leaves",
]

ForgeEvents.onEvent('net.blay09.mods.farmingforblockheads.api.MarketRegistryReloadEvent$Post', event => {
  let market = JsonIO.read('kubejs/server_scripts/mods/farmingForBlockheads/marketitems.json')
  let category = {
    saplings: FFBAPI.getMarketCategorySaplings(),
    seeds: FFBAPI.getMarketCategorySeeds(),
    flowers: FFBAPI.getMarketCategoryFlowers()
  }
  market.forEach((key, type) => {
    type.forEach((mod, list) => {
      list.forEach(item => {
        if (!FFBAPI.getMarketEntry(item)) {
          if (!MarketBlackList.includes(item)) {
            FFBAPI.registerMarketEntry(item, 'minecraft:emerald', category[key])
          }
        }
      })
    })
  })
})