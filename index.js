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