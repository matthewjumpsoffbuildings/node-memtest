var data = []

process.on('message', (message)=>{
	if(message.data){
		data = data.concat(message.data)
		if(data.length >= 5000){
			data = []
			// console.log("db", process.memoryUsage().rss / 1024 / 1024)
		}
	}
})
