let animals: string[] = ["dog", "cat", "cheetah"];

for(const animal of animals){
    console.log(animal);
}

console.log(`A ${animals[0]} would make a great pet`);
console.log(`A ${animals[1]} would work as a great pet`);
console.log(`A ${animals[2]} would fastest in all pets`);

animals[0] = "A " + animals[0] + " would make a great pet";

console.log(`\n\n${animals[0]}`);
console.log("Any of these animals would make a great pet");