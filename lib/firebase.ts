import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

const firebaseConfig = {
	apiKey: 'AIzaSyBWpSk9SCv8ex93XvE8pcUwh1ct2cQxT30',
	authDomain: 'udemy-8aaa6.firebaseapp.com',
	projectId: 'udemy-8aaa6',
	storageBucket: 'udemy-8aaa6.appspot.com',
	messagingSenderId: '4269739622',
	appId: '1:4269739622:web:6c643d9fb11981d01667a7',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

const courseStorageRefs = ref(storage, `/praktikum/course/${uuidv4()}`)

export { storage, courseStorageRefs }
