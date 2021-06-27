import React, { Component } from 'react';
import Select from 'react-select'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDesktop, faMicrochip, faMemory, faPlus, faFilm, faNetworkWired, faHdd} from "@fortawesome/free-solid-svg-icons";

import './Computer.css';

library.add(faDesktop);
library.add(faMicrochip);
library.add(faMemory);
library.add(faPlus);
library.add(faFilm);
library.add(faNetworkWired);
library.add(faHdd);

class Computer extends Component
{
    constructor(props){
        super(props);
    }

    render(){
        const {data} = this.props;

        const freeCpuSlots = Array.from({length: data.cpuSlots -  data.cpus.length}, (v, i) => i);
        const freeRamSlots = Array.from({length: data.ramSlots -  data.rams.length}, (v, i) => i);
        const freeHddSlots = Array.from({length: data.sataSlots -  data.hdds.length}, (v, i) => i);
        const freePciSlots = Array.from({length: data.pciSlots -  data.gpus.length - data.nets.length}, (v, i) => i);

        return(
        <div className="computerNode">
            <div className="iconContainer">
                <FontAwesomeIcon icon="desktop" size="3x" />
            </div>
            <div className="computerContents">
                <h3>{data.name}</h3>
                <div className="slots">
                    <label>CPU slots</label>
                    <div className="slotsContent">
                        {data.cpus.map((cpu) => (
                            <div className="slot" title={cpu.name}>
                                <FontAwesomeIcon icon="microchip" />
                            </div>
                        ))}
                        {freeCpuSlots.map(() => (
                            <div className="slot">
                                <FontAwesomeIcon icon="plus" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slots">
                    <label>RAM slots</label>
                    <div className="slotsContent">
                        {data.rams.map((ram) => (
                            <div className="slot" title={ram.name}>
                                <FontAwesomeIcon icon="memory" />
                            </div>
                        ))}
                        {freeRamSlots.map(() => (
                            <div className="slot">
                                <FontAwesomeIcon icon="plus" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slots">
                    <label>HDD slots</label>
                    <div className="slotsContent">
                        {data.hdds.map((hdd) => (
                            <div className="slot" title={hdd.name}>
                                <FontAwesomeIcon icon="hdd" />
                            </div>
                        ))}
                        {freeHddSlots.map(() => (
                            <div className="slot">
                                <FontAwesomeIcon icon="plus" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slots">
                    <label>GPU slots</label>
                    <div className="slotsContent">
                        {data.gpus.map((ram) => (
                            <div className="slot" title={ram.name}>
                                <FontAwesomeIcon icon="film" />
                            </div>
                        ))}
                        {freePciSlots.map(() => (
                            <div className="slot">
                                <FontAwesomeIcon icon="plus" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slots">
                    <label>Network card slots</label>
                    <div className="slotsContent">
                        {data.nets.map((ram) => (
                            <div className="slot" title={ram.name}>
                                <FontAwesomeIcon icon="network-wired" />
                            </div>
                        ))}
                        {freePciSlots.map(() => (
                            <div className="slot">
                                <FontAwesomeIcon icon="plus" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Computer;