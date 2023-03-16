import axios from "axios";

export const fetchArticlesWithQuery = async searchQuery => {
    const response = await axios.get(`/search?query=${searchQuery}`);
    return await response.data.hits;
};



