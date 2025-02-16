export const getExcerpt = (content: string, wordLimit = 20) => {
    content = content
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    // Split by newline and take the first line
    const firstLine = content.split('\n')[0];
    
    // Split the first line into words
    const words = firstLine.split(' ');

    // Check if it exceeds the word limit
    if (words.length > wordLimit) {
        // Join only the first 20 words and add ellipsis
        return words.slice(0, wordLimit).join(' ') + '...';
    }

    return firstLine;
};
