     //获取版本号,设置title
     //  document.title = 'demo' + fengmap.VERSION;

     //定义全局map变量
     var map = null;

     //定义地图ID变量
     var fmapID = '90881';
     //定义主题切换变量
     var toggleFlag = false;
     //定义地图是否加载完成变量
     var loadComplete = false;
     //地图是否正在加载中
     var isLoading = false;
     //定义二维/三维模式变量
     var planarFlag = false;
     //定义单层维/多层模式变量
     var multiFlag = false;
     //默认聚焦楼层
     var defaultFocusID = 1;
     //楼层索引值
     var defaultIndex;

     //定义domLayer
     var dmLayer = null;
     var imgLayer = null;


     //domMarker数据集合
     var alertMars = [];



     window.onload = function () {
     	//加载地图
     	openMap();
     };



     /**
      * 打开地图
      * */
     function openMap() {
     	/**
     	 * 初始化参数，默认使用在线数据，从蜂鸟视图数据服务器加载模型数据
     	 * https://developer.fengmap.com/docs/js/v2.7.0/fengmap.FMMap.html
     	 **/
     	var mapOptions = {
     		//必要，地图容器
     		container: document.getElementById('fengMap'),
     		//地图数据位置
     		mapServerURL: 'data/' + fmapID,
     		//主题数据位置
     		mapThemeURL: 'data/theme',
     		defaultThemeName: '03101542ba1ef62faa928cf299cd9939',
     		defaultBackgroundColor: '#0B1129',
     		defaultBackgroundAlpha: 1,
     		defaultGroupSpace: 21,
     		defaultMapScale: 210,
     		//设置主题
     		//初始二维/三维状态,默认3D显示
     		defaultViewMode: fengmap.FMViewMode.MODE_3D,
     		defaultControlsPose: fengmap.FMDirection.NORTH,


     		//必要，地图应用名称，通过蜂鸟云后台创建
     		appName: 'A',
     		//必要，地图应用密钥，通过蜂鸟云后台获取
     		key: 'a0fe3b4632e190254e553e6ddd26c553'
     	};

     	//初始化地图对象

     	map = new fengmap.FMMap(mapOptions);

     	map.on('mapClickNode', function (event) {
     		// 打印出点击处的地图坐标
     		console.log(event);
     	});


     	//打开Fengmap服务器的地图数据和主题
     	map.openMapById(fmapID, function (error) {
     		//打印错误信息
     		console.log(error);
     	});

     	//地图加载完成事件
     	map.on('loadComplete', function () {

     		//修改地图加载状态
     		loadComplete = true;
     		isLoading = false;
     		console.log('地图加载完成！');

     		createdControlsLayer(); //新增覆盖
     	});
     }


     /**
      * 显示热力图
      */
     var heatmapInstance = null;
     var heatMapLayer = null;
     var showHeatMap = false;

     function showRandomHeatmap() {
     	showHeatMap = !showHeatMap;
     	if (!showHeatMap) {
     		removeHeatmap();
     		return
     	}
     	if (heatmapInstance) {
     		removeHeatmap();
     	}
     	createRandomHeatmap(map, map.focusGroupID);
     }

     /**
      * 添加随机热力图方法
      * */
     function createRandomHeatmap(map, groupID) {
     	//创建热力图对象
     	heatmapInstance = fengmap.FMHeatMap.create(map, {
     		//热点半径
     		radius: 7,
     		//热力图透明度
     		opacity: 0.5,
     		//热力点value的最大值
     		max: 100
     	});
     	//随机增加热点
     	heatmapInstance.randomPoints(200);

     	//将热力图应用到楼层
     	heatMapLayer = map.getFMGroup(groupID);
     	heatMapLayer.applyHeatMap(heatmapInstance);
     }


     /**
      * 移除热力图
      * */
     function removeHeatmap() {
     	//获取显示楼层
     	if (heatmapInstance && heatMapLayer) {
     		//清除热力图的所有热力点
     		heatmapInstance.clearPoints();
     		//移除应用热力图
     		heatMapLayer.removeHeatMap(heatmapInstance);
     		heatmapInstance = null;
     	}
     }



     /**
      * 图片覆盖物--门禁
      */
     var mapGroup = null;
     var controlsLayer = null;
     var dmLayer = null;
     var doorId = 0;
     var doorMarkerMap = {};
     var doorCoord = [{
     		id: '001',
     		x: 12954460,
     		y: 4859713.56,
     		status: 'open'
     	},
     	{
     		id: '002',
     		x: 12954465,
     		y: 4859704,
     		status: 'open'
     	},
     	{
     		id: '003',
     		x: 12954497.356837973,
     		y: 4859702.149,
     		status: 'open'
     	},
     	{
     		id: '004',
     		x: 12954500.514,
     		y: 4859710,
     		status: 'open'
     	},
     	{
     		id: '005',
     		x: 12954502.295,
     		y: 4859716.405,
     		status: 'open'
     	}
     ]

     var doorIcons = {
     	'open': 'images/icon-door-open.png',
     	'close': 'images/icon-door-closed.png',
     	'fault': 'images/icon-door-fault.png'
     }
     // 0 open 1 fault
     var cameraCoord = [{
     		id: '',
     		x: 12954483.5,
     		y: 4859720,
     		status: 0
     	},
     	{
     		id: '002',
     		x: 12954465,
     		y: 4859718,
     		status: 1
     	}
     ]
     var cameraIcons = {
     	'open': 'images/icon-camera-open.png',
     	'fault': 'images/icon-camera-fault.png'
     }

     function createdControlsLayer() {
     	mapGroup = map.getFMGroup(map.focusGroupID);
     	controlsLayer = new fengmap.FMImageMarkerLayer();
     	controlsLayer.layerName = 'controlsLayer';
     	mapGroup.addLayer(controlsLayer);
     	doorId = 0;
     	dmLayer = map.getFMGroup(map.focusGroupID).getOrCreateLayer('domMarker');
     	dmLayer.name = 'camaraLayer';
     	// 创建门禁覆盖物
     	for (let i = 0; i < doorCoord.length; i++) {
     		addControlsMarker(doorCoord[i], 'door', doorIcons[doorCoord[i].status]);
     	}

     	for (let i = 0; i < cameraCoord.length; i++) {
     		var icontype = cameraCoord[i].status === 0 ? 'open' : 'fault'
     		addControlsMarker(cameraCoord[i], 'camera', cameraIcons[icontype]);
     	}
     }

     var im = null;

     function addControlsMarker(data, type, icon) {

     	if (type === 'camera') {
     		im = new fengmap.FMDomMarker({
     			x: data.x,
     			y: data.y,
     			height: 4,
     			domWidth: '32',
     			domHeight: '32',
     			domContent: '<div class="cameraDom" onClick="showCameraVideo(' + data.status + ')"><img src="' + icon + '" /></div>',
     			anchor: fengmap.FMMarkerAnchor.BOTTOM
     		});

     		im.markerid = type + data['id'];
     		im.markername = type;
     		dmLayer.addMarker(im);
     	} else {
     		im = new fengmap.FMImageMarker({
     			//标注x坐标点
     			x: data.x,
     			//标注y坐标点
     			y: data.y,
     			//设置图片路径
     			url: icon,
     			//设置图片显示尺寸
     			size: 32,
     			//标注高度，大于model的高度
     			height: 4
     		});
     		/**
     		 * imageMarker添加自定义属性
     		 **/
     		im.markerid = type + data['id'];
     		im.markername = type;
     		controlsLayer.addMarker(im);
     	}



     	// doorId++;
     }

     var visShowStatus = {
     	'cameraShow': true,
     	'doorShow': true
     }

     /**
      * 控制显示隐藏图层
      */
     function changeFacLayerVis(type) {
     	if (type === 'door') visShowStatus['doorShow'] = !visShowStatus['doorShow'];
     	if (type === 'camera') visShowStatus['cameraShow'] = !visShowStatus['cameraShow'];
     	var showType = type === 'camera' ? visShowStatus['cameraShow'] : visShowStatus['doorShow'];

     	if (type === 'door') {
     		controlsLayer.show = showType;
     	}
     	if (type === 'camera') {
     		dmLayer.show = showType
     	}
     }

     /**
      * 修改对应门禁的状态
      */
     function changeAccessControl(index) {
     	var doorStatus = doorCoord[index].status === 'open' ? 'close' : 'open';
     	doorCoord[index].status = doorStatus;
     	if (doorStatus === 'open') {
     		document.getElementsByClassName('department-accessControl')[index].className = 'department-accessControl'
     	} else {
     		document.getElementsByClassName('department-accessControl')[index].className = 'department-accessControl lock-closed'
     	}

     	console.log(controlsLayer)
     	controlsLayer.markers.forEach(function (item) {
     		if (item.markerid === 'door' + doorCoord[index].id) {
     			item.url = doorIcons[doorStatus]
     		}
     	})
     }


     /**
      * 摄像头视频展示
      */

     function showCameraVideo(status) {

     	if (status === 0) {
     		document.getElementById('popInfoWindow').style.display = 'flex';
     	} else {
     		$("#modeInfoPop").addClass('animated slideInDown shoModal');
     		setTimeout(() => {
     			$("#modeInfoPop").removeClass('slideInDown shoModal');
     		}, 2500);
     	}
     }

     // 关闭弹窗
     function closePopInfoWindow(type) {
		 document.getElementById('popInfoWindow').style.display = 'none';
     }