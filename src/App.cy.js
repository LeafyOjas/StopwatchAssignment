import React from "react";
import App from "./App";
import { mount } from 'cypress/react18'

describe('Stopwatch ',()=>{
    beforeEach(()=>{
        mount(<App/>)
    })

    it('it should check if play button is active and others are inactive',()=>{
        cy.get('[data-test-id="play"]').should('not.be.disabled')
        cy.get('.btn').eq(0).nextAll().should('be.disabled')
    })

    it('it should check on clicking play button becomes active and others inactive',()=>{
        const playBtn=cy.get('[data-test-id="play"]')
        playBtn.click();
        playBtn.should('be.disabled')
        playBtn.nextAll().should('not.be.disabled')
    })

    it('it should check the timer is 5 seconds after pressing play button',()=>{
        const playBtn=cy.get('[data-test-id="play"]')
        const stopBtn=cy.get('.btn').eq(1)
        playBtn.click();
        cy.wait(5000);
        stopBtn.click()
        cy.get('span').eq(0).invoke('text').should('contain','0')
        cy.get('span').eq(1).invoke('text').should('equal','5')
    })

    it('it should check the lap button and play button is disabled after pressing the stop button',()=>{
        const playBtn=cy.get('[data-test-id="play"]');
        const stopBtn=cy.get('.btn').eq(1)
        const lapBtn=cy.get('.btn').eq(3)
        playBtn.click()
        cy.wait(1000)
        lapBtn.should('not.be.disabled')
        stopBtn.click()
        lapBtn.should('be.disabled')
    })

    it('it should reset the timer on pressing reset button',()=>{
        const playBtn=cy.get('[data-test-id="play"]');
        const reset=cy.get('.btn').eq(2)
        playBtn.click()
        cy.wait(5000)
        reset.click()
        cy.get('span').eq(0).invoke('text').should('contain','0')
        cy.get('span').eq(1).invoke('text').should('equal','0')
        playBtn.nextAll().should('be.disabled')

    })

    it('it should display laps on pressing lap',()=>{
        const playBtn=cy.get('[data-test-id="play"]');
        const stopBtn=cy.get('.btn').eq(1);
        const lapBtn=cy.get('.btn').eq(3)
        playBtn.click()
        cy.wait(2000)
        lapBtn.click()
        stopBtn.click()
        cy.get('.laps').should('be.visible')
    })
    

})