// level: 1提示 2 异常 3 危急
var alarmInfoList = [{
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 1,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 0,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 2,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    },
    {
        id: 1,
        level: 0,
        title: '告警信息',
        address: '工厂贵金属堆料区 B-39',
        status: 0,
        ctime: '09/04 15:33',
    }
]

var total_level2 = 0
var total_level1 = 0
var total_level0 = 0;
var total_status0 = 0;
var total_status1 = 0;
var showNum = 0;


var className = ['alarmStatus-yellow', 'alarmStatus-orange', '']
var levelText = ['提示', '异常', '危急'];
var statusText = ['待处理', '已处理']
var showLevel = 'all';


reloadAlarmInfo();
// alarmBoxSlide()
function alarmBoxSlide (){

    $(function () {
        var visitNum = showNum >= 12 ? 12 : showNum
        $(".alarmBox-cont").slide({mainCell:".alarmBox-list ul",effect:"topLoop",autoPlay:true, vis: visitNum})
    })
  }
  function showAlarmLevel(level) {
    // 根据level等级显示对应内容
    showLevel = level;
    reloadAlarmInfo();
}
function reloadAlarmInfo() {
    var conhtml = '';
    showNum = 0;
    for (let i = 0; i < alarmInfoList.length; i++) {
        if (showLevel === 'all') {
            conhtml += getAlarmItem(alarmInfoList[i]);
            showNum++
        }
        else {
            if (alarmInfoList[i].level === showLevel) {
                conhtml += getAlarmItem(alarmInfoList[i]);
                showNum++
            }
        }
    }
    document.getElementById("alarmBoxList").innerHTML = '<ul>'+conhtml+'</ul>';
    alarmBoxSlide()
}


function getAlarmItem(data) {
    var itemhtml = '';
    var levelIndex = data.level
    var statusIndex = data.status
    itemhtml += '<li class="' + className[levelIndex] + '">' +
        '<span><span>' + levelText[levelIndex] + '</span></span>' +
        '<span class="alarmItem-name">' + data.address + '</span>' +
        '<span>' + statusText[statusIndex] + '</span>' +
        '<span>' + data.ctime + '</span></li>'
    return itemhtml
}

function alarmTotal() {
    console.log('计算')
    total_level2 = 0;
    total_level1 = 0;
    total_level0 = 0;
    total_status0 = 0;
    total_status1 = 0;

    for (let i = 0; i < alarmInfoList.length; i++) {
        if (alarmInfoList[i].level === 0) total_level0++;
        if (alarmInfoList[i].level === 1) total_level1++;
        if (alarmInfoList[i].level === 2) total_level2++;
        if (alarmInfoList[i].status === 0) total_status0++;
        if (alarmInfoList[i].status === 1) total_status1++;
    }

}