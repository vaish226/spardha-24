import React, { useState, useCallback } from 'react'; 
import styles from './Events.module.css'; 
import { Link } from 'react-router-dom'; 

// Images 
import athletics from './image/athletics.png'; 
import athleticshover from './image/athleticshover.png'; 
import basketball from './image/basketball.png'; 
import basketballhover from './image/basketballhover.png'; 
import badminton from './image/badminton.png'; 
import badmintonhover from './image/badmintonhover.png'; 
import boxing from './image/boxing.png'; 
import boxinghover from './image/boxinghover.png'; 
import chess from './image/chess.png'; 
import chesshover from './image/chesshover.png'; 
import cricket from './image/cricket.png'; 
import crickethover from './image/crickethover.png'; 
import football from './image/football.png'; 
import footballhover from './image/footballhover.png'; 
import handball from './image/handball.png'; 
import handballhover from './image/handballhover.png'; 
import hockey from './image/hockey.png'; 
import hockeyhover from './image/hockeyhover.png'; 
import kabaddi from './image/kabaddi.png'; 
import kabaddihover from './image/kabaddihover.png'; 
import khokho from './image/kho-kho.png'; 
import khokhohover from './image/kho-khohover.png'; 
import cycling from './image/cycling.png'; 
import cyclinghover from './image/cyclinghover.png'; 
import squash from './image/squash.png'; 
import squashhover from './image/squashhover.png'; 
import powerlifting from './image/powerlifting.png'; 
import powerliftinghover from './image/powerliftinghover.png'; 
import tabletennis from './image/table-tennis.png'; 
import tabletennishover from './image/tabletennishover.png'; 
import taekwondo from './image/taekwondo.png'; 
import taekwondohover from './image/taekwondohover.png'; 
import tennis from './image/tennis.png'; 
import tennishover from './image/tennishover.png'; 
import volleyball from './image/volleyball.png'; 
import volleyballhover from './image/volleyballhover.png'; 
import weightlifting from './image/weightlifting.png'; 
import weightliftinghover from './image/weightliftinghover.png'; 

// Import captain data from Events_Components
import { eventCaptainData } from './Events_Components.js'; 

const Events = () => { 
  const [activeCardId, setActiveCardId] = useState(null); 
  const [hoverStates, setHoverStates] = useState({}); 

  const events = [ 
    { id: 0, name: 'Athletics', normal: athletics, hover: athleticshover, ...eventCaptainData.Athletics },
    { id: 1, name: 'Badminton', normal: badminton, hover: badmintonhover, ...eventCaptainData.Badminton },
    { id: 2, name: 'Basketball', normal: basketball, hover: basketballhover, ...eventCaptainData.Basketball },
    { id: 3, name: 'Boxing', normal: boxing, hover: boxinghover, ...eventCaptainData.Boxing },
    { id: 4, name: 'Chess', normal: chess, hover: chesshover, ...eventCaptainData.Chess },
    { id: 5, name: 'Cricket', normal: cricket, hover: crickethover, ...eventCaptainData.Cricket },
    { id: 6, name: 'Cycling', normal: cycling, hover: cyclinghover, ...eventCaptainData.Cycling },
    { id: 7, name: 'Football', normal: football, hover: footballhover, ...eventCaptainData.Football },
    { id: 8, name: 'Handball', normal: handball, hover: handballhover, ...eventCaptainData.Handball },
    { id: 9, name: 'Hockey', normal: hockey, hover: hockeyhover, ...eventCaptainData.Hockey },
    { id: 10, name: 'Kabaddi', normal: kabaddi, hover: kabaddihover, ...eventCaptainData.Kabbadi },
    { id: 11, name: 'Kho-Kho', normal: khokho, hover: khokhohover, ...eventCaptainData.Khokho },
    { id: 12, name: 'Powerlifting', normal: powerlifting, hover: powerliftinghover, ...eventCaptainData.Powerlifting },
    { id: 13, name: 'Squash', normal: squash, hover: squashhover, ...eventCaptainData.Squash },
    { id: 14, name: 'TableTennis', normal: tabletennis, hover: tabletennishover, ...eventCaptainData.TableTennis },
    { id: 15, name: 'Taekwondo', normal: taekwondo, hover: taekwondohover, ...eventCaptainData.Taekwondo },
    { id: 16, name: 'Tennis', normal: tennis, hover: tennishover, ...eventCaptainData.Tennis },
    { id: 17, name: 'Volleyball', normal: volleyball, hover: volleyballhover, ...eventCaptainData.Volleyball },
    { id: 18, name: 'Weightlifting', normal: weightlifting, hover: weightliftinghover, ...eventCaptainData.WeightLifting },
  ]; 

  const handleCardClick = useCallback((eventId) => {
    setActiveCardId(prevActiveId => {
      if (prevActiveId === eventId) {
        return null;
      }
      // Otherwise, set the new card as active (this automatically flips previous card back)
      return eventId;
    });
  }, []);

  const handleMouseEnter = useCallback((eventId) => { 
    if (activeCardId !== eventId) {
      setHoverStates(prev => ({ ...prev, [eventId]: true })); 
    }
  }, [activeCardId]); 

  const handleMouseLeave = useCallback((eventId) => { 
    setHoverStates(prev => ({ ...prev, [eventId]: false })); 
  }, []); 

  const getEventImage = (event) => hoverStates[event.id] ? event.hover : event.normal; 

  return ( 
    <div className={styles.eventsContainer}> 
      {/* Hero Section */} 
      <section className={styles.heroSection}> 
        <div className={styles.heroContent}> 
          <h1 className={styles.heroTitle}>SPARDHA EVENTS</h1> 
          <p className={styles.heroSubtitle}>Experience the thrill of competitive sports</p> 
          <Link to="/register/signup/" className={styles.heroRegisterBtn}> 
            Register Now 
          </Link> 
        </div> 
        <div className={styles.heroBackground}></div> 
      </section> 

      {/* Events Grid Section */} 
      <section className={styles.eventsGridSection}> 
        <div className={styles.container}> 
          {/* Section header unchanged */} 
          <div className={styles.eventsGrid}> 
            {events.map((event) => ( 
              <div 
                key={event.id} 
                className={`${styles.flipCard} ${activeCardId === event.id ? styles.flipped : ''}`}
                onClick={() => handleCardClick(event.id)}
                onMouseEnter={() => handleMouseEnter(event.id)}
                onMouseLeave={() => handleMouseLeave(event.id)}
              >
                <div className={styles.flipCardInner}>
                  {/* Front Side - unchanged */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.eventImageContainer}> 
                      <img src={getEventImage(event)} alt={event.name} className={styles.eventImage} /> 
                    </div> 
                    <div className={styles.eventName}> 
                      <span>{event.name}</span> 
                    </div> 
                    <div className={styles.ruleBookLink}>
                      <a 
                        href={event.rulebookPDF} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Rulebook
                      </a>
                    </div>
                  </div>

                  {/* Back Side - unchanged */}
                  <div className={styles.flipCardBack}>
                    <button 
                      className={styles.reverseButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(event.id); // This will now set activeCardId to null
                      }}
                      aria-label="Flip card back"
                    >
                      ⇄
                    </button>
                    
                    <div className={styles.contactsHeader}>Contacts</div>
                      <div className={styles.captainsContainer}>
    {event.captainsArray.map((captain, index) => (
      <div key={index} className={styles.captainDetails}>
        <div className={styles.captainName}>{captain.name}</div>
        <div className={styles.captainInfo}>
          <span>📞 {captain.contact}</span>
          <span>✉️ {captain.email}</span>
        </div>
      </div>
    ))}
    {event.viceCaptainsArray && event.viceCaptainsArray.length > 0 && (
      <>
        <div className={styles.roleDivider}>Vice Captains</div>
        {event.viceCaptainsArray.map((captain, index) => (
          <div key={index} className={styles.captainDetails}>
            <div className={styles.captainName}>{captain.name}</div>
            <div className={styles.captainInfo}>
              <span>📞 {captain.contact}</span>
              <span>✉️ {captain.email}</span>
            </div>
          </div>
        ))}
      </>
    )}
  </div>
                  </div>
                </div>
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 
    </div> 
  ); 
}; 

export default Events;


