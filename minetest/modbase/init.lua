modbase = {}  -- namespace

function modbase.crea_blocco( name, params )
	local player = minetest.get_player_by_name( "singleplayer" )
	local pp = player:get_pos()

	minetest.set_node( { x = pp.x + 2, y = pp.y, z = pp.z + 2 }, { name = "default:brick" } )
end

function modbase.crea_assi( name, params )
	local player = minetest.get_player_by_name( "singleplayer" )
	local pp = player:get_pos()
	local org_assi = { x = pp.x + 5, y = pp.y, z = pp.z + 5 }  -- origine assi
	modbase.org_assi = org_assi  -- la memorizziamo per poter cancellare gli assi dopo

	for i = 0, 10 do
		-- asse x
		minetest.set_node( { x = org_assi.x + i, y = org_assi.y, z = org_assi.z }, { name = "default:wood" } )
		-- asse y
		minetest.set_node( { x = org_assi.x, y = org_assi.y + i, z = org_assi.z }, { name = "default:bronzeblock" } )
		-- asse z
		minetest.set_node( { x = org_assi.x, y = org_assi.y, z = org_assi.z + i }, { name = "default:cactus" } )
	end
end

function modbase.canc_assi( name, params )
	for i = 0, 10 do
		-- asse x
		minetest.remove_node( { x = modbase.org_assi.x + i, y = modbase.org_assi.y, z = modbase.org_assi.z } )
		-- asse y
		minetest.remove_node( { x = modbase.org_assi.x, y = modbase.org_assi.y + i, z = modbase.org_assi.z } )
		-- asse z
		minetest.remove_node( { x = modbase.org_assi.x, y = modbase.org_assi.y, z = modbase.org_assi.z + i } )
	end
end

minetest.register_chatcommand( "crea_blocco", {
	func = modbase.crea_blocco
} )

minetest.register_chatcommand( "crea_assi", {
	func = modbase.crea_assi
} )

minetest.register_chatcommand( "canc_assi", {
	func = modbase.canc_assi
} )

