import { db } from '../firebase';

async function fetchMessageData() {
    let messageData = [];
    const messages = await db
        .collection('messages')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                // console.log('id:', documentSnapshot.id, documentSnapshot.data());
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

function addMessage(props) {
    db
        .collection('messages')
        .add(
            {
                // TODO: add data
            }
        )
        .then(() => { console.log(`Message added!`) })
}

function deleteMessage(id) {
    db
        .collection('messages')
        .doc(id)
        .delete()
        .then(() => { console.log(`Message deleted!`) })
}

export { fetchMessageData };