

export const initialState = {
    status: 'checking', //checking not-authenticated authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated', //checking not-authenticated authenticated
    uid: '123abc',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://foto.jpg',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'not-authenticated', //checking not-authenticated authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: '123abc',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://foto.jpg',
}
