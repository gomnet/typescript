module DynamicTypes {
    var person = 'David Gomnet';
    var person2: string;
    person2 = 'David Gomnet';
    console.log(person2.substring(1,4));

    var person3 = {
        name: 'Leonardo',
        age: 25
    };
    console.log(person3.name.substring(1, 4));
} 