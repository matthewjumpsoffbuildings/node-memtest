#!/usr/bin/env node

process.on('message', (message)=>{
	if(message.iterate) iterate()
})

function iterate(){
	let data = []
	for(let i = 0; i < 1000; i++){
		data.push({
			a: "testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting",
			b: "testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting",
			c: 1.212323123,
			d: 3.45243,
			e: 231982.3,
			f: 3
		})
	}

	process.send({data})
	data = []
}
