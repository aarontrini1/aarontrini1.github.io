export async function fetchCat() {
    const response = await fetch("https://cataas.com/cat?height=500");

    const data = await response.json();

    return data;
}