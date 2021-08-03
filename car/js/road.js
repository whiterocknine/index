
$(function(){


    initMap();





})
//地图界面高度设置



//加载地图
function initMap(){
// 百度地图API功能
var map = new BMap.Map("map_div");
map.centerAndZoom(new BMap.Point(120.81786,27.854364), 22);

var myP1 = new BMap.Point(120.733833,27.973956);    //起点
var myP2 = new BMap.Point(120.818384,27.853822);    //终点
var myIcon = new BMap.Icon("img/car.png", new BMap.Size(32, 70), {    //小车图片
    //offset: new BMap.Size(0, -5),    //相当于CSS精灵
    imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
  });
var driving2 = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});    //驾车实例
driving2.search(myP1, myP2);    //显示一条公交线路

window.run = function (){
    var driving = new BMap.DrivingRoute(map);    //驾车实例
    driving.search(myP1, myP2);
    driving.setSearchCompleteCallback(function(){
        var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组
        var paths = pts.length;    //获得有几个点

        var carMk = new BMap.Marker(pts[0],{icon:myIcon});
        map.addOverlay(carMk);
        i=0;
        function resetMkPoint(i){
            carMk.setPosition(pts[i]);
            if(i < paths){
                setTimeout(function(){
                    i++;
                    resetMkPoint(i);
                },100);
            }
        }
        setTimeout(function(){
            resetMkPoint(5);
        },100)

    });
}

    setTimeout(function(){
        run();
    },1500);
    
}





