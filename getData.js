import axios from "axios";

const getData = async(number) => {
    const { data: user } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + number
    );
    const { data: post } = await axios(
        "https://jsonplaceholder.typicode.com/posts/" + number
    );

    user.posts = [{...post }];
    console.log(user);
};
getData(3);