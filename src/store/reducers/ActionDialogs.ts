

export type Messages = {
    id: number
    text: string;
    Iuser: boolean;
}

export type typeDialogs = {
    id: number;
    name: string;
    messages: Messages[];
}




const dialogs: typeDialogs[] = [{
    id: 1,
    name: 'greg',
    messages: [{
        id: 1,
        text: 'This my message',
        Iuser: true,
    },
    {
        id: 2,
        text: 'This my message',
        Iuser: false,
    },
    {
        id: 3,
        text: 'This my message',
        Iuser: true,
    },{
        id: 4,
        text: 'This my message',
        Iuser: false,
    }]
},{
    id: 2,
    name: 'Iliya',
    messages: [{
        id: 1,
        text: 'IliyaIliya Iliya',
        Iuser: true,
    },
    {
        id: 2,
        text: ' Iliya Iliya',
        Iuser: false,
    },
    {
        id: 3,
        text: ' Iliya Iliya',
        Iuser: false,
    },
    {
        id: 4,
        text: ' Iliya Iliya',
        Iuser: false,
    }]
},{
    id: 3,
    name: 'Boris',
    messages: [{
        id: 1,
        text: 'I am Boris',
        Iuser: true,
    },
    {
        id: 2,
        text: ' I know',
        Iuser: false,
    },
    {
        id: 3,
        text: ' Are you doing?',
        Iuser: false,
    },
    {
        id: 4,
        text: 'Can you to speak?',
        Iuser: false,
    },
    {
        id: 5,
        text: ' Yes',
        Iuser: true,
    },
    {
        id: 6,
        text: ' but i dont to talk with you',
        Iuser: true,
    }]
}]

export {dialogs}