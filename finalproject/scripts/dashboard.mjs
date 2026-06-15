import addClient from "./dashboard/add-client.mjs";
import addService from "./dashboard/add-service.mjs";
import addTechnician from "./dashboard/add-technician.mjs";
import clientsOptions from "./dashboard/clients-options.mjs";
import comingServices from "./dashboard/comming-services.mjs";
import logOut from "./dashboard/log-out.mjs";
import roleVerificator from "./dashboard/role-verificator.mjs";
import techniciansOptions from "./dashboard/technicians-options.mjs";
import toggleForms from "./dashboard/toggle-forms.mjs";

roleVerificator()
logOut()
toggleForms()
clientsOptions()
techniciansOptions()
addClient()
addService()
addTechnician()
comingServices()