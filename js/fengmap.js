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
     // 点击事件ID
     var eventID = null;

     //定义domLayer
     var dmLayer = null;
     var imgLayer = null
     //domMarker数据集合
     var alertMars = [];

     var startArert = false;

     // 弹窗合集
     var popMarker = [];
     var popVideoList = [{
             no: '10004232',
             title: '火情报警',
             video: './video/fire1.mp4',
             ctime: '2020-09-22 14:22:33',
             address: '1F楼道-23',
             addressId: "2FDE",
             desc: '火苗',
         },
         {
             no: '10004233',
             title: '火情报警',
             video: './video/fire1.mp4',
             ctime: '2020-09-22 14:22:33',
             address: '1F东楼道-11',
             addressId: "2ADE",
             desc: '火苗',
         }
     ]

     var userList = [{
             id: 1,
             name: '人员1'
         },
         {
             id: 2,
             name: '人员2'
         },
         {
             id: 3,
             name: '人员3'
         },
         {
             id: 4,
             name: '人员4'
         },
         {
             id: 5,
             name: '人员5'
         },
         {
             id: 6,
             name: '人员6'
         },
         {
             id: 7,
             name: '人员7'
         },
         {
             id: 8,
             name: '人员8'
         },
         {
             id: 9,
             name: '人员9'
         },
     ]

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
             mapServerURL: './data/' + fmapID,
             //主题数据位置
             mapThemeURL: './data/theme',
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
             document.getElementById('btnsGroup').style.display = 'block';
             //添加与imagemarker绑定信息窗
             //addMarkerPopWindow();

             //添加独立信息窗
             //  addPopInfoWindow();
             /**
              * 渲染楼层切换控件
              * map.groupIDs 获取当前模型的所有楼层ID集合
              * */
             //获取地图楼层数据,循环数据，创建dom
            //  var groupIDs = map.groupIDs.reverse();
            //  //F1索引值
            //  defaultIndex = groupIDs.length - 1;
            //  var ulHtml = '';
            //  groupIDs.map(function (item, index) {
            //      var className = item === defaultFocusID ? "active" : "";
            //      ulHtml += '<li class="' + className + '" onClick="changeFloor(this,' + item + ', ' +
            //          index + ')">F' + item + '</li>';
            //  });

            //  //楼层组件Dom
            //  var ulDom = document.getElementById('floors');
            //  ulDom.innerHTML = ulHtml;
             //  addMarkerPopWindow()
         });
     }




     /**
      * 添加报警按钮事件
      * */
     function addAlertMarkerFunc(obj) {
         //重置其他按钮选中状态
         if (startArert) {
             return;
         }
         //移除其他按钮选中状态
         resetBtnStatus();
         //增加当前按钮选中状态
         obj.classList.add('active');
         //添加domMarker标注
         addAlertMarker();
     }

     /**
      * fengmap.FMDomMarker 自定义dom元素标注对象，为自定义图层。
      * https://developer.fengmap.com/docs/js/v2.7.0/fengmap.FMDomMarker.html
      **/
     function addAlertMarker() {
         startArert = true;
         ismoviemarker = false;
         if (dmLayer) {
             dmLayer.removeAll();
             alertMars = [];
         }

         //增加告警marker
         addWarningMarker();
     }

     //marker闪动
     //获取当前聚焦楼层
     var zf_x = 1;
     var zf_y = 1;
     var uuid = 0; // 定义当前页面的marker唯一标识码
     function addWarningMarker() {
         if (startArert) {
             var defaultX = map.center.x;
             var defaultY = map.center.y - 9;
             if (uuid < 2) {
                 var group = map.getFMGroup(map.focusGroupID);
                 var domMarker = new fengmap.FMDomMarker({
                     x: defaultX + zf_x * Math.random() * 20,
                     y: defaultY + zf_y * Math.random() * 10,
                     uuid: uuid,
                     height: 5,
                     domWidth: '30',
                     domHeight: '30',
                     domContent: '<div class="domContainer" onClick="getCurMarkerIndex(' + uuid + ')"><div class="dot"></div><div class="pulse"></div><div class="pulse-big"></div><div class="movie"></div></div>',
                     anchor: fengmap.FMMarkerAnchor.BOTTOM
                 });

                 dmLayer = map.getFMGroup(map.focusGroupID).getOrCreateLayer('domMarker');
                 dmLayer.addMarker(domMarker);

                 //保存marker数据
                 //  alertMars.push(domMarker);
                 alertMars['marker_' + uuid] = domMarker
                 uuid++;

                 //分散告警点
                 if (Math.random() < 0.25) {
                     zf_x = 1;
                     zf_y = 1;
                 } else if (Math.random() >= 0.25 && Math.random() < 0.5) {
                     zf_x = -1;
                     zf_y = 1;
                 } else if (Math.random() >= 0.5 && Math.random() < 0.75) {
                     zf_x = -1;
                     zf_y = -1;
                 } else {
                     zf_x = 1;
                     zf_y = -1;
                 }
             } else {}
         }
         if (uuid > 0 && uuid < 2) {
             setTimeout(addWarningMarker, 2000);
         }
     }

     /**
      * 删除domMarker
      */
     function deleteAll(obj) {
         startArert = false;
         uuid = 0
         //重置按钮选中状态
         resetBtnStatus();
         obj.classList.add('active');
         if (dmLayer) {
             dmLayer.removeAll();
             alertMars = [];
         }
     }

     /**
      * 
      * 删除某个节点
      */
     function deleteMarkerItem(markerid) {
         console.log(alertMars['marker_' + markerid])
        if (dmLayer) {
            dmLayer.removeMarker(alertMars['marker_' + markerid]);
            delete alertMars['marker_' + markerid]
        }
     }

     /**
      * 获取当前点击的marker
      * @param {uuid} id 
      */
     function getCurMarkerIndex(id) {
         var curMark = alertMars['marker_' + id];
         if (!popMarker['popMarker_' + id]) addPopInfoWindow(curMark, id);
     }


     /**
      * 移除其他按钮选中状态
      */
     function resetBtnStatus() {
         var btnsDom = document.getElementById('btnsGroup').children;
         for (var i = 0; i < btnsDom.length; i++) {
             var btnDom = btnsDom[i];
             if (btnDom.classList.contains('active')) {
                 btnDom.classList.remove('active');
             }
         }
     }

     /**
      *添加独立信息窗口
      * @param {*} marker 
      * @param {*} markerid 
      */

     function addPopInfoWindow(marker, markerid) {
         if (marker) {
             //添加独立信息窗
             var markerVideoItem = popVideoList[markerid] ? popVideoList[markerid] : videoList[0];
             var conthtml = '<div id="popMarker_' + markerid + '" class="popMarker-video">' +
                 '<div class="popMarker-title">' + markerVideoItem.title + '（NO：' + markerVideoItem.no + '）</div>' +
                 '<video src="' + markerVideoItem.video + '"  loop="loop" autoplay="autoplay"></video>' +
                 '<div class="popMarker-desc">报警时间：' + markerVideoItem.ctime + '</div>' +
                 '<div class="popMarker-desc">报警地点：' + markerVideoItem.address + '【' + markerVideoItem.addressId + '】</div>' +
                 '<div class="popMarker-desc">报警原因：' + markerVideoItem.desc + '</div>' +
                 '<div class="popMarker-footer">' +
                 '<div class="popMarker-btn" onClick="sureSubmit(' + markerid + ')">确认</div><div class="popMarker-btn" onClick="handleUserSubmit(' + markerid + ')">处理</div>'
             '</div></div>'
             var ctlOpt = {
                 //添加信息框的地图位置坐标
                 mapCoord: {
                     //设置弹框的x轴
                     x: marker.x,
                     //设置弹框的y轴
                     y: marker.y,
                     //控制信息框距离地图的高度
                     height: 6,
                     //设置弹框位于的楼层,当前聚焦楼层
                     groupID: 1
                 },
                 //设置弹框的宽度
                 width: 300,
                 //设置弹框的高度px
                 height: 330,
                 marginTop: 20,
                 //设置弹框的内容
                 content: conthtml,
                 closeCallBack: function () {
                     //信息窗点击关闭操作
                     console.log('信息窗关闭了！');
                     $("#popMarker_" + markerid).remove()
                     delete popMarker['popMarker_' + markerid];
                 }
             };

             //添加弹框到地图上，独立信息窗
             popMarker['popMarker_' + markerid] = new fengmap.FMPopInfoWindow(map, ctlOpt);
         }
     }

     // 关闭 模型上的弹窗
     function closePopMarker(markerid) {
         popMarker['popMarker_' + markerid].close();
     }

     // 关闭人员弹窗
     function closePopInfoWindow() {
         document.getElementById('popInfoWindow').style.display = 'none';
         document.getElementById('popInfoOffice').style.display = 'none';
     }
     // popMarker - btn - 确认

     function sureSubmit(markid) {
        closePopMarker(markid);
        deleteMarkerItem(markid)
     }

     // popMarker - btn - 处理
     var userItemHtml = '';

     function handleUserSubmit(markid) {
        for (let i = 0; i < userList.length; i++) {
            userItemHtml += '<li class="item-user" onClick="handleSubmit(' + markid + ')">' + userList[i].name + '(id:' + userList[i].id + ')</li>'
        }
         document.getElementsByClassName('popInfoWindow-ul')[0].innerHTML = userItemHtml;
         document.getElementById('popInfoWindow').style.display = 'flex';
     }

     function handleSubmit(markid) {
        document.getElementById('popInfoWindow').style.display = 'none';
        $("#modeInfoPop").addClass('animated slideInDown shoModal');
        closePopMarker(markid);
        deleteMarkerItem(markid)
        setTimeout(() => {
            $("#modeInfoPop").removeClass('slideInDown shoModal');
        }, 2500);
     }