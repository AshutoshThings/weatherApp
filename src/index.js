import './style.css';
import { getData } from './logic.js';

window.addEventListener('DOMContentLoaded', () => {
  const renderApp = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(createHeader());
    root.appendChild(createMainContent());
    root.appendChild(createFooter());
  };
  const createHeader = () => {
    const header = document.createElement('header');
    header.className = 'site-header';

    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const brand = document.createElement('div');
    brand.className = 'nav-brand';
    brand.textContent = 'WeatherApp';

    const navLinks = document.createElement('ul');
    navLinks.className = 'nav-links';

    const links = ['Home', 'About', 'Contact'];
    links.forEach((linkText) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = linkText;
      li.appendChild(a);
      navLinks.appendChild(li);
    });

    nav.appendChild(brand);
    nav.appendChild(navLinks);
    header.appendChild(nav);

    return header;
  };
  const searchCity = () => {
    const divforSearch = document.createElement('div');
    divforSearch.className = 'search-container';
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.placeholder = 'Enter city name...';
    const btn = document.createElement('button');
    btn.textContent = 'Go';
    btn.addEventListener('click', () => {
      console.log('fetch the api');
      getData();
    });
    divforSearch.append(inp, btn);
    return divforSearch;
  };
  const createMainContent = () => {
    const main = document.createElement('main');
    main.className = 'main-content';

    const weatherData = [
      {
        city: 'Delhi',
        temp: '31',
        description: 'Hazy Sunshine',
        feels_like: '33',
      },
    ];
    main.appendChild(searchCity());
    weatherData.forEach((data) => {
      main.appendChild(createHeroSection(data));
    });

    return main;
  };
  const createHeroSection = (data) => {
    const section = document.createElement('section');
    section.className = 'hero-section';

    const cityName = document.createElement('h2');
    cityName.className = 'city-name';
    cityName.textContent = data.city || '[City Name]';

    const details = document.createElement('div');
    details.className = 'weather-details';

    const temperature = document.createElement('p');
    temperature.className = 'temperature';
    temperature.innerHTML = `${data.temp || '[--]'}<span>°C</span>`;

    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = data.description || '[Weather Description]';

    const feelsLike = document.createElement('p');
    feelsLike.className = 'extra-info';
    feelsLike.textContent = `Feels like: ${data.feels_like || '[--]'}°C`;

    details.appendChild(temperature);
    details.appendChild(description);
    details.appendChild(feelsLike);

    section.appendChild(cityName);
    section.appendChild(details);

    return section;
  };
  const createFooter = () => {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';

    const copyright = document.createElement('p');
    const currentYear = new Date().getFullYear(); // Updated to 2025
    copyright.textContent = `© ${currentYear} WeatherApp. All Rights Reserved.`;

    footer.appendChild(copyright);
    return footer;
  };
  renderApp();
});
