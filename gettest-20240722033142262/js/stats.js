var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "13",
        "ok": "13",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles1": {
        "total": "296",
        "ok": "296",
        "ko": "-"
    },
    "percentiles2": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "percentiles3": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "percentiles4": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 11,
    "percentage": 84.61538461538461
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 15.384615384615385
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
        "total": "2.17",
        "ok": "2.17",
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
        "total": "13",
        "ok": "13",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles1": {
        "total": "296",
        "ok": "296",
        "ko": "-"
    },
    "percentiles2": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "percentiles3": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "percentiles4": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 11,
    "percentage": 84.61538461538461
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 15.384615384615385
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
        "total": "2.17",
        "ok": "2.17",
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
