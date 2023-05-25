export const datesPeople = async () => {
    const apiUrl = 'https://swapi.dev/api/people/1/';
    try {
        const databasePeople = await fetch(apiUrl, { method: 'GET' });
        const jsonDataPeople = await databasePeople.json();
        const results = jsonDataPeople.results;

        const newArrayPeople = results.map((result) => {
            return {
                name: result.name,
                eye_color: result['eye_color'],
                hair_color: result['hair_color'],
                height: result.height,
            };
        });
        return newArrayPeople;
    } catch (error) {
        console.error(error);
    }
};
