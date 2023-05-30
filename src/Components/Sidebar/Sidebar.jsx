import styles from './sidebar.module.css';
import fxIcon from '../../assets/favicon-1-1@2x.png';
import dashIcon from '../../assets/dashboard-1-1@2x.png';
import usersIcon from '../../assets/group-1-1@2x.png';
import analyticsIcon from '../../assets/stats-1@2x.png';
import documentationIcon from '../../assets/writing-1@2x.png';
import settingsIcon from '../../assets/setting-1@2x.png';
import alertIcon from '../../assets/warning-1@2x.png';
import createIcon from '../../assets/file-1@2x.png';
import downIcon from '../../assets/arrowdownsigntonavigate-2-1@2x.png';

export default function Sidebar() {
  const menu = [
    {id: 1, name: "users" , icon: usersIcon, subMenu: [
      {id: 1, name: "All Customers"}
    ] },
    {id: 2, name: "analytics" , icon: analyticsIcon },
    {id: 3, name: "create reports" , icon: createIcon },
    {id: 4, name: "Documentation" , icon: documentationIcon },
    {id: 5, name: "settings" , icon: settingsIcon },
    {id: 6, name: "alerts" , icon: alertIcon }
  ]
  return (
    <div style={{ width: "350px", padding: "28px" }} className={styles.sideContainer}>
      <div className={styles.sideContainerInner}>
        <img src={fxIcon} className={styles.mainIcon}/>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.dashboard}>
          <img src={dashIcon} className={styles.dashIcon}/>
          <span className={styles.dashText}>Dashboard</span>
        </div>
      </div>
      <div className={styles.menuList}>
        {menu.map(item => (
          <div className={styles.menuNav} key={item.id}>
            <div className={styles.leftSide}>
              <img src={item.icon} className={styles.leftSideIcon}/>
              <span className={styles.leftSideText}>{item.name}</span>
            </div>
            <div>
              <img src={downIcon} className={styles.downIcon}/>
            </div>
            
          </div>  
        ))}
      </div>
      <div className={styles.logout}>
        <span>logout</span>
      </div>
    </div>
  )
}
