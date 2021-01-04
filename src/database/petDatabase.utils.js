import { db } from '../firebase';

// async function getData(){
//     const pets = await db
//             .collection('pets')
//             .get()
//             .then(querySnapshot => {
//                 console.log(querySnapshot.data());
//             });
// }

async function fetchData() {
    let petData = [];
    const pets = await db
        .collection('pets')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                // console.log('id:', documentSnapshot.id, documentSnapshot.data());
                let item = {
                    id: documentSnapshot.id,
                    title: documentSnapshot.data().title,
                    age: documentSnapshot.data().age,
                    breed: documentSnapshot.data().breed,
                }
                petData.push(item);
            });
        });
    return petData;
}

function addPet(props) {
    db
        .collection('pets')
        .add(
            {
                title: props.title,
                age: props.age,
                breed: props.breed
            }
        )
        .then(()=>{console.log(`Pet added!`)})
}

function deletePet(id) {
    db
        .collection('pets')
        .doc(id)
        .delete()
        .then(()=>{console.log(`Pet deleted!`)})
}

export { fetchData, addPet, deletePet };