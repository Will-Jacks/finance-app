const getBills = async (url) => {

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data) return data;
    } catch (e) { console.error(e); }
}

export default getBills;