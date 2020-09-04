//voorbeeld
/*
const posts = [
  { title: "post one", body: "This is post one" },
  { title: "post two", body: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost({ title: "post three", body: "This is post three" }, getPosts);
*/

const huiswerkMaken = (vak, callback) => {
  setTimeout(() => {
    console.log(`ok,ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
  }, 1000);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("engels", klaarMetHuiswerk);
