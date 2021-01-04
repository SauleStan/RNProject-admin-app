import { db } from '../firebase';

async function fetchMessageData() {
    let messageData = [];
    const messages = await db
        .collection('messages')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                let item = {
                    id: documentSnapshot.id,
                    fName: documentSnapshot.data().fName,
                    lName: documentSnapshot.data().lName,
                    phone: documentSnapshot.data().phone,
                    email: documentSnapshot.data().email,
                    other: documentSnapshot.data().other,
                    pet: {
                        id: documentSnapshot.data().pet.id,
                        title: documentSnapshot.data().pet.title,
                        age: documentSnapshot.data().pet.age,
                        breed: documentSnapshot.data().pet.breed
                    }
                }
                messageData.push(item);
            });
        });
    return messageData;
}

export { fetchMessageData };