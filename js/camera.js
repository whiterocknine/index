var facePeopleList = [{
    id: '001',
    imgSys: '/images/face/sys/id001.jpg',
    imgNow: '/images/face/id001.jpg',
    startTime: 11,
    sort: 4,
    show: false
},
{
    id: '002',
    imgSys: '/images/face/sys/id002.jpg',
    imgNow: '/images/face/id002.jpg',
    startTime: 15,
    sort: 6,
    show: false
},
{
    id: '003',
    imgSys: '/images/face/sys/id003.jpg',
    imgNow: '/images/face/id003.jpg',
    startTime: 17,
    sort: 8,
    show: false
},
{
    id: '004',
    imgSys: '/images/face/sys/id004.jpg',
    imgNow: '/images/face/id004.jpg',
    startTime: 3,
    sort: 3,
    show: false
},
{
    id: '005',
    imgSys: '/images/face/sys/id005.jpg',
    imgNow: '/images/face/id005.jpg',
    startTime: 3,
    sort: 2,
    show: false
},
{
    id: '006',
    imgSys: '/images/face/sys/id006.jpg',
    imgNow: '/images/face/id006.jpg',
    startTime: 15,
    sort: 7,
    show: false
},
{
    id: '007',
    imgSys: '/images/face/sys/id007.jpg',
    imgNow: '/images/face/id007.jpg',
    startTime: 3,
    sort: 1,
    show: false
},
{
    id: '008',
    imgSys: '/images/face/sys/id008.jpg',
    imgNow: '/images/face/id008.jpg',
    startTime: 11,
    sort: 5,
    show: false
}
]

var newList = facePeopleList.sort(compare("sort"))

function compare(property) {
return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
}
}

console.log(newList)


/**
* 对视频时间进行监听
*/
var videoCurTime = 0;
var vid = document.getElementById("faceVideo");

var showPeople = [];
vid.addEventListener("timeupdate", getCurTime);

function getCurTime() {
isFull()
if (vid.currentTime === 0) {
    videoCurTime = 0;
    // document.getElementById("faceBox").innerHTML = '';
    facePeopleList.forEach(function (item) {
        item.show = false;
    })
}
for (let i = 0; i < facePeopleList.length; i++) {
    if (parseInt(vid.currentTime) === facePeopleList[i].startTime && !facePeopleList[i].show) {
        isFull()
        facePeopleList[i].show = true;
        showPeople.push(facePeopleList[i]);
        showImgItemHtml(facePeopleList[i])
    }
}
}

function isFull(){
if (showPeople.length > 5) {
    showPeople.shift()
    document.getElementById("faceBox").removeChild(document.getElementById("faceBox").getElementsByTagName('li')[0])
}
}
function showImgItemHtml(data) {
var faceHtml =
    '<li>' +
    '<div class="faceImage-sys"><img src="' + data.imgSys + '" alt=""></div>' +
    '<div class="faceImage-now"><img src="' + data.imgNow + '" alt=""></div>' +
    '</li>';
//document.getElementById('faceBox').insertAdjacentHTML('beforeEnd', faceHtml);
document.getElementById('faceBox').insertAdjacentHTML('beforeEnd', faceHtml);
}