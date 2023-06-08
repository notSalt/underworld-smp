// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Fix weird fucking poppy red dye crafting bug
	event.remove({ output: 'minecraft:red_dye' })
	event.shapeless(
		Item.of('minecraft:red_dye', 1),
		['minecraft:poppy']
	)

	// Add recipe for littleframes
	
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})