const people = [
    {
        name: "Alice",
        address: {
            city: "New York",
            street: {
                name: "Broadway",
                number: 123
            }
        }
    },
    {
        name: "Bob",
        address: {
            city: "Los Angeles",
            street: {
                name: "Sunset Boulevard",
                number: 456
            }
        }
    }];
    
let [{name:firstName,address:{city:firstCity,street:{name:firstStreet}}},{name:SecondName,address:{city:SecondCity,street:{name:SecondStreet}}}] = people

let information = [`${firstName} lives in ${firstCity} on ${firstStreet}`,`${SecondName} lives in ${SecondCity} on ${SecondStreet}`]
console.log(information)