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

function createTimeOutEvent(obj, dateStamp) {
    const dateAndTIme = dateStamp.split(" ")

    obj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateAndTIme[1]),
        date: dateAndTIme[0]
    })
    return obj
}

function hoursWorkedOnDate(obj, date) {
    const timeIn = obj.timeInEvents.find(event => event.date === date)
    const timeOut = obj.timeOutEvents.find(event => event.date === date)

    const timeInHour = (timeIn.hour)
    const timeOutHour = (timeOut.hour)

    const hours = Math.abs(timeInHour - timeOutHour)/100

    return hours

}


function wagesEarnedOnDate(obj, date) {
    const hours = hoursWorkedOnDate(obj, date)
    return hours * obj.payPerHour
}


function allWagesFor(obj) {
    let salaryList = []
    for (let x=0; x< obj.timeInEvents.length; x++) {
        for (let y=0; y< obj.timeOutEvents.length; y++) {
            if (obj.timeInEvents[x].date === obj.timeOutEvents[y].date) {
                const date = obj.timeInEvents[x].date
                salaryList.push(wagesEarnedOnDate(obj, date))
            }
        }
    }
    
   const totalSalay =  salaryList.reduce((acc, cur) => acc + cur, 0)
   return totalSalay
}

function calculatePayroll(arr) {
    let salaryList = []
    arr.forEach(employee => salaryList.push(allWagesFor(employee)))

    const totalSalay =  salaryList.reduce((acc, cur) => acc + cur, 0)
    return totalSalay

}
