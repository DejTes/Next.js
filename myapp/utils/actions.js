import dogs from './data.json'
// function to get all dogs
export const getDogs = () => dogs;

// function to  create a new dog
export const createDog = (newDog) => dogs.push(newDog);

// function to update a dog
export const updateDog = (updatedDog, index) => {
    dogs[index] = updatedDog;
    return dogs[index];
}

// function to delete a dog
export const destroyDog = (index) => {
    return dogs.splice(index, 1);
}

