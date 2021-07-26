import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info: 'slechts een proeftekst uit'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'slechts een proeftekst uit'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'slechts een proeftekst uit'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info: 'slechts een proeftekst uit'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
