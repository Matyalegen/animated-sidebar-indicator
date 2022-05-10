import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
//import smart_rs from './public/smart_rs.png'

const sidebarNavItems = [
    
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/employees',
        section: 'Dashboard'
    },
    {
        display: 'Asset Acquistion',
        icon: <i className='bx bx-star'></i>,
        to: '/acquistion',
        section: 'acquistion'
    },
    {
        display: 'Asset Utilization',
        icon: <i className='bx bx-revision'></i>,
        to: '/utilization',
        section: 'utilization'
    },
    {
        display: 'Asset Maintenance',
        icon: <i className='bx bx-user'></i>,
        to: '/maintenance',
        section: 'maintenance'
    },
    {
        display: 'Asset Dispossal',
        icon: <i className='bx bx-trash'></i>,
        to: '/disposal',
        section: 'disposal'
    },
    
    
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
        <img src="logo_smart_rs.png" alt="Smart_Rs"/>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
