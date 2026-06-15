import roleVerificator from "./dashboard/role-verificator.mjs";
import hamburguerMenu from "./hamburguer-menu.mjs";
import logOut from "./log-out.mjs";
import toggleForms from "./dashboard/toggle-forms.mjs";

import clientsOptions from "./dashboard/clients-options.mjs";
import techniciansOptions from "./dashboard/technicians-options.mjs";
import comingServices from "./dashboard/comming-services.mjs";

import addClient from "./dashboard/add-client.mjs";
import addTechnician from "./dashboard/add-technician.mjs";
import addService from "./dashboard/add-service.mjs";
import addStock from "./dashboard/add-stock.mjs";

roleVerificator();

hamburguerMenu();
logOut();
toggleForms();

clientsOptions();
techniciansOptions();
comingServices();

addClient();
addTechnician();
addService();
addStock();