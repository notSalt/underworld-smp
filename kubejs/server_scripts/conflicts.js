ServerEvents.tags('item', event => {
  event.add('blue_skies:planks', /blue_skies:.+?_planks/)
  event.add('byg:planks', /byg:.+?_planks/)
  let chestsMissingTags = ['hexerei:willow_chest', 'hexerei:mahogany_chest', 'ars_nouveau:archwood_chest']
  event.add('forge:chests', chestsMissingTags)
  event.add('forge:chests/wooden', chestsMissingTags)
})

ServerEvents.recipes(event => {
  // vinery wine box
  event.remove({ id: 'vinery:wine_box' })
  event.shaped(
    Item.of('vinery:wine_box', 1),
    [
      '   ',
      'ABA',
      'AAA'
    ],
    {
      A: '#minecraft:wooden_slabs',
      B: '#forge:glass_panes'
    }
  )

  // blue skies tools
  let planks = Ingredient.of('#minecraft:planks').subtract(Ingredient.of('#blue_skies:planks'))
  event.forEachRecipe({ id: /minecraft:wooden_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })
  event.forEachRecipe({ id: 'minecraft:stick' }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('#', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })
  let cobble = Ingredient.of('#quark:stone_tool_materials').subtract(Ingredient.of('#blue_skies:cobblestone'))
  event.forEachRecipe({ id: /quark:tweaks\/crafting\/utility\/tools\/stone_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', cobble.toJson())
    json.add('key', key)
    recipe.json = json
  })

  // remove cake recipe, create does it better
  event.remove({ id: 'minecraft:cake' })

  // lots of crafting tables
  let tablePlanks = planks.subtract(Ingredient.of('#byg:planks'))
  event.forEachRecipe({ id: 'minecraft:crafting_table' }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('#', tablePlanks.toJson())
    json.add('key', key)
    recipe.json = json
  })
})