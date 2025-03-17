// src/modules/campus-card/index.ts

import { getCardBalance } from './api';
import CardBalance from './components/CardBalance';
import CardCharge from './components/CardCharge';
import ElectricityCharge from './components/ElectricityCharge';
import NetworkCharge from './components/NetworkCharge';

const CampusCardModule = {
    getCardBalance,
    CardBalance,
    CardCharge,
    ElectricityCharge,
    NetworkCharge,
};

export default CampusCardModule;