import addClient from "./dashboard/add-client.mjs";
import addService from "./dashboard/add-service.mjs";
import addStock from "./dashboard/add-stock.mjs";
import addTechnician from "./dashboard/add-technician.mjs";
import clientsOptions from "./dashboard/clients-options.mjs";
import comingServices from "./dashboard/comming-services.mjs";
import roleVerificator from "./dashboard/role-verificator.mjs";
import techniciansOptions from "./dashboard/technicians-options.mjs";
import toggleForms from "./dashboard/toggle-forms.mjs";
import hamburguerMenu from "./hamburguer-menu.mjs";
import logOut from "./log-out.mjs";

roleVerificator()
hamburguerMenu()
logOut()
toggleForms()
addClient()
addService()
addTechnician()
addStock()
clientsOptions()
techniciansOptions()
comingServices()