module.exports = () => {

    const people = [{
            Name: "Mark",
            Age: 20,
            Country: "America"
        },
        {
            Name: "Kalai",
            Age: 22,
            Country: "India"
        },
        {
            Name: "Mery Jo",
            Age: 25,
            Country: "Canada"
        },
        {
            Name: "Jo",
            Age: 23,
            Country: "Portugal"
        },
        {
            Name: "Soul",
            Age: 26,
            Country: "Japan"
        }
    ];

    let output = `<h2>People</h2>`;

    Array.from(people).forEach((person) => {
        output += `
            <ul>
                <li>Name: ${person.Name}</li>
                <li>Age: ${person.Age}</li>
                <li>Country: ${person.Country}</li>
            </ul>
        `;
    });

    window.document.getElementById('append').innerHTML = output;
};