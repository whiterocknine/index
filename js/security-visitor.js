var visitorList = [{
    id: '001',
    imgSys: 'images/face/sys/id001.jpg',
    imgNow: 'images/face/id001.jpg',
    ctime: '17:50:41',
    sort: 4,
    match: '95%',
    nextShowTime: 300

},
{
    id: '002',
    imgSys: 'images/face/sys/id002.jpg',
    imgNow: 'images/face/id002.jpg',
    ctime: '17:50:41',
    sort: 6,
    match: '95%',
    nextShowTime: 300
},
{
    id: '003',
    imgSys: 'images/face/sys/id003.jpg',
    imgNow: 'images/face/id003.jpg',
    ctime: '17:50:41',
    sort: 8,
    match: '95%',
    nextShowTime: 6800
},
{
    id: '004',
    imgSys: 'images/face/sys/id004.jpg',
    imgNow: 'images/face/id004.jpg',
    ctime: '17:50:41',
    sort: 3,
    match: '95%',
    nextShowTime: 7500
},
{
    id: '005',
    imgSys: 'images/face/sys/id005.jpg',
    imgNow: 'images/face/id005.jpg',
    ctime: '17:50:41',
    sort: 2,
    match: '95%',
    nextShowTime: 200
},
{
    id: '006',
    imgSys: 'images/face/sys/id006.jpg',
    imgNow: 'images/face/id006.jpg',
    ctime: '17:50:41',
    sort: 7,
    match: '95%',
    nextShowTime: 1600
},
{
    id: '007',
    imgSys: 'images/face/sys/id007.jpg',
    imgNow: 'images/face/id007.jpg',
    ctime: '17:50:41',
    sort: 1,
    match: '95%',
    nextShowTime: 200
},
{
    id: '008',
    imgSys: 'images/face/sys/id008.jpg',
    imgNow: 'images/face/id008.jpg',
    ctime: '17:50:41',
    sort: 5,
    match: '95%',
    nextShowTime: 3000
}
]

var newVisitList = visitorList.sort(compare("sort"))

function compare(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
reloadVisitData();
function reloadVisitData() {
    var visitHtml = ''
    for (let i = 0; i < newVisitList.length; i++) {
        visitHtml += showVisitItemHtml(newVisitList[i]);
    }
    jQuery(".showVis ul").html(visitHtml);
}

function showVisitItemHtml(data, type) {
    var txt = type === 'line' ? '' :'匹配成功'
    var timetxt = type === 'line' ? '匹配成功' :data.ctime
    var faceHtml =
        '<li class="visitors-item">' +
        '<div class="visitors-right">' +
        '<div class="visitors-name"><span>员工id：'+data.id+'</span> '+txt+'</div>' +
        '<div class="visitors-pic">' +
        '<i class="icon-visitorsStatus visitors-success"></i>' +
        '<img src="'+data.imgNow+'" alt="">' +
        '<img src="'+data.imgSys+'" alt="">' +
        '</div>' +
        '</div>' +
        '<div class="visitors-point"></div>' +
        '<div class="visitors-left">' +
        '<div class="visitors-time">'+timetxt+'</div>' +
        '<div class="visitors-match">相似度 '+data.match+'</div>' +
        '</div>' +
        '</li>';
    return faceHtml;
}

var len = newVisitList.length;
var showLineBox = [];
var isShowLine = true;
var visId = -1;
var videoCameraVis = document.getElementById("cameraVido"); 
var CamaraVideoTime = null;


function showCamaraVideo(){
    isShowLine=true
    document.getElementById('popInfoWindow2').style.display = 'flex';
    document.getElementsByClassName('showVis')[0].style.display = 'none';
    document.getElementsByClassName('showCameraVis')[0].style.display = 'block';
    videoCameraVis.currentTime = 0
    videoCameraVis.play(0);
    showTimeLine(3000);
}
function showTimeLine(time){
    if (!isShowLine) {
        clearTimeout(CamaraVideoTime);
    }
    CamaraVideoTime = setTimeout(() => {
        visId++;
        if (visId >= len) visId = 0;
        console.log(visId)
        if(showLineBox.length>=3){
            showLineBox.shift();
            $(".showCameraVis ul").find("li").eq(0).remove();
        }
        showLineBox.push(newVisitList[visId])
        $(".showCameraVis ul").append(showVisitItemHtml(newVisitList[visId], 'line'));
        // console.log(newVisitList[visId].nextShowTime)
        showTimeLine(newVisitList[visId].nextShowTime)
    }, time);
}


function closePopInfoCamera(){
    isShowLine = false;
    visId = -1;
    showLineBox = [];
    clearTimeout(CamaraVideoTime);
    videoCameraVis.pause();
    document.getElementsByClassName('showVis')[0].style.display = 'block';
    document.getElementsByClassName('showCameraVis')[0].style.display = 'none';
    document.getElementById('popInfoWindow2').style.display = 'none';
    $(".showCameraVis ul").html("");
}