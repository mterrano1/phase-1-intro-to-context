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
    let [date, hour] = dateStamp.split(' ')
    const timeObj = {
    type: 'TimeIn',
    hour: parseInt(hour),
    date: date
}
object.timeInEvents.push(timeObj)
return object
}

function createTimeOutEvent(object, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    const timeObj = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    }
    object.timeOutEvents.push(timeObj)
    return object
}

function hoursWorkedOnDate(object, date){
    let findTimeInDate = object.timeInEvents.find(obj => obj.date === date);
    let startTime = findTimeInDate.hour;
    let findTimeOutDate = object.timeOutEvents.find(obj => obj.date === date);
    let endTime = findTimeOutDate.hour;
    return (endTime - startTime) / 100
}

function wagesEarnedOnDate(object, date){
    let hoursWorked = hoursWorkedOnDate(object, date);
    return hoursWorked * object.payPerHour
}

function allWagesFor(object){
    let allTimeInDates = object.timeInEvents.map(findDates => findDates.date);
    let allTimeOutDates = object.timeOutEvents.map(findDates => findDates.date);


    allTimeInDates.forEach(date => wagesEarnedOnDate(object, date))


//     console.log(allTimeInDates)
//     console.log(allTimeOutDates)
}