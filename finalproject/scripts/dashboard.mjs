import addClient from "./dashboard/add-client.mjs";
import clientsOptions from "./dashboard/clients-options.mjs";
import fetchClients from "./dashboard/fetch-clients.mjs";
import fetchTechnicians from "./dashboard/fetch-technicians.mjs";
import logOut from "./dashboard/log-out.mjs";
import roleVerificator from "./dashboard/role-verificator.mjs";
import toggleForms from "./dashboard/toggle-forms.mjs";

const clientsUrl = './data/clients.json'
const techniciansUrl = './data/users.json'


logOut()
roleVerificator()
toggleForms()
roleVerificator()
fetchClients(clientsUrl)
clientsOptions()
fetchTechnicians(techniciansUrl)
addClient()