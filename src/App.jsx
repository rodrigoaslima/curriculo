import styles from './App.module.css';
import { VscMailRead } from 'react-icons/vsc';  
import { FaMapMarkerAlt, FaLinkedin, FaPhoneAlt} from 'react-icons/fa';
import {BsDiamond} from 'react-icons/bs';

function App() {
  
  return (
    <div className={styles.container}>
      <div className={styles.sidemenu}>
        <img className={styles.portrait} src="https://avatars.githubusercontent.com/u/34490697?v=4"/>

        <div className={styles.optionsContainer}>
          <div>
            <h1>Skills</h1>
            <div>
              <div className={styles.skillCard}>HTML</div>
              <div className={styles.skillCard}>CSS</div>
              <div className={styles.skillCard}>React-Native</div>
              <div className={styles.skillCard}>ReactJS</div>
              <div className={styles.skillCard}>JavaScript</div>
            </div>
          </div>

          <div>
            <h1>Idiomas</h1>

            <div>
              <div>Portugues</div>
              <div><i>Fluente/Nativo</i></div>
            </div>

            <div>
              <div>Inglês</div>
              <div><i>Avançado</i></div>
            </div>
            
          </div>

        </div>
      </div>

      <div className={styles.infoContainer}>

        <div>
          <div className={styles.nameStyle}>Rodrigo Augusto Silva Lima</div>
          <div className={styles.titleStyle}>Desenvolvedor Front-End</div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum id condimentum lacus. Nullam id erat non erat pulvinar semper. 
          Phasellus molestie lectus quis orci aliquam, quis dignissim nunc volutpat. 
          Vestibulum mi diam, pellentesque a molestie at, volutpat id erat. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur 
          ridiculus mus. Sed a velit sed enim scelerisque euismod. 
          In dictum, elit congue rhoncus cursus, neque sapien ullamcorper mauris, 
          id tempor diam risus et nulla.
        </p>

        <div className={styles.contactInfo}>
          <span className={styles.info}><VscMailRead/>email@email.com</span>
          <span className={styles.info}><FaPhoneAlt/>88997-9876</span>
        </div>

        <div className={styles.contactInfo}>
          <span className={styles.info}><FaMapMarkerAlt/>São Paulo - SP</span>
          <span className={styles.info}><FaLinkedin/>likedin.com/in/linkdin</span>
        </div>

        <h1><BsDiamond/>Escolaridade</h1>

        <h2>Faculdade 1</h2>
        <span>Inicio: 00/00/0000</span>
        <span>Termino: 00/00/0000</span>

        <p>
          Aliquam ultricies dictum massa vel dictum. Sed pretium malesuada leo. 
          Vivamus consequat turpis a leo euismod convallis. Sed pellentesque ornare 
          enim interdum pellentesque. Pellentesque habitant morbi tristique senectus 
          et netus et malesuada fames ac turpis egestas. Ut finibus consectetur ligula 
          eu pharetra. Nullam eget egestas velit. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia curae;
        </p>

        <h2>Faculdade 2</h2>
        <span>Inicio: 00/00/0000</span>
        <span>Termino: 00/00/0000</span>

        <p>
          Aliquam ultricies dictum massa vel dictum. Sed pretium malesuada leo. 
          Vivamus consequat turpis a leo euismod convallis. Sed pellentesque ornare 
          enim interdum pellentesque. Pellentesque habitant morbi tristique senectus 
          et netus et malesuada fames ac turpis egestas. Ut finibus consectetur ligula 
          eu pharetra. Nullam eget egestas velit. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia curae;
        </p>

        <h1>Cursos Livres</h1>

        <h2>Curso 1</h2>
        <span>Inicio: 00/00/0000</span>
        <span>Termino: 00/00/0000</span>

        <p>
          Aliquam ultricies dictum massa vel dictum. Sed pretium malesuada leo. 
          Vivamus consequat turpis a leo euismod convallis. Sed pellentesque ornare 
          enim interdum pellentesque. Pellentesque habitant morbi tristique senectus 
          et netus et malesuada fames ac turpis egestas. Ut finibus consectetur ligula 
          eu pharetra. Nullam eget egestas velit. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia curae;
        </p>

        <h2>Curso 2</h2>
        <span>Inicio: 00/00/0000</span>
        <span>Termino: 00/00/0000</span>

        <p>
          Aliquam ultricies dictum massa vel dictum. Sed pretium malesuada leo. 
          Vivamus consequat turpis a leo euismod convallis. Sed pellentesque ornare 
          enim interdum pellentesque. Pellentesque habitant morbi tristique senectus 
          et netus et malesuada fames ac turpis egestas. Ut finibus consectetur ligula 
          eu pharetra. Nullam eget egestas velit. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia curae;
        </p>

        <h2>Curso 3</h2>
        <span>Inicio: 00/00/0000</span>
        <span>Termino: 00/00/0000</span>

        <p>
          Aliquam ultricies dictum massa vel dictum. Sed pretium malesuada leo. 
          Vivamus consequat turpis a leo euismod convallis. Sed pellentesque ornare 
          enim interdum pellentesque. Pellentesque habitant morbi tristique senectus 
          et netus et malesuada fames ac turpis egestas. Ut finibus consectetur ligula 
          eu pharetra. Nullam eget egestas velit. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia curae;
        </p>


      </div>
    </div>
  )
}

export default App
