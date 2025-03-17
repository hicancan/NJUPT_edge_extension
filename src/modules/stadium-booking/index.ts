// src/modules/stadium-booking/index.ts

import { getStadiums, bookStadium, getAnnouncements } from './api';
import StadiumBooking from './components/StadiumBooking';
import Announcements from './components/Announcements';

class StadiumBookingModule {
    constructor() {
        this.stadiums = [];
        this.announcements = [];
    }

    async init() {
        this.stadiums = await getStadiums();
        this.announcements = await getAnnouncements();
        this.render();
    }

    render() {
        const bookingComponent = new StadiumBooking(this.stadiums);
        const announcementsComponent = new Announcements(this.announcements);
        
        // Assuming there's a method to append components to the DOM
        this.appendToDOM(bookingComponent.render());
        this.appendToDOM(announcementsComponent.render());
    }

    appendToDOM(component) {
        // Logic to append the component to the DOM
        document.getElementById('app').appendChild(component);
    }
}

const stadiumBookingModule = new StadiumBookingModule();
stadiumBookingModule.init();