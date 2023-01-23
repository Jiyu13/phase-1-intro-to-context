// Your code here

function createEmployeeRecord(arr) {

    const firstName = arr[0]
    const familyName = arr[1]
    const title = arr[2]
    const payPerHour = arr[3]

    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}


function createEmployeeRecords(arr) {
    let newArr = []
    for (let x = 0; x < arr.length ; x++) {
        newArr.push(createEmployeeRecord(arr[x]))
    }
    return newArr
}


function createTimeInEvent(obj, dateStamp) {
    const dateAndTIme = dateStamp.split(" ")
    
    const date = dateAndTIme[0]
    const hour= dateAndTIme[1]

    obj["timeInEvents"].push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return obj
}