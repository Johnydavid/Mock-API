const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    console.log("countries", countries);
  } catch (error) {
    console.log('Error in fetching countries', error);
  }
};

fetchCountries();
