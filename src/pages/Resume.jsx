import Button from '../components/Button'
import './Resume.css'
import cvIcon from '../assets/CVIcon.png';
import InfoCard from '../components/InfoCard';


export default function Resume(){
    const styleSheet ={
        title: {
            fontFamily: 'serif', 
            fontSize: "25px", 
            textAlign: 'center',
        }, 

        body: {
            fontFamily: 'Poppins', 
            fontSize: "16px",     
        }, 
        lalign: {
            textAlign: 'left'
        }, 

        ralign:{
            textAlign: 'right'
        }, 

        bolded:{
            textWeight: "600", 
            fontSize: "16px"
        }
    }

    const awards = [
        {
          title: "2023 SOPHIA BURNETT MEMORIAL AWARD",
          description: "HIGHEST GPA IN MEDIA ARTS"
        },
        {
          title: "2022 SIMON CHANG AWARD",
          description: "OUTSTANDING THIRD YEAR STUDENTS OF VISUAL ARTS, MEDIA, AND DESIGN"
        },
        {
          title: "2022 CHRISTOPHER FOUNDATION SCHOLARSHIP",
          description: "OUTSTANDING ARTIST ACHIEVEMENT"
        },
        {
          title: "2021 EMILY CARR UNIVERSITY ACHIEVEMENT SCHOLARSHIP",
          description: "ACADEMIC EXCELLENCE"
        },
        {
          title: "2020 EMILY CARR UNIVERSITY ACHIEVEMENT SCHOLARSHIP",
          description: "ACADEMIC EXCELLENCE"
        }
      ];

      const experiences = [
        {
          title: "CG TEXTURE & LOOK DEVELOPMENT ARTIST",
          experience: "ATOMIC CARTOONS | 2024 MARCH – CURRENT"
        },
        {
          title: "LIGHTING AND COMPOSITING ARTIST",
          experience: "RELISH STUDIOS | 2023 JUNE – 2024 MARCH"
        },
        {
          title: "3D GENERALIST",
          experience: "EMILY CARR UNIVERSITY OF ART + DESIGN, FLYING TOMATO INC. | 2021 SEPT – 2022 MAY"
        },
        {
          title: "3D TUTOR",
          experience: "SELF EMPLOYED | 2022 SEPT – 2023 MAY"
        },
        {
          title: "DIRECTOR AND CREATOR",
          experience: "DOCUMENTS OF LIFE | 2023"
        }
      ];
      
      

    return (
    <div className="wrapper">

        <div className="resume page-enter">
        <Button title="PRESS TO VIEW RESUME" width="5" height="2"/>
        <img src={cvIcon} alt="CV icon" width="120" height="120" />

        <p className ="introduction">
        Hi! <br/>My name is Sophia, and thank you for visiting my profile.<br/>Please feel free to reach out!
        </p>

        <InfoCard title="CONTACT" body="SOPHIAMOK.SUMIN@GMAIL.COM"/>
        <InfoCard title="SOFTWARE SKILLS" body="MAYA | ZBRUSH | ARNOLD | REDSHIFT | RENDERMAN | MARI | KATANA | SUBSTANCE PAINTER | SUBSTANCE DESIGNER <br/> MARMOSET TOOLBAG | UNREAL ENGINE | PHOTOSHOP | PREMIERE PRO | AFTER EFFECTS | ABLETON"/>
        <InfoCard title="EDUCATION" body="EMILY CARR UNIVERSITY OF ART + DESIGN | <b>2019 - 2023<b/>" />
        
        <div className="awards">
        <h2 style={styleSheet.title}>AWARDS</h2>
        <table className="awards-table">
        <tbody>
            {awards.map((award, index) => (
                <tr key={index}>
                   <td style={styleSheet.ralign}>{award.title}</td>
                   <td className="hightlighted"><strong>{award.description}</strong></td>
                </tr>
            ))}
        </tbody>
        </table>
        </div>

        <div className="experiences">
        <h2 style={styleSheet.title}>EXPERIENCE</h2>
            {experiences.map((exp, index) => (
                <div key={index}>
                <h2 className="highlighted">{exp.title}</h2>
                <p>{exp.experience}</p>
                </div>

            ))}</div>
        </div>
    </div>); 
}