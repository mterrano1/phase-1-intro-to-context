// Your code here
function createEmployeeRecord(array){
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeRecord
}

function createEmployeeRecords(arrays){
    const employeeData = arrays.map(createEmployeeRecord)
    return employeeData
}

function createTimeInEvent(object, dateStamp){
    const timeObj = {
    type: 'TimeIn',
    hour: dateStamp.slice(11, 15),
    date: dateStamp.slice(0, 10)
}
object.timeInEvents.push(timeObj)
return object
}