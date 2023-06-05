const path = require('path');

modele.exports = {
	entry:'./index.js',  //默认打包index.js
	output:{  //出口文件
		filename:'index.js',
		path:path.resolve(_dirname,'index')
	}
}
