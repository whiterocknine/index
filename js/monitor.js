var videoList = {
    'group1': [{
            name: '监控画面1',
            video: './video/2020-09-23 10-20-13_x264.mp4'
        },
        {
            name: '监控画面2',
            video: './video/2020-09-23 10-22-11_batch.mp4'
        },
        {
            name: '监控画面3',
            video: './video/2020-09-23 10-20-13_x264.mp4'
        },
        {
            name: '监控画面4',
            video: './video/2020-09-23 10-34-12_batch.mp4'
        },
        {
            name: '监控画面5',
            video: './video/2020-09-23 10-22-11_batch.mp4'
        },
        {
            name: '监控画面6',
            video: './video/2020-09-23 10-22-11_batch.mp4'
        },
        {
            name: '监控画面7',
            video: './video/2020-09-23 10-20-13_x264.mp4'
        },
        {
            name: '监控画面8',
            video: './video/2020-09-23 10-22-11_batch.mp4'
        },
        {
            name: '监控画面9',
            video: './video/2020-09-23 10-20-13_x264.mp4'
        }, {
            name: '监控画面10',
            video: './video/2020-09-23 10-22-11_batch.mp4'
        }, {
            name: '监控画面11',
            video: './video/2020-09-23 10-34-12_batch.mp4'
        }, {
            name: '监控画面12',
            video: './video/2020-09-23 10-20-13_x264.mp4'
        }
    ],
    'group2': [ {
        name: '周界东门2',
        video: './video/2020-09-23 10-20-13_x264.mp4'
    },
    {
        name: '周界东门2',
        video: './video/2020-09-23 10-22-11_batch.mp4'
    },
    {
        name: '周界东门2',
        video: './video/2020-09-23 10-20-13_x264.mp4'
    },
    {
        name: '周界东门2',
        video: './video/2020-09-23 10-20-13_x264.mp4'
    },
    {
        name: '周界东门2',
        video: './video/2020-09-23 10-22-11_batch.mp4'
    },
    {
        name: '周界东门2',
        video: './video/2020-09-23 10-20-13_x264.mp4'
    }, {
        name: '周界东门2',
        video: './video/2020-09-23 10-22-11_batch.mp4'
    }, {
        name: '周界东门2',
        video: './video/2020-09-23 10-20-13_x264.mp4'
    }, 
       
    ],
    'group3': [{
        name: '周界东门3',
        video: './video/2020-09-23 10-20-13_x264.mp4'
        }, {
            name: '周界东门3',
            video: './video/2020-09-23 10-22-11_batch.mp4'
        }, {
            name: '周界东门3',
            video: './video/2020-09-23 10-20-13_x264.mp4'
        }, {
            name: '周界东门3',
            video: './video/2020-09-23 10-20-13_x264.mp4'
        }
        
        ]

}


var curTabGroupName = 'group1';
var curGroupNum = 12
onInit()
function onInit() {
    var videohtmlcont = itemHtml(videoList[curTabGroupName], 12);
    document.getElementsByClassName('mainbox-video')[0].innerHTML = videohtmlcont;
}

function itemHtml(data, len) {
    var htmlCont = '';
    for (let i = 0; i < len; i++) {
        var videoName = data[i] ? data[i].name : '未定义'
        htmlCont += '<div class="video-item"><div class="panel">' +
            '<div class="item-name">' + videoName + '</div><div class="item-cont">';
        var videoCont = ""
        if(data[i]) videoCont = '<video src="' + data[i].video + '" loop="loop" autoplay="autoplay"></video>';
        htmlCont +=  videoCont + '</div></div></div></div>'
    }
    return htmlCont;
}

function changeTab(type) {
    var num = curTabGroupName === 'group1' ? 1 : curTabGroupName === 'group2' ? 2 : 3
    if (type === 'prev') curTabGroupName = num === 1 ? 'group3' : 'group' + (num - 1);
    else if (type === 'next') curTabGroupName = num === 3 ? 'group1' : 'group' + (num + 1);
    showVideo(2, curGroupNum) 
}

function showVideo(i, num) {
    $(".btn-videoShow").removeClass('active');
    $(".btn-videoShow").eq(i).addClass('active');
    curGroupNum = num
    switch (num) {
        case 4:
            document.getElementsByClassName('mainbox-video')[0].className = 'mainbox-video videoShow-4'
            break;
        case 9:
            document.getElementsByClassName('mainbox-video')[0].className = 'mainbox-video videoShow-9'
            break;
        case 12:
            document.getElementsByClassName('mainbox-video')[0].className = 'mainbox-video';
            break;
        default:
            document.getElementsByClassName('mainbox-video')[0].className = 'mainbox-video';
            break;
    }
    document.getElementsByClassName('mainbox-video')[0].innerHTML = itemHtml(videoList[curTabGroupName], num);
}