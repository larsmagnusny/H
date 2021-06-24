import React, { Component } from 'react';
import Select from 'react-select'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

import './Computer.css';

library.add(faDesktop);

const CPUOptions = [
    {value: 1, label: '200Mhz'},
    {value: 2, label: '600Mhz'},
    {value: 3, label: '1 Ghz'},
    {value: 4, label: '2 Ghz'},
    {value: 5, label: '4 Ghz'},
    {value: 6, label: '6 Ghz'},
    {value: 7, label: '10 Ghz'},
    {value: 8, label: '16 Ghz'},
    {value: 9, label: '24 Ghz'}
];

const RAMOptions = [
    {value: 1, label: '128MB'},
    {value: 2, label: '256MB'},
    {value: 3, label: '1GB'},
    {value: 4, label: '4GB'},
    {value: 5, label: '16GB'},
    {value: 6, label: '32GB'},
    {value: 7, label: '64GB'},
    {value: 8, label: '128GB'},
    {value: 9, label: '256GB'},
    {value: 10, label: '1TB'}
];

const HDDOptions = [
    {value: 1, label: '1GB'},
    {value: 2, label: '50GB'},
    {value: 3, label: '150GB'},
    {value: 4, label: '500GB'},
    {value: 5, label: '1TB'},
    {value: 6, label: '2TB'},
    {value: 7, label: '10TB'},
    {value: 8, label: '50TB'},
    {value: 9, label: '250TB'},
    {value: 10, label: '500TB'},
    {value: 11, label: '1PB'}
];

class Computer extends Component
{
    constructor(){
        super();
    }

    render(){
        const {title} = this.props;

        return(
        <div className="computerNode">
            <div className="iconContainer">
                <FontAwesomeIcon icon="desktop" size="3x" />
            </div>
            <div className="computerContents">
                <h3>{title}</h3>
                <Select options={CPUOptions} />
                <Select options={RAMOptions} />
                <Select options={HDDOptions} />
            </div>
        </div>);
    }
}

export default Computer;