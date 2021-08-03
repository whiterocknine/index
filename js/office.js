// status:0 open 1 used
var officeData = [{
        name: '会议室一',
        status: 0,

    }, {
        name: '会议室二',
        status: 0,
    }, {
        name: '会议室三',
        status: 1,
    },
    {
        name: '会议室四',
        status: 0,

    }, {
        name: '会议室五',
        status: 1,
    }, {
        name: '会议室六',
        status: 1,
    }
];

reloadOffice()

function reloadOffice() {
    var conhtml = ''
    for (let i = 0; i < officeData.length; i++) {
        var status = Math.random() > 0.5 ? 1 : 0;
        conhtml += '<li>'
        conhtml += status === 0 ?  '<div class="office-status office-open" onclick="applyOffice('+i+')"><i class="icon-office"></i> ' : '<div class="office-status"><i class="icon-office icon-office-used"></i>'
        conhtml += '</div><span>' + officeData[i].name + '</span></li>';
    }
    document.getElementById("item-officeList").innerHTML = conhtml;
}


function applyOffice(index) {
    document.getElementById('popInfoOffice').style.display = 'flex';
    console.log(index)
}