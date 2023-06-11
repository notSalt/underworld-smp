ServerEvents.tags('item', event => {
  event.add('blue_skies:planks', /blue_skies:.+?_planks/)
  event.add('byg:planks', /byg:.+?_planks/)
  let chestsMissingTags = ['hexerei:willow_chest', 'hexerei:mahogany_chest', 'ars_nouveau:archwood_chest', 'ad_astra:strophar_chest', 'ad_astra:aeronos_chest']
  event.add('forge:chests', chestsMissingTags)
  event.add('forge:chests/wooden', chestsMissingTags)
})

ServerEvents.recipes(event => {
  // cooked eggs recipe conflict
  event.remove({ output: "incubation:fried_egg" })
  event.remove({ output: "naturalist:cooked_egg" })
})