const aardio = require('aardio')
const app = require('electron').app

// electron/aardio 初始化后执行
aardio.ready( win=> { 
	if( !aardio.studioInvoke ){
		win.removeMenu()
	} 
	
	win.on('closed', () => {  
		
	})  	
} )

// 在JS中注册并导出接口函数给aardio
aardio.on('main.hello', (str) => {
    return "electron主进程应答" + str;
}) 

app.on('window-all-closed', () => {
    app.quit();
}) 