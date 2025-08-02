const response = {
    data: {
        id: 1,
        title: "Detructuring in javaScript",
        author: {
            name: "dev",
            email: "dev@gmail.com",
        },
    },
};
const extractData =({ data })=> {
    const { title, author } = data;
    const { name: authorName, email: authorEmail } = author
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`AuthorName: ${authorName}`);
    console.log(`AuthorEmail: ${authorEmail}`);
}
extractData(response);;