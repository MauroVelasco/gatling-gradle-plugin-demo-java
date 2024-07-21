var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "11",
        "ok": "11",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "479",
        "ok": "479",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles1": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "percentiles2": {
        "total": "760",
        "ok": "760",
        "ko": "-"
    },
    "percentiles3": {
        "total": "824",
        "ok": "824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "845",
        "ok": "845",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10,
    "percentage": 90.9090909090909
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 9.090909090909092
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.83",
        "ok": "1.83",
        "ko": "-"
    }
},
contents: {
"req_get-phone-name-390461799": {
        type: "REQUEST",
        name: "GET Phone Name",
path: "GET Phone Name",
pathFormatted: "req_get-phone-name-390461799",
stats: {
    "name": "GET Phone Name",
    "numberOfRequests": {
        "total": "11",
        "ok": "11",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "479",
        "ok": "479",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles1": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "percentiles2": {
        "total": "760",
        "ok": "760",
        "ko": "-"
    },
    "percentiles3": {
        "total": "824",
        "ok": "824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "845",
        "ok": "845",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10,
    "percentage": 90.9090909090909
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 9.090909090909092
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.83",
        "ok": "1.83",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
