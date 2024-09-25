// Code your solution in this file!
const returnFirstTwoDrivers = function (scuberDrivers) {
return scuberDrivers.slice(0,2)
}
const returnLastTwoDrivers = function (scuberDrivers) {
    return scuberDrivers.slice(2,4)
}
const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]

function createFareMultiplier(interger) {
    return function(fare) {
        return (interger * fare) 
    }

}
const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2
}
const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3
}
function selectDifferentDrivers(scuberDrivers, selectFunction) {
    return selectFunction(scuberDrivers)
}
