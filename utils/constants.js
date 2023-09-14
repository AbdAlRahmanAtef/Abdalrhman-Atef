import sec from '../assets/s-commerce.jpg';
import coffee from '../assets/coffee.jpg';
import crypto from '../assets/crypto.jpg';
import todo from '../assets/todo.jpg';
import game from '../assets/typing.jpg';
import cruds from '../assets/cruds.jpg';
import weather from '../assets/weather.jpg';
import tiktik from '../assets/tiktik.jpg';
import realator from '../assets/realator.jpg';
import amazona from '../assets/amazona.png';
import quran from '../assets/quran.jpg';
import yallaChat from '../assets/yalla-chat.png';
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { FiDatabase } from 'react-icons/fi';
import { GiElectric } from 'react-icons/gi';
import {
  TbBrandJavascript,
  TbBrandSass,
  TbBrandHtml5,
  TbBrandCss3,
} from 'react-icons/tb';
import { DiReact } from 'react-icons/di';

export const projectsData = [
  {
    name: 'Amazona',
    code: 'https://github.com/AbdAlRahmanAtef/amazona',
    live: 'https://amazona-henna.vercel.app/',
    image: amazona,
    stack: [
      {
        tec: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        tec: 'TypeScript',
        icon: <SiTypescript />,
      },
      {
        tec: 'Tailwind',
        icon: <SiTailwindcss />,
      },
      {
        tec: 'MongoDb',
        icon: <FiDatabase />,
      },
    ],
  },

  {
    name: 'Yalla-Chat',
    code: 'https://github.com/AbdAlRahmanAtef/yalla-chat',
    live: 'https://yalla-chat.vercel.app/',
    image: yallaChat,
    stack: [
      {
        tec: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        tec: 'TypeScript',
        icon: <SiTypescript />,
      },
      {
        tec: 'Tailwind',
        icon: <SiTailwindcss />,
      },
      {
        tec: 'MongoDb',
        icon: <FiDatabase />,
      },
    ],
  },

  {
    name: 'TikTik',
    code: 'https://github.com/AbdAlRahmanAtef/tik-tik',
    live: 'https://tik-m7c3y402t-abdalrahmanatef.vercel.app/',
    image: tiktik,
    stack: [
      {
        tec: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        tec: 'TypeScript',
        icon: <SiTypescript />,
      },
      {
        tec: 'Tailwind',
        icon: <SiTailwindcss />,
      },
      {
        tec: 'Sanity',
        icon: <FiDatabase />,
      },
    ],
  },

  {
    name: 'E-Commerce',
    code: 'https://github.com/AbdAlRahmanAtef/nextjs-ecommerce',
    live: 'https://nextjs-ecommerce-rcbbkxx15-abdalrahmanatef.vercel.app/',
    image: sec,
    stack: [
      {
        tec: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        tec: 'SASS',
        icon: <TbBrandSass />,
      },
      {
        tec: 'Sanity',
        icon: <FiDatabase />,
      },
    ],
  },
  {
    name: 'Realator',
    code: 'https://github.com/AbdAlRahmanAtef/realator',
    live: 'https://realator-k71c7byw2-abdalrahmanatef.vercel.app/',
    image: realator,
    stack: [
      {
        tec: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        tec: 'Chakra UI',
        icon: <GiElectric />,
      },
      {
        tec: 'API',
        icon: <AiOutlineApi />,
      },
    ],
  },
  {
    name: 'Cryptocurrency',
    code: 'https://github.com/AbdAlRahmanAtef/Cryptocurrency-App',
    live: 'https://abdalrahmanatef.github.io/Cryptocurrency-App/',
    image: crypto,
    stack: [
      {
        tec: 'React',
        icon: <DiReact />,
      },
      {
        tec: 'Redux',
        icon: <SiRedux />,
      },
      {
        tec: 'SASS',
        icon: <TbBrandSass />,
      },
    ],
  },
  {
    name: 'Al-Quran',
    code: 'https://github.com/AbdAlRahmanAtef/quran-app',
    live: 'https://al-quran-al-karem-movsu73ml-abdalrahmanatef.vercel.app/',
    image: quran,
    stack: [
      {
        tec: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        tec: 'SASS',
        icon: <TbBrandSass />,
      },
      {
        tec: 'API',
        icon: <AiOutlineApi />,
      },
    ],
  },
  {
    name: 'Todo App',
    code: 'https://github.com/AbdAlRahmanAtef/next-todo-app',
    live: 'https://todo-dpre84db6-abdalrahmanatef.vercel.app/',
    image: todo,
    stack: [
      {
        tec: 'Next',
        icon: <SiNextdotjs />,
      },
      {
        tec: 'SASS',
        icon: <TbBrandSass />,
      },
    ],
  },
  {
    name: 'Inventory App',
    code: 'https://github.com/AbdAlRahmanAtef/Products-Management-System-CRUDS',
    live: 'https://abdalrahmanatef.github.io/Products-Management-System-CRUDS/',
    image: cruds,
    stack: [
      {
        tec: 'HTML',
        icon: <TbBrandHtml5 />,
      },
      {
        tec: 'SASS',
        icon: <TbBrandSass />,
      },
      {
        tec: 'JavaScript',
        icon: <TbBrandJavascript />,
      },
    ],
  },
  {
    name: 'Weather App',
    code: 'https://github.com/AbdAlRahmanAtef/Weather-App-PWA',
    live: 'https://abdalrahmanatef.github.io/Weather-App-PWA/',
    image: weather,
    stack: [
      {
        tec: 'React',
        icon: <DiReact />,
      },
      {
        tec: 'CSS',
        icon: <TbBrandCss3 />,
      },
      {
        tec: 'API',
        icon: <AiOutlineApi />,
      },
    ],
  },
  {
    name: 'Coffee Shop',
    code: 'https://github.com/AbdAlRahmanAtef/Responsive-Coffee-shop',
    live: 'https://abdalrahmanatef.github.io/Responsive-Coffee-shop/',
    image: coffee,
    stack: [
      {
        tec: 'HTML',
        icon: <TbBrandHtml5 />,
      },
      {
        tec: 'CSS',
        icon: <TbBrandCss3 />,
      },
      {
        tec: 'JavaScript',
        icon: <TbBrandJavascript />,
      },
    ],
  },

  // {
  //   name: 'Typing Speed Test',
  //   code: 'https://github.com/AbdAlRahmanAtef/Typing-Speed-Test-Game',
  //   live: 'https://abdalrahmanatef.github.io/Typing-Speed-Test-Game/',
  //   image: game,
  //   stack: [
  //     {
  //       tec: 'HTML',
  //       icon: <TbBrandHtml5 />,
  //     },
  //     {
  //       tec: 'CSS',
  //       icon: <TbBrandCss3 />,
  //     },
  //     {
  //       tec: 'JavaScript',
  //       icon: <TbBrandJavascript />,
  //     },
  //   ],
  // },
];
