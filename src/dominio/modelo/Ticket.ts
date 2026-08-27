export interface Ticket {  
    description: string
    date: string
    author: string
}

const createTicket = (body: Ticket) => {
    return {
        descripcion: body.description,
        fecha: body.date,
        autor: body.author
    }
}

const ticket: Ticket = {
    date: Date.now().toString(),
    description: "El sitema está fallando",
    author: "Cualquier persona"
}


createTicket(ticket)